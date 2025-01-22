'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  id: string;
  image: string;
  label: string;
  name: string;
  category: string;
  price: number;
}

export default function ProductCard({ 
  id,
  image, 
  label, 
  name, 
  category, 
  price 
}: ProductCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${id}`);
  };

  return (
    <div 
      onClick={handleClick}
      className="group cursor-pointer"
    >
      <div className="mb-4">
        <Image 
          src={image} 
          alt={name} 
          width={400} 
          height={400} 
          className="rounded-lg group-hover:opacity-80 transition-opacity duration-200"
        />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-red-600">{label}</span>
        </div>
        <h3 className="font-medium group-hover:text-gray-600 transition-colors">{name}</h3>
        <p className="text-gray-600">{category}</p>
        <p className="mt-2">MRP : ₹ {price.toLocaleString()}</p>
      </div>
    </div>
  );
}
