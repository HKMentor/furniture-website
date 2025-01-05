"use client";
import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { LiaShippingFastSolid } from "react-icons/lia";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { PiFlowerTulip } from "react-icons/pi";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <header>
        {/* Top Navigation */}
        <nav className="bg-[#2a254b] text-white py-2 px-6 flex justify-between items-center">
          <div className="flex-1 text-center flex justify-center items-center">
            <LiaShippingFastSolid className="text-white text-lg mr-2" />
            <p className="text-sm font-medium">
              Free delivery on all orders over £50 with code easter at checkout
            </p>
          </div>
          <a href="/pages/heer" className="text-white text-lg">
            ✖
          </a>
        </nav>
        {/* Second Nav */}
        <nav className="bg-white text-[#2a254b] py-3 px-6 flex h-16 justify-between items-center border-b">
          <div className="text-lg">Avion</div>
          {/* Right Side: Links and Icons */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-gray-600">
              About Us
            </a>
            <a
              href="/pages/contact"
              className="text-sm font-medium hover:text-gray-600"
            >
              Contact
            </a>
            <a
              href="/pages/blog"
              className="text-sm font-medium hover:text-gray-600"
            >
              Blog
            </a>
            <div className="flex gap-3">
              <a href="/search" className="hover:text-gray-600">
                <FaSearch className="text-gray-600 text-lg" />
              </a>
              <a href="/pages/shopingbasket" className="hover:text-gray-600">
                <LuShoppingCart size={20} />
              </a>
              <a href="/pages/heer" className="hover:text-gray-600">
                <CgProfile size={20} />
              </a>
            </div>
          </div>
        </nav>
        {/* New Section with 9 Links */}
     {/* New Section with 9 Links */}
<div className="bg-gray-100 py-4 px-6">
  <div className="max-w-7xl mx-auto text-center space-x-6">
    {/* Map over the items and create responsive layout */}
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
      {[
        { name: "All products", link: "/pages/product" },
        { name: "Plant pots", link: "/products/plant-pots" },
        { name: "Ceramics", link: "/products/ceramics" },
        { name: "Tables", link: "/products/tables" },
        { name: "Chairs", link: "/products/chairs" },
        { name: "Crockery", link: "/products/crockery" },
        { name: "Tableware", link: "/products/tableware" },
        { name: "Cutlery", link: "/products/cutlery" },
      ].map((item) => (
        <a
          key={item.name}
          href={item.link}
          className="text-sm font-medium hover:text-gray-800 sm:text-base lg:text-lg"
        >
          {item.name}
        </a>
      ))}
    </div>
  </div>
</div>

      </header>

      <div className="bg-[#ffffff] h-52 font-[clash-display] py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center px-6 md:px-12 h-full">
          {/* Left Side: Heading */}
          <div className="w-full md:w-1/2 flex justify-start items-center mb-4 md:mb-0 md:ml-24">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-black leading-tight">
              A brand built on the love of craftsmanship, <br /> quality, and
              outstanding customer service
            </h1>
          </div>
          {/* Right Side: Button */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
          <Link href="/pages/product">

            <button
              onClick={() => console.log("View our products")}
              className="inline-flex items-center text-black w-40 h-12 bg-[#f9f9f9] mt-6 sm:mt-8 md:mt-12 py-3 sm:py-4 mb-10 md:mb-20 focus:outline-none hover:bg-purple-900 p-4 text-sm sm:text-base"
            >
              View our products
            </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#ffffff] px-6 md:px-28 font-[Clash-Display]">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-6 md:space-y-0">
          {/* Left Side: Content */}
          <div className="bg-[#2a254b] h-[478px] w-full md:w-[634px]">
            <div className="text-white px-6 md:px-20 py-10 md:py-20">
              <div className="text-2xl sm:text-3xl mb-2">
                It started with a small idea
              </div>
              <div className="text-sm sm:text-base">
                <p>
                  A global brand with local beginnings, our story began in a
                  small studio in South London in early 2014
                </p>
              </div>
              <button
                onClick={() => console.log("View collection")}
                className="inline-flex items-center text-white h-12 bg-[#f9f9f948] mt-12 sm:mt-16 md:mt-52 py-5 mb-10 md:mb-20 focus:outline-none hover:bg-purple-900 p-4 text-sm sm:text-base"
              >
                View collection
              </button>
            </div>
          </div>
          {/* Right Side: Image */}
          <div className="w-full md:w-[534px] h-[478px]">
            <Image
              src="/images/aboutimg1.jpg"
              alt="About Image 1"
              className="w-full h-full object-cover"
              width={500}
              height={100}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[#ffffff] py-14 font-[Clash-Display]">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="w-full">
              <Image
                src="/images/about2.jpg"
                alt="About Image 2"
                className="w-full h-[603px] object-cover"
                width={720}
                height={603}
              />
            </div>
            {/* Content */}
            <div className="bg-[#f9f9f9] w-full md:w-[920px] px-6 md:px-20 py-10 md:py-20">
              <h1 className="text-xl sm:text-2xl md:text-[24px] text-[#2a254b] leading-8 sm:leading-10 -mb-3">
                Our service isn’t just personal, it’s actually hyper personally
                exquisite
              </h1>

              <div className="text-[#505977]">
                <p className="mb-4">
                  When we started Avion, the idea was simple. Make high quality
                  furniture affordable and available for the mass market.
                </p>
                <p>
                  Handmade, and lovingly crafted furniture and homeware is what
                  we live, breathe and design, so our Chelsea boutique became
                  the hotbed for the London interior design community.
                </p>
              </div>
              <button
                onClick={() => console.log("Get in touch")}
                className="inline-flex items-center text-[#2A254B] h-12 bg-white mt-12 sm:mt-16 md:mt-48 py-5 focus:outline-none hover:bg-purple-200 p-4 text-sm sm:text-base"
              >
                Get in touch
              </button>
            </div>
          </div>
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
      <div className="bg-[#F9f9f9] h-[481px] w-full py-12 font-[clash display]">
        <div
          className="bg-white mx-auto shadow-lg p-8 h-[364px] w-full md:w-[1100px] top-[53px] left-[93px]"
          style={{ maxWidth: "1273px" }}
        >
          <div className="flex justify-center items-center h-full font-[ #2a2b4b] font-serif">
            <div className="bg-white p-8 w-full max-w-lg">
              {/* Heading */}
              <h1 className="text-3xl text-gray-900 mb-4 text-center">
                Join the club and get the benefits
              </h1>

              {/* Paragraph */}
              <p className="text-gray-600 mb-6 text-center">
                Sign up for our newsletter and receive exclusive offers on new
                ranges, sales, pop-up stores, and more.
              </p>

              {/* Signup Form */}
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-grow bg-gray-100 text-gray-800 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <button className="bg-[#2a254b] text-white px-6 py-2 hover:bg-purple-900 w-full md:w-auto">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-[#2A254B]">
        <div className="container px-10 py-10 mx-auto flex flex-wrap justify-between items-start">
          <div className="flex flex-col lg:w-1/5 md:w-1/3 w-full mb-5">
            <h1 className="title-font font-normal text-[#ffffff] tracking-widest text-3xl mb-3">
              Avion
            </h1>
            <nav className="list-none">
              <li>
                <a className="text-white hover:text-gray-500">
                  21 New York Street
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">New York City</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">
                  United States of America
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">432 34</a>
              </li>
            </nav>
          </div>

          <div className="flex flex-col  lg:w-1/5 md:w-1/3 w-full mb-5">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Social links
            </h2>
            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/hooria-fatima-54753927b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-white hover:text-purple-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/people/Hooria-Fatima/pfbid0stcYVjNm2nc21e4JQBGbjhBpMME2M6AZWUje2MEuUkBHcsTuXbMBXeFMbtPA2Nvml/"
                className="text-white hover:text-purple-500"
              >
                <IoLogoFacebook />
              </a>
              <a
                href="https://www.instagram.com/hooria_codehub/profilecard/?igsh=ZWhvMmVucm5ueHBl"
                className="text-white hover:text-purple-500"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.instagram.com/hkessentials195?igsh=MWtndzUwbDJ4MTFlag=="
                className="text-white hover:text-purple-500"
              >
                <FaSkype />
              </a>
              <a
                href="https://www.instagram.com/hkessentials195?igsh=MWtndzUwbDJ4MTFlag=="
                className="text-white hover:text-purple-500"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/HKMentor"
                className="text-white hover:text-purple-500"
              >
                <FaPinterest />
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:w-1/5 md:w-1/3 w-full mb-5">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Menu
            </h2>
            <nav className="list-none">
              <li>
                <a className="text-white hover:text-gray-500">New arrivals</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">Best sellers</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">
                  Recently viewed
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">
                  Popular this week
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">All products</a>
              </li>
            </nav>
          </div>

          <div className="flex flex-col lg:w-1/5 md:w-1/3 w-full mb-5">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Categories
            </h2>
            <nav className="list-none">
              <li>
                <a className="text-white hover:text-gray-500">Crockery</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">Furniture</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">Homeware</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">Plant pots</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">Chairs</a>
              </li>
            </nav>
          </div>

          <div className="flex flex-col lg:w-1/5 md:w-1/3 w-full mb-5">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              Our Company
            </h2>
            <nav className="list-none">
              <li>
                <a className="text-white hover:text-gray-500">About us</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">Vacancies</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">Contact us</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">Privacy</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-500">Returns policy</a>
              </li>
            </nav>
          </div>
        </div>

        <div className="bg-[#2A254B] text-start">
          <hr className="border-[#4E4D93] mx-auto w-[90%]" />
          <div className="text-white px-16 py-2">Copyright 2022 Avion LTD</div>
        </div>
      </footer>
    </div>
  );
};
export default About;
