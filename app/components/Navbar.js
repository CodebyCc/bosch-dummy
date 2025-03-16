"use client";

import { useState } from "react";
import Link from "next/link";
import home1 from "../../public/Worcs.png";
import Image from "next/image";
// import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-gray-900 sw-full z-50 border-bottom-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          {/* <div className="text-xl font-bold text-red-700 ">Bosch Worcester</div> */}
          <Image
            src={home1}
            alt="Logo of Bosch"
            width={110}
            height={1}
            // className={styles.pont}
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-bold">
            <Link href="/" className=" hover:text-red-700">
              Homeowner
            </Link>
            <Link href="/about" className=" hover:text-red-700">
              Professional
            </Link>
            <Link href="/services" className=" hover:text-red-700">
              Services
            </Link>
            <Link href="/contact" className=" hover:text-red-700">
              Search
            </Link>
          </div>

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <div>X</div> : <div>Menu</div>}
            </button>
          </div> */}
        </div>
        <div className="">
          <div className="hidden md:flex space-x-6 font-bold justify-evenly">
            <Link href="/" className=" hover:text-red-700">
              Get A Boiler
            </Link>
            <Link href="/about" className=" hover:text-red-700">
              Products
            </Link>
            <Link href="/services" className=" hover:text-red-700">
              Support & Advice
            </Link>
            <Link href="/contact" className=" hover:text-red-700">
              Heat Pumps & Hybrids
            </Link>
            <Link href="/contact" className=" hover:text-red-700">
              My Bosch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <div>X</div> : <div>Menu</div>}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg absolute w-full left-0">
          <div className="p-4 space-y-4 flex flex-col items-center">
            <Link
              href="/"
              className=" hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className=" hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className=" hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className=" hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
