import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../lib/types'; // Import the Product type

interface BestOfAirMaxProps {
  products?: Product[]; // Make products optional
}

export default function BestOfAirMax({ products = [] }: BestOfAirMaxProps) {
  // Debugging: Log the products prop
  console.log("Products in BestOfAirMax:", products);

  // Ensure products is an array and not empty
  const randomProducts = Array.isArray(products) && products.length > 0
    ? [...products].sort(() => 0.5 - Math.random()).slice(0, 3)
    : [];

  return (
    <div className="mb-16">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h2 className="text-2xl">Best of Air Max</h2>
        <Link href="/shop" className="flex items-center gap-2">
          Shop
          <span className="text-xl">›</span>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {randomProducts.map((product) => (
          <Link key={product._id} href={`/products/${product._id}`} passHref>
            <div className="flex flex-col items-center cursor-pointer">
              <div className="flex justify-center mb-4">
                <Image
                  src={product.image?.asset?.url || '/images/default-product.png'}
                  alt={product.productName}
                  width={441}
                  height={510}
                  className="rounded-lg w-full h-auto"
                  layout="responsive"
                />
              </div>
              <div className="flex flex-wrap justify-between w-full">
                <div>
                  <p className="font-medium">{product.productName}</p>
                  <p className="text-gray-600">{product.category}</p>
                </div>
                <p>₹ {product.price.toFixed(2)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}