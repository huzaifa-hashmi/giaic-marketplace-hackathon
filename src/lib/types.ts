// lib/types.ts
export interface Product {
    _id: string;
    productName: string;
    category: string;
    price: number;
    inventory: number;
    colors: string[];
    status: string;
    image: {
      asset: {
        url: string;
      };
    };
    description: string;
  }