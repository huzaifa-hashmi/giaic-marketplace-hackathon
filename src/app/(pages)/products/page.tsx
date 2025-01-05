import React from 'react';
import FilterSidebar from '../../../components/FilterSidebar';
import ProductCard from '../../../components/ProductCard';
import RelatedCategories from '../../../components/RelatedCategories';

// Sample product data - 30 products
const products = Array.from({ length: 30 }, (_, index) => {
  const variants = [
    {
      image: '/images/sliderImgHome-1.svg',
      name: 'Nike Air Force 1 Mid \'07',
      category: 'Men\'s Shoes',
      price: 10795,
    },
    {
      image: '/images/sliderImgHome-2.svg',
      name: 'Nike Court Vision Low Next Nature',
      category: 'Men\'s Shoes',
      price: 4995,
    },
    {
      image: '/images/sliderImgHome-3.svg',
      name: 'Nike Air Force 1 PLT.AF.ORM',
      category: 'Women\'s Shoes',
      price: 8695,
    },
  ];

  // Use modulo to cycle through the variants
  const variant = variants[index % 3];

  return {
    id: index + 1,
    image: variant.image,
    label: index < 5 ? 'Just In' : index < 10 ? 'Promo Exclusion' : 'Bestseller',
    name: `${variant.name} ${Math.floor(index / 3) + 1}`,
    category: variant.category,
    colors: (index % 3) + 1,
    price: variant.price + index * 100,
  };
});

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Filters */}
      <div className="hidden md:block">
        <FilterSidebar/>
      </div>

      {/* Product Grid and Related Categories */}
      <main className="flex-1 p-6">
        {/* Filter Controls */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <div></div>
          <div className="flex items-center gap-4">
            {/* Toggle button for mobile (optional) */}
            <button className="flex items-center gap-2">
              Filters
              <span>▾</span>
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              label={product.label}
              name={product.name}
              category={product.category}
              colors={product.colors}
              price={product.price}
            />
          ))}
        </div>

        {/* Related Categories */}
        <RelatedCategories />
      </main>
    </div>
  );
}