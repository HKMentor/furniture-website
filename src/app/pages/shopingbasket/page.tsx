import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Image from "next/image";

const ShoppingCart = () => {
  return (
    <div>
      <Header />

      <main className="container mx-auto mt-20 sm:p-6 bg-white font-[Clash Display]  shadow-md px-32">
        <h2 className="text-4xl text-[#2A254B] px-28  mb-10">
          Your shopping cart
        </h2>

        <div className="hidden sm:grid grid-cols-3 sm:grid-cols-5 font-medium text-gray-800  px-28">
          <p className="col-span-2">Product</p>
          <p className="text-center ml-52">Quantity</p>
          <p className="text-right col-span-2">Total</p>
        </div>
        <hr className="ml-24 mr-24" />

        {/* Cart Items */}
        <div className="space-y-6 mt-8 px-28">
          {/* Item 1 */}
          <div className="flex flex-col sm:flex-row items-center ">
            <Image
              src="/images/shopimg1.jpg"
              alt="Graystone vase"
              className="w-28 h-32  object-cover"
              width={350}
              height={350}
            />
            <div className="flex-1 mt-4 sm:mt-0 sm:ml-6 text-[#2a254b]">
              <h3 className="font-semibold ">Graystone vase</h3>
              <p className="text-sm  mt-3">
                A timeless ceramic vase with <br /> a tri color grey glaze.
              </p>
              <p className=" mt-4">£85</p>
            </div>
            <div className="text-center sm:w-32 mt-2 sm:mt-0 mr-36 ">1</div>
            <div className="text-right mt-2 sm:mt-0  sm:w-32">£85</div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col sm:flex-row items-center border-b pb-4">
            <Image
              src="/images/shopimg2.jpg"
              alt="Basic white vase"
              className="w-28 h-32 object-cover"
              width={350}
              height={350}
            />
            <div className="flex-1 mt-4 sm:mt-0 sm:ml-6 text-[#2a254b]">
              <h3 className="font-semibold  ">Basic white vase</h3>
              <p className="text-sm  mt-3">
                Beautiful and simple, this is <br /> one for the classics.
              </p>
              <p className=" mt-3">£85</p>
            </div>
            <div className="text-center sm:w-32 mt-2 sm:mt-0 mr-36">1</div>
            <div className="text-right mt-2 sm:mt-0 sm:w-32">£125</div>
          </div>
        </div>

        {/* Subtotal */}
        <div className="mt-4 flex justify-end">
          <div className="w-full md:w-auto px-4">
            <p className="text-2xl font-clash-display text-[#2A254b]">
              Subtotal <span>£210</span>
            </p>

            <p className="text-sm text-[#2A254b] mt-2 ">
              Taxes and shipping are calculated at checkout
            </p>

            <button className="mt-4 bg-[#2A254b] text-white px-4 py-3 hover:bg-gray-500 w-full md:w-auto">
              Go to checkout
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShoppingCart;
