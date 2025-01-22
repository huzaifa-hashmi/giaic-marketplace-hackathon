import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Image */}
      <div className="flex justify-center mb-8">
        <Image 
          src='/images/heroImgHome.jpg' 
          alt='Nike Air Max Pulse' 
          width={1344} 
          height={700} 
          className="rounded-lg shadow-lg w-full h-auto max-w-full" 
          layout="responsive"
        />
      </div>

      {/* First Look Section */}
      <div className="text-center mb-16">
        <p className="text-xl mb-2">First Look</p>
        <h1 className="font-semibold text-5xl mb-4 sm:text-4xl">NIKE AIR MAX PULSE</h1>
        <div className="max-w-[511px] mx-auto mb-4">
          <p className="text-center">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            —designed to push you past your limits and help you go to the max.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-black text-white rounded-full px-6 py-2 m-2">
            Notify Me
          </button>
          <button className="bg-black text-white rounded-full px-6 py-2 m-2">
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  );
}