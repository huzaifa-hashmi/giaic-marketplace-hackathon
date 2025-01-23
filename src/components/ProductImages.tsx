'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ProductImagesProps {
  mainImage: string;
  additionalImages?: string[];
  className?: string;
}

export default function ProductImages({ mainImage, additionalImages = [], className }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const allImages = [mainImage, ...additionalImages];

  return (
    <div className={`space-y-4 ${className || ''}`}>
      {/* Main Image */}
      <div className="bg-[#f5f5f5] rounded-lg p-8 flex items-center justify-center">
        <Image
          src={selectedImage}
          alt="Product Image"
          width={600}
          height={600}
          className="object-contain transition-opacity duration-300"
        />
      </div>

      {/* Thumbnail Images */}
      {allImages.length > 1 && (
        <div className="grid grid-cols-5 gap-4">
          {allImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image)}
              className={`bg-[#f5f5f5] rounded-lg p-2 hover:opacity-80 transition-opacity ${
                selectedImage === image ? 'ring-2 ring-black' : ''
              }`}
            >
              <Image
                src={image}
                alt={`Product Image ${index + 1}`}
                width={100}
                height={100}
                className="object-contain"
              />
            </button>
          ))}
        </div>
      )}

      {/* Image Navigation Buttons */}
      <div className="flex justify-center gap-4">
        <button className="text-sm text-gray-500 hover:text-black transition-colors">
          View Larger
        </button>
        {allImages.length > 1 && (
          <button className="text-sm text-gray-500 hover:text-black transition-colors">
            View All {allImages.length} Photos
          </button>
        )}
      </div>
    </div>
  );
}
