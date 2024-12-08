import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-[#2A254B]">
  <div className="container px-12 py-16 mx-auto font-[clash display]">
    <div className="flex flex-wrap md:text-left text-center -mb-10">
      {/* Section 1 */}
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
        <h2 className="title-font font-medium text-gray-100 text-sm tracking-widest mb-2">
          Menu
        </h2>
        <nav className="list-none">
          <li><a className="text-gray-200 hover:text-gray-800">New arrivals</a></li>
          <li><a className="text-gray-200 hover:text-gray-800">Best sellers</a></li>
          <li><a className="text-gray-200 hover:text-gray-800">Recently viewed</a></li>
          <li><a className="text-gray-200 hover:text-gray-800">Popular this week</a></li>
          <li><a className="text-gray-200 hover:text-gray-800">All products</a></li>

        </nav>
      </div>
      {/* Section 2 */}
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
        <h2 className="title-font font-medium text-gray-100 text-sm tracking-widest mb-2">
          CATEGORIES
        </h2>
        <nav className="list-none">
          <li><a className="text-gray-200 hover:text-gray-800">Crockery</a></li>
          <li><a className="text-gray-200 hover:text-gray-800">Furniture</a></li>
          <li><a className="text-gray-200 hover:text-gray-800">Homeware</a></li>
          <li><a className="text-gray-200 hover:text-gray-800">Plants pots</a></li>
          <li><a className="text-gray-200 hover:text-gray-800">Chairs</a></li>
          <li><a className="text-gray-200 hover:text-gray-800">Crockery</a></li>

        </nav>
      </div>
      {/* Section 3 */}
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
        <h2 className="title-font font-medium text-gray-100 text-sm tracking-widest mb-2">
Our company        </h2>
        <nav className="list-none">
          <li><a href="/pages/about" className="text-gray-200 hover:text-gray-800">About us</a></li>
          <li><a className="text-gray-200 hover:text-gray-800">Vacancies</a></li>
          <li><a className="text-gray-200 hover:text-gray-800">Contact us</a></li>
          <li><a className="text-gray-200 hover:text-gray-800">Privacy</a></li>
          <li><a className="text-gray-200 hover:text-gray-800">Return Policy</a></li>

        </nav>
      </div>
      {/* Subscribe Section */}
      <div className="lg:w-1/4 md:w-1/2 w-full text-left ">
  <h2 className="title-font font-medium text-gray-100 text-lg tracking-widest mb-3 -ml-28">
    Join our mailling list
  </h2>
  <div className="flex items-start -ml-28">
    <input
      type="email"
      placeholder="your@gmail.com"
      className="flex-grow bg-[#ceccdc5d] text-left py-2 px-20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-purple-500 rounded-l"
    />
    <button className="bg-white text-black px-3 py-2 hover:bg-purple-600">
      Signup
    </button>
  </div>
</div>

    </div>
  </div>
  <div className="bg-[#2A254B]">
  <hr className="border-[#4E4D93]  ml-9 mr-9" />

    <div className="container px-5 py-4 mx-auto flex justify-between items-center  ]">
     
      <p className="text-sm text-gray-100 ">
        © 2024 Hooria_Codehub  
      </p>
      <div className="flex">
        <a  href="" className="text-white hover:text-purple-600 mx-2"><FaLinkedin />
        </a>
        <a href="" className="text-white hover:text-purple-600 mx-2"><IoLogoFacebook />
        </a>
        <a  href="" className="text-white hover:text-purple-600 mx-2"><FaInstagram />
        </a>
        <a  href="" className="text-white hover:text-purple-600 mx-2"><FaSkype />

        </a>
        <a  href="" className="text-white hover:text-purple-600 mx-2"><FaTwitter />

        </a>
        <a  href="" className="text-white hover:text-purple-600 mx-2"><FaPinterest />
        </a>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
