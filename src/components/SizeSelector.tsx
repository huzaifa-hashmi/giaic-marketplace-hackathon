'use client';
import { useState } from 'react';

interface SizeSelectorProps {
  sizes: number[];
  onSelect: (size: number) => void;
}

export default function SizeSelector({ sizes, onSelect }: SizeSelectorProps) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleSelect = (size: number) => {
    setSelectedSize(size);
    onSelect(size);
  };

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Select Size</h2>
        <button className="text-gray-500 text-sm hover:text-black">Size Guide</button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSelect(size)}
            className={`border rounded-md py-3 hover:border-black transition-colors ${
              selectedSize === size ? 'border-black' : ''
            }`}
          >
            UK {size}
          </button>
        ))}
      </div>
    </div>
  );
}
