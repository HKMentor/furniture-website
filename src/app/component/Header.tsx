"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link"; // Import Link from Next.js
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <nav className="bg-white text-black px-4 py-6 h-20 border-b-1">
      <div className="flex justify-between items-center">
        {/* Left side: Search Bar with Icon on the left */}
        <div className="relative flex-1 max-w-sm">
          <FaSearch
            className="absolute -top-2 left-4 text-gray-400 cursor-pointer"
            size={21}
          />
         
        </div>

        {/* Center: Logo */}
        <div className="text-4xl  text-gray-600 mr-56">
          Avion
        </div>

        {/* Right side: Cart and Profile Icons */}
        <div className="flex items-center gap-4">
          <a 
            href="/pages/cart" 
            className="cursor-pointer hover:text-gray-600 transition"
            title="Cart"
          >
            <LuShoppingCart size={20} />
          </a>

          <a 
            href="https://www.linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cursor-pointer hover:text-gray-600 transition"
            title="LinkedIn Profile"
          >
            <CgProfile size={20} />
          </a>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="mt-4 border-gray-300" />

      {/* New Links */}
      <div className="flex justify-center mt-4 space-x-6  text-lg text-gray-400">
        <Link href="/plant-pots" className="hover:text-gray-800 transition">Plant pots</Link>
        <Link href="/ceramics" className="hover:text-gray-800 transition">Ceramics</Link>
        <Link href="/tables" className="hover:text-gray-800 transition">Tables</Link>
        <Link href="/chairs" className="hover:text-gray-800 transition">Chairs</Link>
        <Link href="/tableware" className="hover:text-gray-800 transition">Tableware</Link>
        <Link href="/cutlery" className="hover:text-gray-800 transition">Cutlery</Link>
      </div>

      {/* Mobile Navigation Links */}
      <div className="md:hidden mt-4 flex justify-between space-x-4">
        <Link href="/" className="hover:text-gray-300 transition">Home</Link>
        <Link href="/pages/about" className="hover:text-gray-300 transition">About</Link>
        <Link href="/pages/contact" className="hover:text-gray-300 transition">Contact</Link>
        <Link href="/pages/signup" className="hover:text-gray-300 transition">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Header;
