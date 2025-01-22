import React from 'react';
import Image from 'next/image';

interface FeaturedSectionProps {
  imageUrl: string;
  imageAlt: string;
  heading: string;
  description: string;
  buttonText: string;
}

export default function FeaturedSection({
  imageUrl,
  imageAlt,
  heading,
  description,
  buttonText,
}: FeaturedSectionProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-2xl mb-6">Featured</h2>
      <div className="flex justify-center mb-8">
        <Image 
          src={imageUrl} 
          alt={imageAlt} 
          width={1344} 
          height={700} 
          className="rounded-lg w-full h-auto" 
          layout="responsive"
        />
      </div>
      <h2 className="text-6xl mb-4 sm:text-4xl">{heading}</h2>
      <p className="mb-6">{description}</p>
      <button className="bg-black text-white rounded-full px-6 py-2">
        {buttonText}
      </button>
    </div>
  );
}