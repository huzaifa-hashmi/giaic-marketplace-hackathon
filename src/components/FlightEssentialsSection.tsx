import React from 'react';
import Image from 'next/image';

export default function FlightEssentialsSection() {
  return (
    <div className="mb-16">
      <h3 className="text-2xl mb-6">The Essentials</h3>
      <div className="grid grid-cols-3 gap-4">
        {/* Men's Category */}
        <div className="relative">
          <Image 
            src="/images/essential-1.png" 
            alt="Men's Essentials" 
            width={440} 
            height={540} 
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4">
            <span className="bg-white px-4 py-1 rounded-full text-sm">Men&apos;s</span>
          </div>
        </div>

        {/* Women's Category */}
        <div className="relative">
          <Image 
            src="/images/essential-2.png" 
            alt="Women's Essentials" 
            width={440} 
            height={540} 
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4">
            <span className="bg-white px-4 py-1 rounded-full text-sm">Women&apos;s</span>
          </div>
        </div>

        {/* Kids' Category */}
        <div className="relative">
          <Image 
            src="/images/essential-3.png" 
            alt="Kids' Essentials" 
            width={440} 
            height={540} 
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4">
            <span className="bg-white px-4 py-1 rounded-full text-sm">Kids&apos;</span>
          </div>
        </div>
      </div>
    </div>
  );
}