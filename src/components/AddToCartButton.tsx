"use client";
import { useEffect } from 'react';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../app/store/cartStore';
import toast from 'react-hot-toast';

// Define the AddToCartButtonProps interface
interface AddToCartButtonProps {
  product: {
    _id: string;
    productName: string;
    price: number;
    image: string;
  };
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart, isHydrated, hydrate } = useCartStore();

  useEffect(() => {
    if (!isHydrated) {
      hydrate();
    }
  }, [hydrate, isHydrated]);

  const handleAddToCart = () => {
    if (!isHydrated) return;
    
    addToCart({
      id: product._id,
      productName: product.productName,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    toast.success(`${product.productName} added to cart!`);
  };

  return (
    <Button
      className="w-[174px] h-[54px] font-medium rounded-[30px]"
      variant="default"
      onClick={handleAddToCart}
      disabled={!isHydrated}
    >
      <ShoppingCart className="w-5 h-5 mr-2" />
      Add to Cart
    </Button>
  );
}