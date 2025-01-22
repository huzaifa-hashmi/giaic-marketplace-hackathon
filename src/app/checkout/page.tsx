"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore'; // Import Zustand store

const CheckoutPage: React.FC = () => {
  const { cart } = useCartStore(); // Fetch cart data from Zustand

  // Calculate the total price dynamically
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-4 border-b border-gray-200">
        <Image
          width={150}
          height={15}
          alt="Nike logo"
          src="/images/logoNike-2.svg"
          className="w-32 md:w-48"
        />
        <div className="flex items-center space-x-2 md:space-x-4">
          <span className="text-sm md:text-base">000 800 100 9538</span>
          <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
          <ShoppingCart className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 md:flex md:space-x-8 mb-16">
        {/* Left Section - Delivery and Address Form */}
        <section className="md:w-2/3">
          <h2 className="text-lg md:text-xl font-semibold mb-4">How would you like to get your order?</h2>
          <p className="text-xs md:text-sm mb-4">
            Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.
            <Link className="text-blue-500" href="#">Learn More</Link>
          </p>
          <button className="flex items-center justify-center w-full md:w-auto border border-gray-300 rounded-lg p-3 md:p-4 mb-8">
            <i className="fas fa-truck mr-2"></i>
            Deliver It
          </button>

          {/* Address Form */}
          <form>
            <h3 className="text-base md:text-lg font-semibold mb-4">Enter your name and address:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input className="border border-gray-300 rounded-lg p-2 text-sm md:text-base" placeholder="First Name" type="text" />
              <input className="border border-gray-300 rounded-lg p-2 text-sm md:text-base" placeholder="Last Name" type="text" />
            </div>
            <div className="mb-4">
              <input className="border border-gray-300 rounded-lg p-2 w-full text-sm md:text-base" placeholder="Address Line 1" type="text" />
              <p className="text-xs text-gray-500">We do not ship to P.O. boxes</p>
            </div>
            <div className="mb-4">
              <input className="border border-gray-300 rounded-lg p-2 w-full text-sm md:text-base" placeholder="Address Line 2" type="text" />
            </div>
            <div className="mb-4">
              <input className="border border-gray-300 rounded-lg p-2 w-full text-sm md:text-base" placeholder="Address Line 3" type="text" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input className="border border-gray-300 rounded-lg p-2 text-sm md:text-base" placeholder="Postal Code" type="text" />
              <input className="border border-gray-300 rounded-lg p-2 text-sm md:text-base" placeholder="Locality" type="text" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select className="border border-gray-300 rounded-lg p-2 text-sm md:text-base">
                <option>State/Territory</option>
              </select>
              <div className="flex items-center">
                <span className="text-sm md:text-base">India</span>
                <span className="ml-2 text-green-500"><i className="fas fa-circle"></i></span>
              </div>
            </div>
            <div className="mb-4">
              <label className="flex items-center text-sm md:text-base">
                <input className="mr-2" type="checkbox" />
                Save this address to my profile
              </label>
            </div>
            <div className="mb-8">
              <label className="flex items-center text-sm md:text-base">
                <input className="mr-2" type="checkbox" />
                Make this my preferred address
              </label>
            </div>

            {/* Contact Information */}
            <h3 className="text-base md:text-lg font-semibold mb-4">What&apos;s your contact information?</h3>
            <div className="mb-4">
              <input className="border border-gray-300 rounded-lg p-2 w-full text-sm md:text-base" placeholder="Email" type="email" />
              <p className="text-xs text-gray-500">A confirmation email will be sent after checkout.</p>
            </div>
            <div className="mb-8">
              <input className="border border-gray-300 rounded-lg p-2 w-full text-sm md:text-base" placeholder="Phone Number" type="text" />
              <p className="text-xs text-gray-500">A carrier might contact you to confirm delivery.</p>
            </div>

            {/* PAN Information */}
            <h3 className="text-base md:text-lg font-semibold mb-4">What&apos;s your PAN?</h3>
            <div className="mb-4">
              <input className="border border-gray-300 rounded-lg p-2 w-full text-sm md:text-base" placeholder="PAN" type="text" />
              <p className="text-xs text-gray-500">Enter your PAN to enable payment with UPI, Net Banking or local card methods.</p>
            </div>
            <div className="mb-4">
              <label className="flex items-center text-sm md:text-base">
                <input className="mr-2" type="checkbox" />
                Save PAN details to Nike Profile
              </label>
            </div>
            <div className="mb-8">
              <label className="flex items-start text-sm md:text-base">
                <input className="mr-2 mt-1" type="checkbox" />
                <span>
                  I have read and consent to eShopWorld processing my information in accordance with the
                  <Link className="text-blue-500" href="#">Privacy Statement</Link> and
                  <Link className="text-blue-500" href="#">Cookie Policy</Link>. eShopWorld is a trusted Nike partner.
                </span>
              </label>
            </div>
            <button className="w-full md:w-auto bg-gray-200 text-gray-800 rounded-lg p-3 md:p-4">Continue</button>
          </form>
        </section>

        {/* Right Section - Order Summary */}
        <aside className="md:w-1/3 mt-8 md:mt-0">
          <h2 className="text-lg md:text-xl font-semibold mb-4">Order Summary</h2>
          <div className="mb-4">
            {/* Dynamically Render Cart Items */}
            {cart.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 mb-4">
                <Image
                  width={80}
                  height={80}
                  alt={item.productName}
                  src={item.image}
                  className="w-20 h-20 rounded-lg"
                />
                <div>
                  <p className="text-sm font-semibold">{item.productName}</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  <p className="text-sm font-semibold">₹ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}

            {/* Order Summary */}
            <div className="flex justify-between mb-2">
              <span className="text-sm md:text-base">Subtotal</span>
              <span className="text-sm md:text-base">₹ {total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm md:text-base">Delivery/Shipping</span>
              <span className="text-sm md:text-base">Free</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-sm md:text-base">Total</span>
              <span className="text-sm md:text-base">₹ {total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">The total reflects the price of your order, including all duties and taxes</p>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-black p-4 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Section - Copyright and Links */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <div className="text-xs text-gray-500">
              © 2023 NIKE, Inc. All Rights Reserved
            </div>
            <Link className="text-xs text-gray-500 hover:text-gray-300" href="#">Terms of Use</Link>
            <Link className="text-xs text-gray-500 hover:text-gray-300" href="#">Terms of Sale</Link>
            <Link className="text-xs text-gray-500 hover:text-gray-300" href="#">Privacy Policy</Link>
          </div>

          {/* Right Section - Payment Icons */}
          <div className="flex items-center space-x-4">
            <Image
              width={40}
              height={20}
              alt="Visa logo"
              src="/images/visa.svg"
              className="w-8 h-4"
            />
            <Image
              width={40}
              height={20}
              alt="Visa Electron logo"
              src="/images/visa-electron.svg"
              className="w-8 h-4"
            />
            <Image
              width={40}
              height={20}
              alt="Mastercard logo"
              src="/images/mastercard.svg"
              className="w-8 h-4"
            />
            <Image
              width={40}
              height={20}
              alt="Maestro logo"
              src="/images/maestro.svg"
              className="w-8 h-4"
            />
            <Image
              width={40}
              height={20}
              alt="American Express logo"
              src="/images/amex.svg"
              className="w-8 h-4"
            />
            <Image
              width={40}
              height={20}
              alt="Diners Club logo"
              src="/images/diners-club.svg"
              className="w-8 h-4"
            />
            <Image
              width={40}
              height={20}
              alt="Discover logo"
              src="/images/discover.svg"
              className="w-8 h-4"
            />
            <Image
              width={40}
              height={20}
              alt="Paytm logo"
              src="/images/paytm.svg"
              className="w-8 h-4"
            />
            <Image
              width={40}
              height={20}
              alt="UPI logo"
              src="/images/upi.svg"
              className="w-8 h-4"
            />
            <Image
              width={40}
              height={20}
              alt="JCB logo"
              src="/images/jcb.svg"
              className="w-8 h-4"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;