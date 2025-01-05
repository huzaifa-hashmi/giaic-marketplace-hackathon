'use client';

import Link from "next/link";
import Image from "next/image";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4">
      {/* Nike Logo */}
      <Link href="/" className="flex items-center">
        <Image 
          src='/images/tickNike.svg' 
          alt='Nike' 
          width={60} 
          height={60}
          className="hover:opacity-75 transition-opacity"
        />
      </Link>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-gray-600 hover:text-gray-800 z-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/new" className="hover:text-gray-600 transition-colors">
          New & Featured
        </Link>
        <Link href="/men" className="hover:text-gray-600 transition-colors">
          Men
        </Link>
        <Link href="/women" className="hover:text-gray-600 transition-colors">
          Women
        </Link>
        <Link href="/kids" className="hover:text-gray-600 transition-colors">
          Kids
        </Link>
        <Link href="/sale" className="hover:text-gray-600 transition-colors">
          Sale
        </Link>
        <Link href="/snkrs" className="hover:text-gray-600 transition-colors">
          SNKRS
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white w-full absolute top-16 left-0 py-4 px-8`}
      >
        <Link href="/new" className="block pb-2 hover:text-gray-600">
          New & Featured
        </Link>
        <Link href="/men" className="block pb-2 hover:text-gray-600">
          Men
        </Link>
        <Link href="/women" className="block pb-2 hover:text-gray-600">
          Women
        </Link>
        <Link href="/kids" className="block pb-2 hover:text-gray-600">
          Kids
        </Link>
        <Link href="/sale" className="block pb-2 hover:text-gray-600">
          Sale
        </Link>
        <Link href="/snkrs" className="block pb-2 hover:text-gray-600">
          SNKRS
        </Link>
        {/* Search and Icons */}
        <div className="flex items-center gap-6 mt-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-full bg-[#f5f5f5] focus:outline-none w-full"
            />
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-500" />
          </div>
          <button className="hover:text-gray-600 transition-colors">
            <Heart className="w-6 h-6" />
          </button>
          <button className="hover:text-gray-600 transition-colors">
            <ShoppingBag className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Search and Icons on Desktop */}
      <div className="hidden md:flex items-center gap-6">
        <div className="relative">
          <input
            type="search"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-full bg-[#f5f5f5] focus:outline-none w-40"
          />
          <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-500" />
        </div>
        <button className="hover:text-gray-600 transition-colors">
          <Heart className="w-6 h-6" />
        </button>
        <button className="hover:text-gray-600 transition-colors">
          <ShoppingBag className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}