import { useEffect, useState } from "react";

import { HeroBanner } from "../components/HeroBanner";
import ProductCard from "../components/ProductCard.jsx";
import Wrapper from "../components/Wrapper";
import {fetchDataFromApi} from "../utils/api";

export default function Home({products}) {




  
 
  return (
    <main>
      <HeroBanner />

      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
          <p>Welcome to our online store! Browse through our wide selection of products and find the perfect items for your needs. Whether you're looking for clothing, accessories, or home decor, we have it all. Shop with confidence and enjoy a seamless shopping experience with us.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products?.data?.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
      </Wrapper>
    </main>
  );
}



export async function getStaticProps() {
  const products = await fetchDataFromApi("/api/products?populate=*");

  return {
      props: { products : products},
  };
}