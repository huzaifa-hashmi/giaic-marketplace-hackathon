"use client";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold mb-4">Bag</h1>
      <div className="w-full max-w-6xl">
        {/* Cart Items */}
        <div className="border rounded-lg p-4 mb-4">
          <div className="flex items-center mb-4">
            <Image src="/path/to/image1.jpg" alt="Product 1" className="w-20 h-20 mr-4" />
            <div>
              <h2 className="font-semibold">Nike Dri-FIT ADV TechKnit Ultra</h2>
              <p>Men&apos;s Short-Sleeve Running Top</p>
              <p>Ashen Slate/Cobalt Bliss</p>
              <p>Size: L</p>
              <p>Quantity: 1</p>
              <span>MRP: ₹ 3,895.00</span>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <Image src="/path/to/image2.jpg" alt="Product 2" className="w-20 h-20 mr-4" />
            <div>
              <h2 className="font-semibold">Nike Air Max 97 SE</h2>
              <p>Men&apos;s Shoes</p>
              <p>Flat Pewter/Light Bone/Black/White</p>
              <p>Size: 8</p>
              <p>Quantity: 1</p>
              <span>MRP: ₹ 16,995.00</span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="border rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹ 20,890.00</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Delivery & Handling:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>₹ 20,890.00</span>
          </div>
        </div>

        {/* Checkout Button */}
        <Link href="/checkout" className="bg-black text-white rounded px-4 py-2">
          Member Checkout
        </Link>
      </div>
    </div>
  );
}
