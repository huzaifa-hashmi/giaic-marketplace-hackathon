import Link from "next/link";

export default function FilterSidebar() {
  return (
    <aside className="w-64 p-6 border-r">
      <div className="flex justify-between items-center mb-6">
        <h2>New (500)</h2>
        <button className="text-sm">Hide Filters</button>
      </div>

      {/* Categories */}
      <div className="space-y-2 mb-6">
        <Link href="#" className="block hover:text-gray-600">Shoes</Link>
        <Link href="#" className="block hover:text-gray-600">Sports Bras</Link>
        <Link href="#" className="block hover:text-gray-600">Tops & T-Shirts</Link>
        <Link href="#" className="block hover:text-gray-600">Hoodies & Sweatshirts</Link>
        <Link href="#" className="block hover:text-gray-600">Jackets</Link>
        <Link href="#" className="block hover:text-gray-600">Trousers & Tights</Link>
        <Link href="#" className="block hover:text-gray-600">Shorts</Link>
        <Link href="#" className="block hover:text-gray-600">Tracksuits</Link>
        <Link href="#" className="block hover:text-gray-600">Jumpsuits & Rompers</Link>
        <Link href="#" className="block hover:text-gray-600">Skirts & Dresses</Link>
        <Link href="#" className="block hover:text-gray-600">Socks</Link>
        <Link href="#" className="block hover:text-gray-600">Accessories & Equipment</Link>
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Gender</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span>Men</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span>Women</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span>Unisex</span>
          </label>
        </div>
      </div>

      {/* Kids Filter */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Kids</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span>Boys</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span>Girls</span>
          </label>
        </div>
      </div>

      {/* Shop By Price */}
      <div className="mb-6">
        <h3 className="font-medium mb-2">Shop By Price</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span>Under ₹ 2,500.00</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span>₹ 2,501.00 - ₹ 7,500.00</span>
          </label>
        </div>
      </div>
    </aside>
  );
}
