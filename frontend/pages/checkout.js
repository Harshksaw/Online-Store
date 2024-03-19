"use client";

import ConfirmationModal from "@/components/Model";
import CheckoutModal from "@/components/Model";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
const CheckoutPage = () => {
  const router = useRouter();
  const [confirmationModal, setConfirmationModal] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    state: "",
    city: "",
  });

  const { cartItems } = useSelector((state) => state.cart);
  console.log("cartItems->", cartItems);

  const modalData = {
    text1: "Thank you for your order!",
    text2: "Your order is being processed and will be delivered soon.",
    btn1Text: "Continue Shopping",
    btn1Handler: () => router.push("/", { scroll: false }),
  };
  //product data
  const productData = cartItems.map((item) => ({
    id: item.id,
    name: item.attributes.name,
    price: item.attributes.price,
    quantity: item.quantity,
  }));

  console.log("productData->", productData);
  const formattedProductData = productData
    .map(
      (product) =>
        `ID: ${product.id}, Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`,
    )
    .join("; ");

  console.log("ans=>", formattedProductData);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const googleformsubmit = async () => {
    fetch("https://sheetdb.io/api/v1/j79vyf96l9ukc", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            id: "INCREMENT",
            name: `${formData.name}`,
            email: `${formData.email}`,
            address: `${formData.address}`,
            phoneNumber: `${formData.phoneNumber}`,
            state: `${formData.state}`,
            city: `${formData.city}`,
            products: `${formattedProductData}`,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log("orders->", cartItems);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //   const response = await axios.post('/api/checkouts', formData);
      // Handle successful response (e.g., show a success message)
      if (productData.length <= 0) {
        throw new Error("No products in cart");
      }
      await googleformsubmit();
      console.log("Checkout data sent successfully:", formData);
      setConfirmationModal(true);
    } catch (error) {
      console.error("Error sending checkout data:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <>
      <div className="container mx-auto px-20 py-10 mb-40">
        <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

        <div className="bg-gray-100 dark:bg-gray-200">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="state">
                State
              </label>
              <input
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                type="text"
                name="state"
                id="state"
                value={formData.state}
                onChange={handleChange}
                required
                placeholder="Enter your state"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="city">
                City
              </label>
              <input
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="Enter your city"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="address"
              >
                Delivery Address
              </label>
              <textarea
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Enter your delivery address"
              />
            </div>
            {/* Add additional form fields for payment information (handled later in Strapi) */}
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white font-bold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>

      {confirmationModal && <ConfirmationModal modalData={modalData} />}
    </>
  );
};

export default CheckoutPage;
