import Image from "next/image";
import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { PiFlowerTulip } from "react-icons/pi";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";
import Link from "next/link";
const ProductListing = () => {
  return (
    <div>
      <Header />


      <div className="min-h-screen mt-20 flex items-center justify-center">
        <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <Image
              src="/products/dandy.jpg" // Replace with your image path
              alt="The Dandy Chair"
              className="object-cover w-full h-full  "
              width={300}
              height={300}
            />
          </div>

          {/* Product Details Section */}
          <div className="ml-10">
            <h1 className="text-4xl font-bold text-gray-800">The Dandy Chair</h1>
            <p className="text-2xl text-[#2A254B] font-semibold mt-2">£250</p>

            <p className="text-gray-600 mt-6">
              A timeless design, with premium materials features as one of our
              most popular and iconic pieces. The dandy chair is perfect for any
              stylish living space with beech legs and lambskin leather
              upholstery.
            </p>

            <ul className="list-disc list-inside  text-gray-600 mt-4">
              <li>Premium material</li>
              <li>Handmade upholstery</li>
              <li>Quality timeless classic</li>
            </ul>

            <div className="mt-6">
              <h2 className="text-lg font-medium  text-gray-700">Dimensions</h2>
              <div className="flex gap-12 mt-5">
                <p className="text-gray-600">Height </p>
                <p className="text-gray-600">Width </p>
                <p className="text-gray-600">Depth </p>
              </div>
              <div className="flex gap-12 mt-2  ">
                <p className="text-gray-600">   110cm</p>
                <p className="text-gray-600">  75cm</p>
                <p className="text-gray-600">  50cm</p>
              </div>
            </div>

            <div className="mt-6 flex items-center space-x-4">
              <label className="text-gray-700 font-medium" htmlFor="amount">
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                className="w-24 bg-gray-100 border text-center py-1"
                defaultValue="1"
                min="1"
              />
            </div>

            <div className="flex  justify-end">
              <button className="mt-6 w-36 bg-[#2A254B] text-white py-3  hover:bg-purple-900 transition">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>



      <div className="container mx-auto px-14 ">

        <div className="text-left ml-7 mb-8">
          <h2 className="text-4xl font-[clash-display]">You might also like</h2>
        </div>
        <div className="flex flex-wrap">
          {/* Product 1 */}
          <div className="w-full sm:w-1/4 p-2">
            <div className="bg-white p-4 w-full h-[375px]">
              <Image
                src="/images/product1.jpg"
                alt="product 1"
                width={250}
                height={250}
                className="w-full h-[300px] mb-2 object-cover"
              />
              <div className="text-left">
                <h3 className="text-lg font-medium mb-1">The Dandy Chair</h3>
                <p className="text-gray-600">£250</p>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="w-full sm:w-1/4 p-2">
            <div className="bg-white p-4 w-full h-[375px]">
              <Image
                src="/images/product2.jpg"
                alt="product 2"
                width={250}
                height={250}
                className="w-full h-[300px] mb-2 object-cover"
              />
              <div className="text-left">
                <h3 className="text-lg font-medium mb-1">Rustic Vase Set</h3>
                <p className="text-gray-600">£155</p>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="w-full sm:w-1/4 p-2">
            <div className="bg-white p-4 w-full h-[375px]">
              <Image
                src="/images/product3.jpg"
                alt="product 3"
                width={250}
                height={250}
                className="w-full h-[300px] mb-2 object-cover"
              />
              <div className="text-left">
                <h3 className="text-lg font-medium mb-1">The Silky Vase</h3>
                <p className="text-gray-600">£125</p>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="w-full sm:w-1/4 p-2">
            <div className="bg-white p-4 w-full h-[375px]">
              <Image
                src="/images/product4.jpg"
                alt="product 4"
                width={250}
                height={250}
                className="w-full h-[300px] mb-2 object-cover"
              />
              <div className="text-left">
                <h3 className="text-lg font-medium mb-1">The Lucy Lamp</h3>
                <p className="text-gray-600">£399</p>
              </div>
            </div>
          </div>
        </div>

        {/* Centering the button */}
        <div className="flex justify-center mt-6">
          <Link href="/pages/product">

            <button className="text-black w-36 h-12 rounded-s bg-[#f9f9f9]  py-2 px-4 focus:outline-none hover:bg-purple-700">
              View collection
            </button>
          </Link>
        </div>


      </div>
      <div>
        <div className=" p-4 mb-20">
          <h2 className="text-3xl text-[#2A254B] text-center mb-8">
            What makes our brand different
          </h2>
          <div className="grid grid-cols-1 px-14 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Box 1 */}
            <div className="flex flex-col items-left bg-gray-100 p-6 shadow-md">
              {/* Icon */}
              <div className=" text-2xl">
                <TbTruckDelivery />
              </div>
              {/* Heading */}
              <h3 className="text-xl font-semibold mb-2">
                Next day as standard
              </h3>
              {/* Paragraph */}
              <p className="text-gray-600 text-left">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
            {/* Feature Box 2 */}
            <div className="flex flex-col items-left bg-gray-100 p-6  shadow-md">
              <div className=" text-2xl">
                <IoCheckmarkCircleOutline />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Made by true artisans
              </h3>
              <p className="text-gray-600 text-left">
                Handmade crafted goods made with real passion and craftmanship
              </p>
            </div>
            {/* Feature Box 3 */}
            <div className="flex flex-col items-left bg-gray-100 p-6  shadow-md">
              <div className=" text-2xl">
                <MdOutlineFeaturedPlayList />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unbeatable prices</h3>
              <p className="text-gray-600 text-left">
                For our materials and quality you won’t find better prices
                anywhere{" "}
              </p>
            </div>
            {/* Feature Box 4 */}
            <div className="flex flex-col items-left bg-gray-100 p-6  shadow-md">
              <div className=" text-2xl ">
                <PiFlowerTulip />
              </div>
              <h3 className="text-xl font-semibold mb-2">Recycled packaging</h3>
              <p className="text-gray-600 text-left">
                We use 100% recycled to ensure our footprint is more manageable
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F9f9f9] py-12 font-[clash display]">
        <div
          className="bg-white mx-auto rounded-lg shadow-lg p-8 w-full max-w-7xl"
          style={{ maxWidth: "1273px" }}
        >
          <div className="flex justify-center items-center h-full font-[Clash Display]">
            <div className="bg-white p-8 w-full max-w-lg">
              {/* Heading */}
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
                Join the club and get the benefits
              </h1>

              {/* Paragraph */}
              <p className="text-gray-600 mb-6 text-center">
                Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
              </p>

              {/* Signup Form */}
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-grow bg-gray-100 text-gray-800 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button className="bg-black text-white px-6 py-2 hover:bg-purple-900">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  );
};

export default ProductListing;

