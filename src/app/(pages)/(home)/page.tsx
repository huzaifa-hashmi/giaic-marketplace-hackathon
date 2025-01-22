import React from 'react';
import HeroSection from '../../../components/HeroSection';
import BestOfAirMax from '../../../components/BestOfAirmax';
import GearUpSection from '../../../components/GearupSection';
import FeaturedSection from '../../../components/FeaturedSection';
import DontMissSection from '../../../components/DontMissSection';
import FlightEssentialsSection from '../../../components/FlightEssentialsSection';
import { getProducts } from '../../../lib/api'; // Import the getProducts function
import { Product } from '../../../lib/types'; // Import the Product type

export default async function Home() {
  // Fetch products from Sanity
  const products: Product[] = await getProducts();

  // Debugging: Log the fetched products
  console.log("Fetched Products in Home:", products);

  return (
    <main>
      {/* Nike App Banner */}
      <div className="bg-[#F5F5F5] py-8">
        <div className="font-semibold text-center text-2xl mb-4">Hello Nike App</div>
        <div className="text-center mb-8">Download the app to access everything Nike. Get Your Great</div>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Best of Air Max Section */}
      <BestOfAirMax products={products}/>

      {/* Featured Section */}
      <FeaturedSection
        imageUrl="/images/featuredHome.jpg"
        imageAlt="Featured"
        heading="STEP INTO WHAT FEELS GOOD"
        description="Cause everyone should know the feeling of running in that perfect pair."
        buttonText="Find Your Stride"
      />

      {/* Gear Up Section */}
      <GearUpSection products={products} />

      {/* Don't Miss Section */}
      <DontMissSection />

      {/* Flight Essentials Section */}
      <FlightEssentialsSection />
    </main>
  );
}