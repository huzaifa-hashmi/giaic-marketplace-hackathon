import { client } from "../sanity/lib/client"; // Import the Sanity client
import { Product } from './types'; // Import the Product type

// Fetch a single product by ID
export async function getProductById(id: string): Promise<Product> {
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    image{
      asset->{
        url
      }
    },
    description
  }`;
  const product: Product = await client.fetch(query, { id });
  return product;
}

// Fetch all products (optional, if needed)
export async function getProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    _id,
    productName,
    category,
    price,
    inventory,
    colors,
    status,
    image{
      asset->{
        url
      }
    },
    description
  }`;
  const products: Product[] = await client.fetch(query);
  return products;
}