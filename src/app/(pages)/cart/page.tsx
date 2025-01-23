"use client";
import { useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from '../../store/cartStore';
import toast from 'react-hot-toast';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, isHydrated, hydrate } = useCartStore();

  // Force rehydration when component mounts
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart-storage');
      if (savedCart && !isHydrated) {
        hydrate();
      }
    }
  }, [hydrate, isHydrated]);

  if (!isHydrated) {
    return <div>Loading cart...</div>;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemoveItem = (id: string, productName: string) => {
    removeFromCart(id);
    toast.success(`${productName} removed from cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold mb-4">Bag</h1>
      <div className="w-full max-w-6xl">
        {/* Cart Items */}
        <div className="border rounded-lg p-4 mb-4">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <Image
                  src={item.image}
                  alt={item.productName}
                  width={150}
                  height={150}
                  className="mr-4"
                />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.productName}</h2>
                  <p>Price: ₹ {item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 border rounded-l hover:bg-gray-100"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 border rounded-r hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id, item.productName)}
                    className="text-red-500 hover:text-red-700 mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="border rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">Summary</h2>
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>₹ {total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Estimated Delivery & Handling:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>₹ {total.toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <div className="mb-8">
          <Link
            href={cart.length > 0 ? "/checkout" : "#"} // Redirect to checkout only if cart is not empty
            className={`bg-black text-white rounded px-4 py-2 ${
              cart.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"
            }`}
          >
            Member Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}