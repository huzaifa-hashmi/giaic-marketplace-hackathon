import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
  
    <header className="bg-[#f5f5f5] px-4 py-2 flex justify-between items-center">
      {/* Jordan Logo */}
      <Link href="/">
        <Image 
          src="/images/logoNike.svg" 
          alt="Jordan" 
          width={24} 
          height={24}
          className="hover:opacity-75 transition-opacity"
        />
      </Link>

      {/* Utility Navigation */}
      <div className="flex items-center gap-4 text-sm">
        <Link href="/store-locator" className="hover:text-gray-600 transition-colors">
          Find a Store
        </Link>
        <span>|</span>
        <Link href="/help" className="hover:text-gray-600 transition-colors">
          Help
        </Link>
        <span>|</span>
        <Link href="/join" className="hover:text-gray-600 transition-colors">
          Join Us
        </Link>
        <span>|</span>
        <Link href="/signin" className="hover:text-gray-600 transition-colors">
          Sign In
        </Link>
      </div>
    </header>
  );
}
