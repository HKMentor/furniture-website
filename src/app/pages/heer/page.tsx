import Image from "next/image";
import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TiTick } from "react-icons/ti";
import { MdOutlinePriceChange } from "react-icons/md";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";
import Link from "next/link";
const Hero = () => {
  return (
    <div>
      <Header/>
      <section className="text-gray-600 font-[clash-display] px-6 sm:px-12 lg:px-36 py-20 bg-fixed">
  <div className="bg-[#2a254b]  flex flex-col md:flex-row items-center mx-auto max-w-4xl">
    {/* Left Side: Content */}
    <div className="w-full md:w-1/2 flex flex-col ml-11 text-center md:text-left items-center md:items-start mb-6 md:mb-0">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        The furniture brand for the
        <br className="hidden lg:inline-block" />
        future, with timeless designs
      </h1>

<Link href="/pages/product">
  <button className="inline-flex items-center text-white w-36 h-12 bg-[#ceccdc5d] border-0 mt-4 py-5 mb-6 md:mb-20 focus:outline-none hover:bg-purple-900 p-4">
    View collection
  </button>
</Link>

      <div className="flex justify-center">
        <p className="mb-8 leading-relaxed text-white">
          A new era in eco-friendly furniture with Avelon, the French
          luxury retail brand with nice fonts, tasteful colors, and a beautiful way to display
          things digitally using modern web technologies.
        </p>
      </div>
    </div>

    {/* Right Side: Image */}
    <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center md:items-end">
      <Image
        className="object-cover h-[300px]  sm:h-[400px] md:h-[450px] w-full md:w-[400px] lg:w-[350px]"
        alt="hero"
        src="/images/chairhero.jpg"
        width={400}
        height={450}
      />
    </div>
  </div>
</section>


      <section className="text-gray-500 body-font -mt-24">
  <div className="container px-20 py-24 mx-auto ">
    {/* Heading */}
    <h1 className="sm:text-3xl text-2xl title-font text-center text-gray-500 mb-16">
      What makes our brand different
    </h1>

    {/* Trust Badges */}
    <div className="flex flex-wrap justify-between -mx-4">
      <div className="p-4   md:w-1/4 flex flex-col items-center text-center">
        <div className="w-12  h-12 inline-flex items-left mr-56 justify-left text-gray-500 text-3xl mb-1">
          <LiaShippingFastSolid />
        </div>
        <div>
          <h2 className="text-gray-900  text-left text-prettytext-lg title-font font-medium mb-2">
            Next day as standard
          </h2>
          <p className="leading-relaxed text-left">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>
      </div>

      <div className="p-4 md:w-1/4 flex flex-col items-left text-left">
        <div className="w-12 h-12 inline-flex items-left justify-left text-gray-500 text-3xl mb-1">
          <TiTick />
        </div>
        <div >
          <h2 className="text-gray-900 text-left text-lg title-font font-medium mb-2">
            Made by true artisans
          </h2>
          <p className="leading-relaxed text-left">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>
      </div>

      <div className="p-4 md:w-1/4 flex flex-col items-left text-left">
        <div className="w-12 h-12 inline-flex items-left justify-left text-gray-500 text-3xl mb-2">
          <MdOutlinePriceChange />
        </div>
        <div>
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
            Unbeatable prices
          </h2>
          <p className="leading-relaxed text-base">
            For our materials and quality, you won’t find better prices anywhere
          </p>
        </div>
      </div>

      <div className="p-4 md:w-1/4 flex flex-col items-left text-left">
        <div className="w-12 h-12 inline-flex items-left justify-left text-gray-500 text-3xl mb-1">
          <MdOutlinePriceChange />
        </div>
        <div>
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
            Recycled packaging
          </h2>
          <p className="leading-relaxed text-left">
            We use 100% recycled packaging to ensure our footprint is manageable
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
<div className="container mx-auto px-14">

  <div className="text-left ml-7 mb-8">
    <h2 className="text-4xl font-[clash-display]">New Ceramics</h2>
  </div>
  <div className="flex flex-wrap">
    {/* Product 1 */}
    <div className="w-full sm:w-1/4 p-2">
    
      <div className="bg-white p-4 w-full h-[375px]">
      <Link href="/pages/pro" className="block transition-transform duration-500 ease-in-out transform hover:scale-105">

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
        
        </Link>
      </div>
    </div>

    {/* Product 2 */}
    <div className="w-full sm:w-1/4 p-2">
      <div className="bg-white p-4 w-full h-[375px]">
      <Link href="/pages/pro" className="block transition-transform duration-500 ease-in-out transform hover:scale-105">

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
        </Link>
      </div>
    </div>

    {/* Product 3 */}
    <div className="w-full sm:w-1/4 p-2">
      <div className="bg-white p-4 w-full h-[375px]">
      <Link href="/pages/pro" className="block transition-transform duration-500 ease-in-out transform hover:scale-105">

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
        </Link>
      </div>
    </div>

    {/* Product 4 */}
    <div className="w-full sm:w-1/4 p-2">
      <div className="bg-white p-4 w-full h-[375px]">
      <Link href="/pages/pro" className="block transition-transform duration-500 ease-in-out transform hover:scale-105">

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
        </Link>
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
<div className="container mx-auto px-6 sm:px-14 py-8 font-[clash-display]">
  <div className="text-left ml-0 sm:ml-7 mb-5 mt-20">
    <h2 className="text-3xl sm:text-4xl font-[clash-display]">Our popular products</h2>
  </div>

  <div className="flex flex-wrap justify-between">
    {/* First Product 5 */}
    <div className="w-full sm:w-1/2 p-2 mb-6 sm:mb-0">
      <div className="p-2 flex flex-col justify-between h-[400px] w-full max-w-[900px] mx-auto">
          <Link  href="/pages/product5" className="block transition-transform duration-500 ease-in-out transform hover:scale-105">
            <Image
              src="/images/product5.jpg"
              alt="Product 5"
              width={350}
              height={200}
              className="mb-4 object-cover w-full h-[350px]"
            />
            <div className="text-left flex-grow">
              <h3 className="text-lg font-medium mb-1">The Popular suede sofa</h3>
              <p className="text-gray-600">£980</p>
            </div>
          </Link>
      </div>
    </div>

    {/* Other Products */}
    <div className="w-full sm:w-1/2 flex flex-wrap justify-between">
      {/* Product 6 */}
      <div className="w-full sm:w-1/2 p-0 mb-6 sm:mb-0">
          <Link href="/pages/product7" className="block transition-transform duration-500 ease-in-out transform hover:scale-105">
            <div className="bg-white p-4 h-full flex flex-col justify-between">
              <Image
                src="/images/product6.jpg"
                alt="Product 6"
                width={500}
                height={500}
                className="mb-4 object-cover h-[350px] w-full"
              />
              <div className="text-left flex-grow">
                <h3 className="text-lg font-medium mb-1">The Dandy chair</h3>
                <p className="text-gray-600">£250</p>
              </div>
            </div>
          </Link>
      </div>

      {/* Product 7 */}
      <div className="w-full sm:w-1/2 p-0">
          <Link href="/pages/product7" className="block transition-transform duration-500 ease-in-out transform hover:scale-105">
            <div className="bg-white p-4 h-full flex flex-col justify-between">
              <Image
                src="/images/product7.jpg"
                alt="Product 7"
                width={500}
                height={500}
                className="mb-4 object-cover h-[350px] w-full"
              />
              <div className="text-left flex-grow">
                <h3 className="text-lg font-medium mb-1">The Dandy chair</h3>
                <p className="text-gray-600">£255</p>
              </div>
            </div>
          </Link>
        
      </div>
    </div>
  </div>

  <div className="flex justify-center mt-6">
    <button className="text-black w-36 h-12 rounded-s bg-[#f9f9f9] py-2 px-4 focus:outline-none hover:bg-indigo-500">
      View collection
    </button>
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

<section className="text-gray-600 font-[clash-display] ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col px-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-4xl mb-6 -mt- font-medium text-gray-900">
      From a studio in London to a global brand with
      over 400 outlets      </h1>
      <p className="mb-40 leading-relaxed lin">
      When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market. 
      </p>
      <p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
     
      <button className="inline-flex items-center text-gray-900  w-36 h-12 rounded-s  bg-[#ceccdc5d] border-0 mt-4 py-5  mb-20 focus:outline-none hover:bg-indigo-600 p-4 ">
              Get in touch
            </button>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center "
        alt="hero"
        src="/images/feature1.jpg"
        width={1000}
        height={200}
      />
    </div>
  </div>
</section>
<Footer/>
    </div>
  );
};

export default Hero;

