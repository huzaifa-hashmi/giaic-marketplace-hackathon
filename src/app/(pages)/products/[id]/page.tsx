import ProductImages from '../../../../components/ProductImages';
import { Heart } from 'lucide-react';
import { getProductById } from '../../../../lib/api';
import { Product } from '../../../../lib/types';

export default async function ProductDetail({ params }: { params: { id: string } }) {
  let product: Product;
  try {
    product = await getProductById(params.id);
  } catch (error) {
    console.error("Error fetching product:", error);
    return <div>Product not found</div>;
  }

  const productImages = [
    product.image?.asset?.url || '/images/default-product.png',
    '/images/sliderImgHome-1.svg',
    '/images/sliderImgHome-2.svg',
  ];

  const sizes = [6, 7, 8, 9, 10, 11];

  return (
    <main className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid grid-cols-2 gap-16">
        <ProductImages
          mainImage={productImages[0]}
          
        />
        <div>
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-4xl font-medium">{product.productName}</h1>
            <button aria-label="Favorite" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Heart className="w-6 h-6" />
            </button>
          </div>
          <p className="text-lg mb-2">{product.category}</p>
          <div className="mb-8">
            <p className="text-2xl">₹ {product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">incl. of taxes</p>
          </div>
          <p className="text-gray-700 mb-8">{product.description}</p>
          {/* Add to Cart and Favorite buttons */}
          {/* Product Features and Delivery & Returns sections */}
        </div>
      </div>
    </main>
  );
}