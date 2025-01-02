import HeroSection from "../../../components/HeroSection";

export default function Home() {
  return (
    <main>
      {/* Nike App Banner */}
      <div className="bg-[#F5F5F5] py-8">
        <div className="font-semibold text-center text-2xl mb-4">Hello Nike App</div>
        <div className="text-center mb-8">Download the app to access everything Nike. Get Your Great</div>
      </div>

      {/* Hero and All Content Sections */}
      <HeroSection />
    </main>
  );
}
