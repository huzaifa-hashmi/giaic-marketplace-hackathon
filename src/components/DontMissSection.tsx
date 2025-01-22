import React from 'react';
import Image from 'next/image';

export default function DontMissSection() {
  return (
    <div className="mb-16">
      <h2 className="text-2xl mb-6">Don&apos;t Miss</h2>
      <div className="flex justify-center mb-8">
        <Image 
          src="/images/dont miss.jpg" 
          alt="Flight Essentials" 
          width={1344} 
          height={700} 
          className="rounded-lg" 
        />
      </div>
      <div className="text-center">
        <p className="text-xl mb-2">FLIGHT ESSENTIALS</p>
        <p className="mb-6">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
        <button className="bg-black text-white rounded-full px-6 py-2">
          Shop
        </button>
      </div>
    </div>
  );
}