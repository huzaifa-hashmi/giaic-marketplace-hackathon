import Link from "next/link";

const categories = [
  "Best Selling Products",
  "Best Shoes",
  "New Basketball Shoes",
  "New Football Shoes",
  "New Men's Shoes",
  "New Running Shoes",
  "Best Men's Shoes",
  "New Jordan Shoes",
  "Best Women's Shoes",
  "Best Training & Gym"
];

export default function RelatedCategories() {
  return (
    <div className="mt-16 mb-8">
      <h2 className="text-lg font-medium mb-4">Related Categories</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            href="#"
            className="px-4 py-2 rounded-full border border-gray-300 hover:border-gray-500 transition-colors"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
}
