import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from "../../components/ProductDetailsCarousel";
import ReactMarkdown from "react-markdown";
import RelatedProducts from "../../components/RelatedProducts";
import Wrapper from "../../components/Wrapper";
import { addToCart } from "../../store/slices/cartSlice";
import { fetchDataFromApi } from "../../utils/api";
import { getDiscountedPricePercentage } from "../../utils/helper";

const ProductDetails = ({ product, products }) => {
  const dispatch = useDispatch();

  const p = product?.data?.[0]?.attributes;

  // const [selectedSize, setSelectedSize] = useState();
  const [showError, setShowError] = useState(false);

  const notify = () => {
    toast.success("Success , Check your cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="w-full md:py-20">
      <ToastContainer />
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel images={p?.image?.data} />
          </div>

          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {p.name}
            </div>

            <div className="text-lg font-semibold mb-5">{p.subtitle}</div>

            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold">
                MRP : ${p.price}
              </p>
              {p.original_price && (
                <>
                  <p className="text-base  font-medium line-through">

                   ${p.original_price}
                  </p>
                  <p className="ml-auto text-base font-medium text-green-500">
                    {getDiscountedPricePercentage(p.original_price, p.price)}%
                    off
                  </p>
                </>
              )}
            </div>

            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div>

         

            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
              onClick={() => {
             
                  dispatch(
                    addToCart({
                      ...products?.data?.[0],

                      oneQuantityPrice: p.price,
                    })
                  );
                  notify();

              }}
            >
              Add to Cart
            </button>

            {/* <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button> */}

            <div>
              <div className="text-lg font-bold mb-5 markdown">
                Product Details
              </div>
              <div className="markdown text-md mb-5">
                <ReactMarkdown>{p.description}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>

        <RelatedProducts products={products} />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

export async function getStaticPaths() {
  const products = await fetchDataFromApi("/api/products?populate=*");
  const paths = products?.data?.map((p) => ({
    params: {
      slug: p.attributes.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const product = await fetchDataFromApi(
    `/api/products?populate=*&filters[slug][$eq]=${slug}`
  );
  const products = await fetchDataFromApi(
    `/api/products?populate=*&[filters][slug][$ne]=${slug}`
  );

  return {
    props: {
      product,
      products,
    },
  };
}
