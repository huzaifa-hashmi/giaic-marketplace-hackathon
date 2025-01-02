'use client';
import { useState } from 'react';
import Image from "next/image";
import ProductImages from "../../../../components/ProductImages";
import SizeSelector from "../../../../components/SizeSelector";
import { Heart } from "lucide-react";

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  // Sample product images
  const productImages = [
    "/images/sliderImgHome-3.svg",
    "/images/sliderImgHome-1.svg",
    "/images/sliderImgHome-2.svg",
  ];

  // Available sizes
  const sizes = [6, 7, 8, 9, 10, 11];

  return (
    <main className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid grid-cols-2 gap-16">
        {/* Product Images */}
        <ProductImages 
          mainImage={productImages[0]} 
          additionalImages={productImages.slice(1)} 
        />

        {/* Product Details */}
        <div>
          {/* Product Title and Favorite */}
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-4xl font-medium">
              Nike Air Force 1 PLT.AF.ORM
            </h1>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          {/* Product Category */}
          <p className="text-lg mb-2">Women&apos;s Shoes</p>

          {/* Price */}
          <div className="mb-8">
            <p className="text-2xl">₹ 8,695.00</p>
            <p className="text-sm text-gray-500">incl. of taxes</p>
            <p className="text-sm text-gray-500">(Also includes all applicable duties)</p>
          </div>

          {/* Product Description */}
          <p className="text-gray-700 mb-8">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. 
            Its &quot;inside out&quot;-inspired construction, including unique layering and 
            exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. 
            Details like the deco stitching on the Swoosh add coveted appeal, while 
            the unexpected shading, rich mixture of materials and aged midsole aesthetic 
            give this release an artisan finish.
          </p>

          {/* Color Selection */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Select Color</h2>
            <div className="flex gap-2">
              <button className="w-12 h-12 rounded-full border-2 border-black p-1">
                <div className="w-full h-full rounded-full bg-[#f5f5f5]"></div>
              </button>
              <button className="w-12 h-12 rounded-full border hover:border-black p-1">
                <div className="w-full h-full rounded-full bg-pink-300"></div>
              </button>
            </div>
          </div>

          {/* Size Selector */}
          <SizeSelector sizes={sizes} onSelect={setSelectedSize} />

          {/* Add to Cart Button */}
          <button 
            className={`w-full py-4 rounded-full mb-4 transition-colors ${
              selectedSize 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
            disabled={!selectedSize}
          >
            {selectedSize ? 'Add to Cart' : 'Select Size'}
          </button>

          <button className="w-full border border-gray-300 py-4 rounded-full hover:border-black transition-colors mb-8">
            Favorite
          </button>

          {/* Product Features */}
          <div className="border-t pt-8">
            <h2 className="text-lg font-medium mb-4">Product Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Premium leather and synthetic materials for durability</li>
              <li>Foam midsole for lightweight cushioning</li>
              <li>Rubber outsole for traction and durability</li>
              <li>Padded collar for added comfort</li>
              <li>Perforations on toe for breathability</li>
              <li>Colour Shown: Sail/Pink</li>
              <li>Style: DJ9942-100</li>
            </ul>
          </div>

          {/* Delivery & Returns */}
          <div className="border-t pt-8 mt-8">
            <h2 className="text-lg font-medium mb-4">Delivery & Returns</h2>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-4">
                <Image src="/images/tickNike.svg" alt="Free Delivery" width={24} height={24} />
                <div>
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-sm">For Nike Members. Faster Delivery options available</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Image src="/images/tickNike.svg" alt="Free Returns" width={24} height={24} />
                <div>
                  <p className="font-medium">Free Returns</p>
                  <p className="text-sm">30-day returns for any reason</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
