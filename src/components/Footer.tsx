import Link from "next/link";
import { Twitter, Facebook, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 sm:px-8 lg:px-12 py-10">
      {/* Grid for Footer Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Column 1 */}
        <div>
          <ul className="space-y-3 text-sm">
            <li><Link href="/store" className="hover:text-gray-400">FIND A STORE</Link></li>
            <li><Link href="/member" className="hover:text-gray-400">BECOME A MEMBER</Link></li>
            <li><Link href="/signup" className="hover:text-gray-400">SIGN UP FOR EMAIL</Link></li>
            <li><Link href="/feedback" className="hover:text-gray-400">Send Us Feedback</Link></li>
            <li><Link href="/student" className="hover:text-gray-400">STUDENT DISCOUNTS</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-4">GET HELP</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="/order" className="hover:text-white">Order Status</Link></li>
            <li><Link href="/delivery" className="hover:text-white">Delivery</Link></li>
            <li><Link href="/returns" className="hover:text-white">Returns</Link></li>
            <li><Link href="/payment" className="hover:text-white">Payment Options</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us On Nike.com Inquiries</Link></li>
            <li><Link href="/contact-other" className="hover:text-white">Contact Us On All Other Inquiries</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-4">ABOUT NIKE</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li><Link href="/news" className="hover:text-white">News</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link href="/investors" className="hover:text-white">Investors</Link></li>
            <li><Link href="/sustainability" className="hover:text-white">Sustainability</Link></li>
          </ul>
        </div>

        {/* Column 4 - Social Icons */}
        <div className="flex gap-4 sm:justify-start lg:justify-end">
          <Link href="https://twitter.com/Nike" className="hover:text-gray-400">
            <Twitter size={24} />
          </Link>
          <Link href="https://facebook.com/Nike" className="hover:text-gray-400">
            <Facebook size={24} />
          </Link>
          <Link href="https://youtube.com/Nike" className="hover:text-gray-400">
            <Youtube size={24} />
          </Link>
          <Link href="https://instagram.com/Nike" className="hover:text-gray-400">
            <Instagram size={24} />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-800 text-xs text-gray-400">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <span>🌍</span>
          <span>India</span>
          <span>© 2023 Nike, Inc. All Rights Reserved</span>
        </div>
        <div className="flex gap-4 sm:gap-6">
          <Link href="/guides" className="hover:text-white">Guides</Link>
          <Link href="/terms" className="hover:text-white">Terms of Sale</Link>
          <Link href="/terms-of-use" className="hover:text-white">Terms of Use</Link>
          <Link href="/privacy" className="hover:text-white">Nike Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}