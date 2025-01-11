import React from 'react';


const ContactUsPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      <main className="max-w-6xl mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8">GET HELP</h1>
        <div className="flex justify-center mb-8">
          <input
            className="border border-gray-300 rounded-full px-4 py-2 w-full max-w-md"
            placeholder="What can we help you with?"
            type="text"
          />
          <button className="ml-2 px-4 py-2 bg-gray-200 rounded-full">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="lg:w-2/3">
            <h2 className="text-xl font-bold mb-4">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>
            <p className="mb-4">
              We want to make buying your favourite Nike shoes and gear online fast
              and easy, and we accept the following payment options:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Visa, Mastercard, Diners Club, Discover, American Express, Visa
                Electron, Maestro
              </li>
            </ul>
            <p className="mb-4">
              If you enter your PAN information at checkout, you’ll be able to pay
              for your order with PayTM or a local credit or debit card.
            </p>
            <p className="mb-4">Apple Pay</p>
            <p className="mb-4">
              Nike Members can store multiple debit or credit cards in their profile
              for faster checkout. If you’re not already a Member,
              <a className="text-blue-500" href="#">
                join us
              </a>
              .
            </p>
            <div className="flex space-x-4 mb-8">
              <button className="px-4 py-2 bg-black text-white rounded-full">
                JOIN US
              </button>
              <button className="px-4 py-2 bg-black text-white rounded-full">
                SHOP NIKE
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4">FAQs</h2>
            <div className="mb-4">
              <h3 className="font-bold">
                Does my card need international purchases enabled?
              </h3>
              <p>
                Yes, we recommend asking your bank to enable international purchases
                on your card. You will be notified at checkout if international
                purchases need to be enabled.
              </p>
              <p>
                Please note, some banks may charge a
                <span className="underline">small transaction fee</span>
                for international orders.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">
                Can I pay for my order with multiple methods?
              </h3>
              <p>
                No, payment for Nike orders can’t be split between multiple payment
                methods.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">
                What payment method is accepted for SNKRS orders?
              </h3>
              <p>
                You can use any accepted credit card to pay for your SNKRS order.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Why don’t I see Apple Pay as an option?</h3>
              <p>
                To see Apple Pay as an option in the Nike App or on Nike.com, you’ll
                need to use a compatible Apple device running the latest OS, be
                signed in to your iCloud account and have a supported card in your
                Wallet. Additionally, you’ll need to use Safari to use Apple Pay on
                Nike.com.
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-8">
              <p>Was this answer helpful?</p>
              <i className="fas fa-thumbs-up text-gray-600"></i>
              <i className="fas fa-thumbs-down text-gray-600"></i>
            </div>
            <h2 className="text-xl font-bold mb-4">RELATED</h2>
            <ul className="list-disc list-inside">
              <li>
                <a className="text-blue-500" href="#">
                  WHAT ARE NIKE’S DELIVERY OPTIONS?
                </a>
              </li>
              <li>
                <a className="text-blue-500" href="#">
                  HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
                </a>
              </li>
            </ul>
          </div>
          <aside className="lg:w-1/3 mt-8 lg:mt-0">
            <h2 className="text-xl font-bold mb-4">CONTACT US</h2>
            <p className="mb-4">000 800 919 0566</p>
            <p className="mb-4">
              Products &amp; Orders: 24 hours a day, 7 days a week
            </p>
            <p className="mb-4">
              Company Info &amp; Enquiries: 07:30 - 16:30, Monday - Friday
            </p>
            <div className="flex items-center mb-4">
              <i className="fas fa-comments text-2xl text-gray-600 mr-4"></i>
              <p>
                24 hours a day
                <br />7 days a week
              </p>
            </div>
            <div className="flex items-center mb-4">
              <i className="fas fa-envelope text-2xl text-gray-600 mr-4"></i>
              <p>
                We’ll reply within
                <br />
                five business days
              </p>
            </div>
            <div className="flex items-center mb-4">
              <i className="fas fa-map-marker-alt text-2xl text-gray-600 mr-4"></i>
              <p>
                STORE LOCATOR
                <br />
                Find Nike retail stores near you
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ContactUsPage;