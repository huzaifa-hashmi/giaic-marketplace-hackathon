import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../lib/types'; // Import the Product type

interface GearUpSectionProps {
  products: Product[];
}

export default function GearUpSection({ products = [] }: GearUpSectionProps) {
  // Filter products for Men's and Women's categories
  const mensProducts = products.filter((product) => product.category === "Men's Shoes");
  const womensProducts = products.filter((product) => product.category === "Women's Shoes");

  return (
    <div className="mb-16">
      <h2 className="text-2xl mb-6">Gear Up</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Shop Men's */}
        <div>
          <div className="flex flex-wrap justify-between items-center mb-4">
            <h3 className="text-xl">Shop Men&apos;s</h3>
            <Link href="/men" className="flex items-center gap-2">
              <span className="text-xl">›</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mensProducts.slice(0, 2).map((product) => (
              <Link key={product._id} href={`/products/${product._id}`} passHref>
                <div className="flex flex-col items-center cursor-pointer">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={product.image?.asset?.url || '/images/default-product.png'}
                      alt={product.productName}
                      width={300}
                      height={300}
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

        {/* Shop Women's */}
        <div>
          <div className="flex flex-wrap justify-between items-center mb-4">
            <h3 className="text-xl">Shop Women&apos;s</h3>
            <Link href="/women" className="flex items-center gap-2">
              <span className="text-xl">›</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {womensProducts.slice(0, 2).map((product) => (
              <Link key={product._id} href={`/products/${product._id}`} passHref>
                <div className="flex flex-col items-center cursor-pointer">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={product.image?.asset?.url || '/images/default-product.png'}
                      alt={product.productName}
                      width={300}
                      height={300}
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
      </div>
    </div>
  );
}