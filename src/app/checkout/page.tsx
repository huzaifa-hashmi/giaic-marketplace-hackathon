import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CheckoutPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <header className="flex justify-between items-center p-4 border-b border-gray-200">
        <Image
          width={250}
          height={21.75}
          alt="Nike logo"
          className="h-8"
          src="images/logoNike-2.svg"
        />
        <div className="flex items-center space-x-4">
          <span>000 800 100 9538</span>
          <i className="fas fa-comment-dots"></i>
          <i className="fas fa-shopping-cart"></i>
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-4 md:flex md:space-x-8 mb-16">
        <section className="md:w-2/3">
          <h2 className="text-xl font-semibold mb-4">How would you like to get your order?</h2>
          <p className="text-sm mb-4">
            Customs regulation for India require a copy of the recipient&apos;s KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.
            <Link className="text-blue-500" href="#">Learn More</Link>
          </p>
          <button className="flex items-center justify-center w-full md:w-auto border border-gray-300 rounded-lg p-4 mb-8">
            <i className="fas fa-truck mr-2"></i>
            Deliver It
          </button>
          <form>
            <h3 className="text-lg font-semibold mb-4">Enter your name and address:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input className="border border-gray-300 rounded-lg p-2" placeholder="First Name" type="text" />
              <input className="border border-gray-300 rounded-lg p-2" placeholder="Last Name" type="text" />
            </div>
            <div className="mb-4">
              <input className="border border-gray-300 rounded-lg p-2 w-full" placeholder="Address Line 1" type="text" />
              <p className="text-xs text-gray-500">We do not ship to P.O. boxes</p>
            </div>
            <div className="mb-4">
              <input className="border border-gray-300 rounded-lg p-2 w-full" placeholder="Address Line 2" type="text" />
            </div>
            <div className="mb-4">
              <input className="border border-gray-300 rounded-lg p-2 w-full" placeholder="Address Line 3" type="text" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input className="border border-gray-300 rounded-lg p-2" placeholder="Postal Code" type="text" />
              <input className="border border-gray-300 rounded-lg p-2" placeholder="Locality" type="text" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select className="border border-gray-300 rounded-lg p-2">
                <option>State/Territory</option>
              </select>
              <div className="flex items-center">
                <span>India</span>
                <span className="ml-2 text-green-500"><i className="fas fa-circle"></i></span>
              </div>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                Save this address to my profile
              </label>
            </div>
            <div className="mb-8">
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                Make this my preferred address
              </label>
            </div>
            <h3 className="text-lg font-semibold mb-4">What&apos;s your contact information?</h3>
            <div className="mb-4">
              <input className="border border-gray-300 rounded-lg p-2 w-full" placeholder="Email" type="email" />
              <p className="text-xs text-gray-500">A confirmation email will be sent after checkout.</p>
            </div>
            <div className="mb-8">
              <input className="border border-gray-300 rounded-lg p-2 w-full" placeholder="Phone Number" type="text" />
              <p className="text-xs text-gray-500">A carrier might contact you to confirm delivery.</p>
            </div>
            <h3 className="text-lg font-semibold mb-4">What&apos;s your PAN?</h3>
            <div className="mb-4">
              <input className="border border-gray-300 rounded-lg p-2 w-full" placeholder="PAN" type="text" />
              <p className="text-xs text-gray-500">Enter your PAN to enable payment with UPI, Net Banking or local card methods.</p>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input className="mr-2" type="checkbox" />
                Save PAN details to Nike Profile
              </label>
            </div>
            <div className="mb-8">
              <label className="flex items-start">
                <input className="mr-2 mt-1" type="checkbox" />
                <span>
                  I have read and consent to eShopWorld processing my information in accordance with the
                  <Link className="text-blue-500" href="#">Privacy Statement</Link> and
                  <Link className="text-blue-500" href="#">Cookie Policy</Link>. eShopWorld is a trusted Nike partner.
                </span>
              </label>
            </div>
            <button className="w-full md:w-auto bg-gray-200 text-gray-800 rounded-lg p-4">Continue</button>
          </form>
          <div className="mt-8">
            <div className="py-2 border-b border-gray-300">
              <span className="font-semibold text-black">Delivery</span>
            </div>
            <div className="py-2 border-b border-gray-300">
              <span>Shipping</span>
            </div>
            <div className="py-2 border-b border-gray-300">
              <span>Billing</span>
            </div>
            <div className="py-2 border-b border-gray-300">
              <span>Payment</span>
            </div>
          </div>
        </section>
        <aside className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>₹ 20,890.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Delivery/Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹ 20,890.00</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">The total reflects the price of your order, including all duties and taxes</p>
          </div>
          <div className="mb-4">
            <p className="font-semibold">Arrives Mon, 27 Mar - Wed, 12 Apr</p>
            <div className="flex items-center mb-4">
              <Image
                alt="Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top"
                className="h-16 w-16 mr-4"
                src="https://storage.googleapis.com/a1aa/image/ngS5nR9q5OK5CRSL3pE2pr5cVoX6sbFafJdniU27Ef4OQSfnA.jpg"
                width={80}
                height={80}
              />
              <div>
                <p>Nike Dri-FIT ADV TechKnit Ultra Men&apos;s Short-Sleeve Running Top</p>
                <p>Qty: 1</p>
                <p>Size: L</p>
                <p>₹ 8,895.00</p>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                alt="Nike Air Max 97 SE Men's Shoes"
                className="h-16 w-16 mr-4"
                src="https://storage.googleapis.com/a1aa/image/OlceYd5QWK2jcqty9qrp4MLMQulZgi2ZPwNTQjpNfncMQSfnA.jpg"
                width={80}
                height={80}
              />
              <div>
                <p>Nike Air Max 97 SE Men&apos;s Shoes</p>
                <p>Qty: 1</p>
                <p>Size: UK 8</p>
                <p>₹ 16,995.00</p>
              </div>
            </div>
          </div>
        </aside>
      </main>
      <footer className="bg-black p-4 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-xs text-gray-500 text-center md:text-left mb-4 md:mb-0">
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span>India</span>
          </div>
          <div className="text-xs text-gray-500 text-center md:text-left mb-4 md:mb-0">
            <p>© 2023 Nike, Inc. All Rights Reserved</p>
            <p>
              <Link className="text-blue-500" href="#">Terms of Use</Link> |
              <Link className="text-blue-500" href="#">Terms of Sale</Link> |
              <Link className="text-blue-500" href="#">Privacy Policy</Link>
            </p>
          </div>
          <div className="flex space-x-2">
            <Image
              alt="Visa logo"
              className="h-5"
              src="https://storage.googleapis.com/a1aa/image/EGfbzqdcjVRSe0jR38n8SehMTJxtueR4WOzQ3AqAGD4VBJ9PB.jpg"
            />
            <Image
              alt="MasterCard logo"
              className="h-5"
              src="https://storage.googleapis.com/a1aa/image/JffxyejrZfhi1QtVYX1Av3jG2HboAdPcfFtxbeqmWY90Fk0fJA.jpg"
            />
            <Image
              alt="American Express logo"
              className="h-5"
              src="https://storage.googleapis.com/a1aa/image/rYHhx5Z4VkIiJhDZeGKHPk4sgaLbZX58TcMsIUZUJPxIIpfTA.jpg"
            />
            <Image
              alt="Paytm logo"
              className="h-5"
              src="https://storage.googleapis.com/a1aa/image/Mu4eWSriPlWjIa21hKUZ1Nu7iqd85meafMTfOqh0FRe9BS6fE.jpg"
            />
            <Image
              alt="UPI logo"
              className="h-5"
              src="https://storage.googleapis.com/a1aa/image/x0y8XBjY1ao9HlniQB8Ty3qM3x8rx5qgLoMEHdflBrIMIpfTA ```typescript
              .jpg"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CheckoutPage;