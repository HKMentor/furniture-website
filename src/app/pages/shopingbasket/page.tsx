import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Image from "next/image";

const ShoppingCart = () => {
  return (
    <div>
      <Header />

      <main className="container mx-auto mt-20 px-4 sm:px-6 lg:px-16 bg-white font-[Clash Display] shadow-md mb-10">
        <h2 className="text-2xl sm:text-4xl text-[#2A254B] mb-8 text-center sm:text-left">
          Your shopping cart
        </h2>

        {/* Table Headers */}
        <div className="hidden sm:grid grid-cols-3 sm:grid-cols-5 font-medium text-gray-800 mb-4">
          <p className="col-span-2">Product</p>
          <p className="text-center">Quantity</p>
          <p className="text-right col-span-2">Total</p>
        </div>
        <hr className="hidden sm:block" />

        {/* Cart Items */}
        <div className="space-y-6 mt-8">
          {/* Item 1 */}
          <div className="flex flex-col sm:flex-row items-center border-b pb-4">
            <Image
              src="/images/shopimg1.jpg"
              alt="Graystone vase"
              className="w-20 h-24 sm:w-28 sm:h-32 object-cover"
              width={350}
              height={350}
            />
            <div className="flex-1 mt-4 sm:mt-0 sm:ml-6 text-[#2A254B] text-center sm:text-left">
              <h3 className="font-semibold">Graystone vase</h3>
              <p className="text-sm mt-2 sm:mt-3">
                A timeless ceramic vase with <br className="hidden sm:block" /> a tri color grey glaze.
              </p>
              <p className="mt-3 sm:mt-4">£85</p>
            </div>
            <div className="text-center sm:w-32 mt-2 sm:mt-0">1</div>
            <div className="text-right mt-2 sm:mt-0 sm:w-32">£85</div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col sm:flex-row items-center border-b pb-4">
            <Image
              src="/images/shopimg2.jpg"
              alt="Basic white vase"
              className="w-20 h-24 sm:w-28 sm:h-32 object-cover"
              width={350}
              height={350}
            />
            <div className="flex-1 mt-4 sm:mt-0 sm:ml-6 text-[#2A254B] text-center sm:text-left">
              <h3 className="font-semibold">Basic white vase</h3>
              <p className="text-sm mt-2 sm:mt-3">
                Beautiful and simple, this is <br className="hidden sm:block" /> one for the classics.
              </p>
              <p className="mt-3 sm:mt-4">£125</p>
            </div>
            <div className="text-center sm:w-32 mt-2 sm:mt-0">1</div>
            <div className="text-right mt-2 sm:mt-0 sm:w-32">£125</div>
          </div>
        </div>

        {/* Subtotal */}
        <div className="mt-6 flex flex-col sm:flex-row justify-end items-center sm:items-start">
          <div className="w-full sm:w-auto text-center sm:text-right">
            <p className="text-xl sm:text-2xl font-semibold text-[#2A254B]">
              Subtotal: <span className="font-bold">£210</span>
            </p>
            <p className="text-sm text-[#2A254B] mt-2">
              Taxes and shipping are calculated at checkout
            </p>
            <button className="mt-4 bg-[#2A254B] text-white px-6 py-3 hover:bg-gray-500 w-full sm:w-auto">
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
