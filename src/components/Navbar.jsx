// src/components/Navbar.jsx

"use client";

import Link from "next/link";
import React, { useState, useRef } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 font-inter">
      <div className="xl:px-20 xl:py-4 px-6 py-4 flex justify-between items-center text-secondaryText">
        <div className="flex items-center">
          <h1 className="text-primary font-bold text-2xl md:text-3xl">
            Koding<span className="text-primaryText">Kidz</span>
          </h1>
        </div>
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className="text-secondaryText hover:text-primary transition-all duration-300"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/program"
                className="text-secondaryText hover:text-primary transition-all duration-300"
              >
                Program
              </Link>
            </li>
            <li>
              <Link
                href="/promo"
                className="text-secondaryText hover:text-primary transition-all duration-300"
              >
                Promo
              </Link>
            </li>
            <li>
              <Link
                href="/layanan"
                className="text-secondaryText hover:text-primary transition-all duration-300"
              >
                Layanan
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <FiShoppingCart className="text-secondaryText text-xl hover:text-primary transition-colors duration-300" />
          <Link
            href="/daftar"
            className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full text-center block"
          >
            Daftar
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-secondaryText text-xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
        >
          <div className="flex flex-col p-4">
            {/* Close Button */}
            <button
              className="self-end text-secondaryText text-xl"
              onClick={toggleMenu}
            >
              <FiX />
            </button>
            {/* Logo for Mobile View */}
            <div className="flex items-center mb-4">
              <h1 className="text-primary font-bold text-2xl">
                Koding<span className="text-primaryText">Kidz</span>
              </h1>
            </div>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-secondaryText hover:text-primary transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/program"
                  className="text-secondaryText hover:text-primary transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Program
                </Link>
              </li>
              <li>
                <Link
                  href="/promo"
                  className="text-secondaryText hover:text-primary transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Promo
                </Link>
              </li>
              <li>
                <Link
                  href="/layanan"
                  className="text-secondaryText hover:text-primary transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Layanan
                </Link>
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/register"
                className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 w-full text-center block"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
