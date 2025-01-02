import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="mx-[5%]">
      {/* Hero Image */}
      <div className="flex justify-center mb-8">
        <Image 
          src='/images/heroImgHome.jpg' 
          alt='Nike Air Max Pulse' 
          width={1344} 
          height={700} 
          className="rounded-lg shadow-lg" 
        />
      </div>

      {/* First Look Section */}
      <div className="text-center mb-16">
        <p className="text-xl mb-2">First Look</p>
        <h1 className="font-semibold text-5xl mb-4">NIKE AIR MAX PULSE</h1>
        <div className="max-w-[511px] mx-auto mb-4">
          <p className="text-center">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            —designed to push you past your limits and help you go to the max.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-black text-white rounded-full px-6 py-2">
            Notify Me
          </button>
          <button className="bg-black text-white rounded-full px-6 py-2">
            Shop Air Max
          </button>
        </div>
      </div>

      {/* Best of Air Max Section */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl">Best of Air Max</h2>
          <Link href="/shop" className="flex items-center gap-2">
            Shop
            <span className="text-xl">›</span>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <Image 
                src='/images/sliderImgHome-1.svg' 
                alt="Nike Air Max Pulse" 
                width={441} 
                height={510} 
                className="rounded-lg" 
              />
            </div>
            <div className="flex justify-between w-full">
              <div>
                <p className="font-medium">Nike Air Max Pulse</p>
                <p className="text-gray-600">Men&apos;s Shoes</p>
              </div>
              <p>₹ 13,995</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <Image 
                src='/images/sliderImgHome-2.svg' 
                alt="Nike Air Max Pulse" 
                width={441} 
                height={510} 
                className="rounded-lg" 
              />
            </div>
            <div className="flex justify-between w-full">
              <div>
                <p className="font-medium">Nike Air Max Pulse</p>
                <p className="text-gray-600">Men&aposo;s Shoes</p>
              </div>
              <p>₹ 13,995</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <Image 
                src='/images/sliderImgHome-3.svg' 
                alt="Nike Air Max 97 SE" 
                width={441} 
                height={510} 
                className="rounded-lg" 
              />
            </div>
            <div className="flex justify-between w-full">
              <div>
                <p className="font-medium">Nike Air Max 97 SE</p>
                <p className="text-gray-600">Men&aposo;s Shoes</p>
              </div>
              <p>₹ 16,995</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl mb-6">Featured</h2>
        <div className="flex justify-center mb-8">
          <Image 
            src='/images/featuredHome.jpg' 
            alt="Featured" 
            width={1344} 
            height={700} 
            className="rounded-lg" 
          />
        </div>
        <h2 className="text-6xl mb-4">STEP INTO WHAT FEELS GOOD</h2>
        <p className="mb-6">Cause everyone should know the feeling of running in that perfect pair.</p>
        <button className="bg-black text-white rounded-full px-6 py-2">
          Find Your Stride
        </button>
      </div>

      {/* Gear Up Section */}
      <div className="mb-16">
        <h2 className="text-2xl mb-6">Gear Up</h2>
        <div className="grid grid-cols-2 gap-8">
          {/* Shop Men's */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl">Shop Men&aposo;s</h3>
              <Link href="/men" className="flex items-center gap-2">
                <span className="text-xl">›</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src='/images/shop men 1.jpg' 
                    alt="Nike Dri-FIT ADV TechKnit Ultra" 
                    width={300} 
                    height={300} 
                    className="rounded-lg" 
                  />
                </div>
                <div className="flex justify-between w-full">
                  <div>
                    <p className="font-medium">Nike Dri-FIT ADV TechKnit Ultra</p>
                    <p className="text-gray-600">Men&aposo;s Short-Sleeve Running Top</p>
                  </div>
                  <p>₹ 3,895</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src='/images/shop men 2.jpg' 
                    alt="Nike Dri-FIT Challenger" 
                    width={300} 
                    height={300} 
                    className="rounded-lg" 
                  />
                </div>
                <div className="flex justify-between w-full">
                  <div>
                    <p className="font-medium">Nike Dri-FIT Challenger</p>
                    <p className="text-gray-600">Men&aposo;s 18cm (approx.) 2-in-1 Versatile Shorts</p>
                  </div>
                  <p>₹ 2,495</p>
                </div>
              </div>
            </div>
          </div>

          {/* Shop Women's */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl">Shop Women&aposo;s</h3>
              <Link href="/women" className="flex items-center gap-2">
                <span className="text-xl">›</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src='/images/shop women 1.png' 
                    alt="Nike Dri-FIT ADV Run Division" 
                    width={300} 
                    height={300} 
                    className="rounded-lg" 
                  />
                </div>
                <div className="flex justify-between w-full">
                  <div>
                    <p className="font-medium">Nike Dri-FIT ADV Run Division</p>
                    <p className="text-gray-600">Women&aposo;s Long-Sleeve Running Top</p>
                  </div>
                  <p>₹ 5,295</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex justify-center mb-4">
                  <Image 
                    src='/images/shop women 2.png' 
                    alt="Nike Fast" 
                    width={300} 
                    height={300} 
                    className="rounded-lg" 
                  />
                </div>
                <div className="flex justify-between w-full">
                  <div>
                    <p className="font-medium">Nike Fast</p>
                    <p className="text-gray-600">Women&aposo;s Mid-Rise 7/8 Running Leggings with Pockets</p>
                  </div>
                  <p>₹ 3,795</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Don't Miss Section */}
      <div className="mb-16">
        <h2 className="text-2xl mb-6">Don&aposo;t Miss</h2>
        <div className="flex justify-center mb-8">
          <Image 
            src='/images/dont miss.jpg' 
            alt="Flight Essentials" 
            width={1344} 
            height={700} 
            className="rounded-lg" 
          />
        </div>
        <div className="text-center">
          <p className="text-xl mb-2">FLIGHT ESSENTIALS</p>
          <p className="mb-6">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
          <button className="bg-black text-white rounded-full px-6 py-2">
            Shop
          </button>
        </div>
      </div>

      {/* Flight Essentials Categories */}
      <div className="mb-16">
        <h3 className="text-2xl mb-6">The Essentials</h3>
        <div className="grid grid-cols-3 gap-4">
          {/* Men's Category */}
          <div className="relative">
            <Image 
              src="/images/essential-1.png" 
              alt="Men's Essentials" 
              width={440} 
              height={540} 
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white px-4 py-1 rounded-full text-sm">Men&aposo;s</span>
            </div>
          </div>

          {/* Women's Category */}
          <div className="relative">
            <Image 
              src="/images/essential-2.png" 
              alt="Women's Essentials" 
              width={440} 
              height={540} 
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white px-4 py-1 rounded-full text-sm">Women&aposo;s</span>
            </div>
          </div>

          {/* Kids' Category */}
          <div className="relative">
            <Image 
              src="/images/essential-3.png" 
              alt="Kids' Essentials" 
              width={440} 
              height={540} 
              className="rounded-lg"
            />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white px-4 py-1 rounded-full text-sm">Kids&aposo;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="grid grid-cols-4 gap-8 text-left mb-16">
        <div>
          <h4 className="font-bold mb-4">Icons</h4>
          <ul className="space-y-2 text-gray-500">
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Shoes</h4>
          <ul className="space-y-2 text-gray-500">
            <li>All Shoes</li>
            <li>Custom Shoes</li>
            <li>Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Clothing</h4>
          <ul className="space-y-2 text-gray-500">
            <li>All Clothing</li>
            <li>Modest Wear</li>
            <li>Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Kids&aposo;</h4>
          <ul className="space-y-2 text-gray-500">
            <li>Infant & Toddler Shoes</li>
            <li>Kids&aposo; Shoes</li>
            <li>Kids&aposo; Jordan Shoes</li>
            <li>Kids&aposo; Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
