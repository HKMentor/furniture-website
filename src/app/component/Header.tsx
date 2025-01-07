"use client";

import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle search menu
  const toggleSearchMenu = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white text-black px-4 py-6 h-20 border-b-1">
      <div className="flex justify-between items-center">
        {/* Left Side: Search Icon */}
        <div className="relative flex-1 max-w-sm">
          <FaSearch
            className="absolute -top-2 left-4 text-gray-400 cursor-pointer"
            size={21}
            onClick={toggleSearchMenu}
          />
          {/* Dropdown Menu */}
          {isSearchOpen && (
            <div className="absolute top-8 left-0 bg-white shadow-lg border rounded-md w-40 z-50">
              <ul className="text-[#2A254B]">
                <li>
                  <Link
                    href="/pages/about"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/heer"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/product"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/shopingbasket"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Shopping Cart
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pages/contact"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Center: Logo */}
        <div className="text-4xl text-gray-600 text-center mr-48">
          Avion
        </div>

        {/* Right side: Cart, Profile, and Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Cart Icon */}
          <Link
            href="/pages/shopingbasket"
            className="cursor-pointer hover:text-gray-600 transition"
            title="Cart"
          >
            <LuShoppingCart size={20} />
          </Link>

          {/* Profile Icon */}
          <Link
            href="/pages/about"
            className="cursor-pointer hover:text-gray-600 transition"
            title="Profile"
          >
            <CgProfile size={20} />
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="mt-4 border-gray-300" />

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex justify-center mt-4 space-x-6 text-lg text-gray-400">
        <Link href="/pages/about" className="hover:text-gray-800 transition">
          Plant pots
        </Link>
        <Link href="/ceramics" className="hover:text-gray-800 transition">
          Ceramics
        </Link>
        <Link href="/tables" className="hover:text-gray-800 transition">
          Tables
        </Link>
        <Link href="/chairs" className="hover:text-gray-800 transition">
          Chairs
        </Link>
        <Link href="/tableware" className="hover:text-gray-800 transition">
          Tableware
        </Link>
        <Link href="/cutlery" className="hover:text-gray-800 transition">
          Cutlery
        </Link>
      </div>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg p-4 space-y-4 text-gray-400">
          <Link href="/pages/about" className="block hover:text-gray-800 transition">
            Home
          </Link>
          <Link
            href="#"
            className="block hover:text-gray-800 transition"
          >
            About
          </Link>
          <Link
            href="/pages/contact"
            className="block hover:text-gray-800 transition"
          >
            Contact
          </Link>
          <Link
            href="/pages/signup"
            className="block hover:text-gray-800 transition"
          >
            Sign Up
          </Link>
          <hr />
          <div className="space-y-2">
            <Link href="/pages/about" className="block hover:text-gray-800">
              Plant pots
            </Link>
            <Link href="/ceramics" className="block hover:text-gray-800">
              Ceramics
            </Link>
            <Link href="/tables" className="block hover:text-gray-800">
              Tables
            </Link>
            <Link href="/chairs" className="block hover:text-gray-800">
              Chairs
            </Link>
            <Link href="/tableware" className="block hover:text-gray-800">
              Tableware
            </Link>
            <Link href="/cutlery" className="block hover:text-gray-800">
              Cutlery
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
