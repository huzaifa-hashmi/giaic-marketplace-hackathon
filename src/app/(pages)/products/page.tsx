import React from 'react';
import FilterSidebar from '../../../components/FilterSidebar';
import ProductCard from '../../../components/ProductCard';
import RelatedCategories from '../../../components/RelatedCategories';
import { getProducts } from '../../../lib/api'; // Import the utility function
import { Product } from '../../../lib/types'; // Import the Product type

export default async function ProductsPage() {
  // Fetch products directly in the Server Component
  const products: Product[] = await getProducts();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Filters */}
      <div className="hidden md:block">
        <FilterSidebar />
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
              key={product._id} // Use _id from Sanity
              id={product._id}
              image={product.image?.asset?.url} // Access the image URL
              label={product.status} // Use status as the label
              name={product.productName} // Use productName from schema
              category={product.category}
              price={product.price}
              //inventory={product.inventory} // Pass inventory to ProductCard
              //description={product.description} // Pass description to ProductCard
            />
          ))}
        </div>

        {/* Related Categories */}
        <RelatedCategories />
      </main>
    </div>
  );
}