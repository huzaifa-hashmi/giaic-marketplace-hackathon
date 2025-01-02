import Link from "next/link";
import Image from "next/image";
import { Search, Heart, ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      {/* Nike Logo */}
      <Link href="/">
        <Image 
          src='/images/tickNike.svg' 
          alt='Nike' 
          width={60} 
          height={60}
          className="hover:opacity-75 transition-opacity"
        />
      </Link>

      {/* Main Navigation */}
      <div className="flex items-center gap-8">
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

      {/* Search and Icons */}
      <div className="flex items-center gap-6">
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
