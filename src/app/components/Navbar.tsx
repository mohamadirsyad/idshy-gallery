"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="flex items-center p-4 bg-slate-950 shadow-lg fixed top-0 left-0 right-0 z-20 justify-between">
        <Link
          href="#home"
          className="lg:ml-10 md:ml-8 sm:ml-5 ml-2 lg:text-2xl md:text-xl sm:text-lg text-md font-extrabold text-blue-800 hover:text-blue-400 transition duration-300"
        >
          I D S H Y
        </Link>

        {/* Tombol burger untuk layar kecil */}
        <div className="lg:hidden block" onClick={toggleMenu}>
          <button className="text-blue-800 focus:outline-none">
            {/* Icon burger */}
            <div className="w-6 h-1 bg-blue-800 mb-1"></div>
            <div className="w-6 h-1 bg-blue-800 mb-1"></div>
            <div className="w-6 h-1 bg-blue-800"></div>
          </button>
        </div>

        {/* Menu navbar utama untuk layar besar */}
        <ul className="hidden lg:flex lg:gap-5 md:gap-4 sm:gap-3 gap-2 lg:mr-10 md:mr-8 sm:mr-4 mr-0 text-blue-800 lg:text-lg md:text-lg sm:text-md text-sm">
          <li className="hover:text-blue-400 transition duration-300">
            <Link href="#home">Home</Link>
          </li>
          <li className="hover:text-blue-400 transition duration-300">
            <Link href="#gallery">Gallery</Link>
          </li>
          <li className="hover:text-blue-400 transition duration-300">
            <Link href="#about">About</Link>
          </li>
          <li className="hover:text-blue-400 transition duration-300">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>

        {/* Menu dropdown untuk layar kecil */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-16 right-0 w-48 bg-slate-950 shadow-lg rounded-md p-4 z-30"
          >
            <ul className="flex flex-col gap-3 text-blue-800 text-sm">
              <li className="hover:text-blue-400 transition duration-300">
                <Link href="#home" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="hover:text-blue-400 transition duration-300">
                <Link href="#gallery" onClick={toggleMenu}>
                  Gallery
                </Link>
              </li>
              <li className="hover:text-blue-400 transition duration-300">
                <Link href="#about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li className="hover:text-blue-400 transition duration-300">
                <Link href="#contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
