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
      <div className="container px-4 py-12 mx-auto font-[clash display]">
        <div className="flex flex-wrap md:text-left text-center -mb-10">
          {/* Section 1 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium text-gray-100 text-sm tracking-widest mb-2">
              Menu
            </h2>
            <nav className="list-none">
              <li>
                <a href="/pages/about" className="text-gray-200 hover:text-gray-600">
                  New arrivals
                </a>
              </li>
              <li>
                <a href="/pages/about" className="text-gray-200 hover:text-gray-600">
                  Best sellers
                </a>
              </li>
              <li>
                <a href="/pages/about" className="text-gray-200 hover:text-gray-600">
                  Recently viewed
                </a>
              </li>
              <li>
                <a href="/pages/about" className="text-gray-200 hover:text-gray-600">
                  Popular this week
                </a>
              </li>
              <li>
                <a href="/pages/about" className="text-gray-200 hover:text-gray-600">
                  All products
                </a>
              </li>
            </nav>
          </div>

          {/* Section 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium text-gray-100 text-sm tracking-widest mb-2">
              CATEGORIES
            </h2>
            <nav className="list-none">
              <li>
                <a className="text-gray-200 hover:text-gray-600">Crockery</a>
              </li>
              <li>
                <a href="/pages/heer" className="text-gray-200 hover:text-gray-600">
                  Furniture
                </a>
              </li>
              <li>
                <a href="/pages/heer" className="text-gray-200 hover:text-gray-600">
                  Homeware
                </a>
              </li>
              <li>
                <a href="/pages/heer" className="text-gray-200 hover:text-gray-600">
                  Plants pots
                </a>
              </li>
              <li>
                <a href="/pages/heer" className="text-gray-200 hover:text-gray-600">
                  Chairs
                </a>
              </li>
              <li>
                <a href="/pages/heer" className="text-gray-200 hover:text-gray-600">
                  Crockery
                </a>
              </li>
            </nav>
          </div>

          {/* Section 3 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
            <h2 className="title-font font-medium text-gray-100 text-sm tracking-widest mb-2">
              Our company
            </h2>
            <nav className="list-none">
              <li>
                <a href="/pages/about" className="text-gray-200 hover:text-gray-600">
                  About us
                </a>
              </li>
              <li>
                <a href="/pages/heer" className="text-gray-200 hover:text-gray-600">
                  Vacancies
                </a>
              </li>
              <li>
                <a href="/pages/heer" className="text-gray-200 hover:text-gray-600">
                  Contact us
                </a>
              </li>
              <li>
                <a href="/pages/heer" className="text-gray-200 hover:text-gray-600">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/pages/heer" className="text-gray-200 hover:text-gray-600">
                  Return Policy
                </a>
              </li>
            </nav>
          </div>

          {/* Subscribe Section */}
          <div className="lg:w-1/4 md:w-1/2 w-full text-left px-4">
            <h2 className="title-font font-medium text-gray-100 text-lg tracking-widest mb-3">
              Join our mailing list
            </h2>
            <div className="flex flex-col md:flex-row items-start">
              <input
                type="email"
                placeholder="your@gmail.com"
                className="flex-grow bg-[#ceccdc5d] text-left py-2 px-4 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-purple-500 rounded-l w-full md:w-auto"
              />
              <button className="bg-white text-black px-3 py-2 mt-2 md:mt-0 hover:bg-purple-600">
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#2A254B]">
        <hr className="border-[#4E4D93] mx-4" />
        <div className="container px-5 py-4 mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-100">
            © 2024 Hooria_Codehub
          </p>
          <div className="flex mt-2 md:mt-0">
            <a
              href="https://www.linkedin.com/in/hooria-fatima-54753927b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="text-white hover:text-gray-500 mx-2"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/people/Hooria-Fatima/pfbid0stcYVjNm2nc21e4JQBGbjhBpMME2M6AZWUje2MEuUkBHcsTuXbMBXeFMbtPA2Nvml/"
              className="text-white hover:text-gray-500 mx-2"
            >
              <IoLogoFacebook />
            </a>
            <a
              href="https://www.instagram.com/hooria_codehub/profilecard/?igsh=ZWhvMmVucm5ueHBl"
              className="text-white hover:text-gray-500 mx-2"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/HKMentor?tab=repositories"
              className="text-white hover:text-gray-500 mx-2"
            >
              <FaSkype />
            </a>
            <a
              href="https://github.com/HKMentor?tab=repositories"
              className="text-white hover:text-gray-500 mx-2"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/HKMentor?tab=repositories"
              className="text-white hover:text-gray-500 mx-2"
            >
              <FaPinterest />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
