import Image from "next/image";

export default function Home() {
  return (
  <>
  <div className=" bg-[#F5F5F5]"><div className="font-semibold flex justify-center">Hello Nike App</div>
  <div className="flex justify-center ">Download the app to access everything Nike. Get Your Great</div>
  </div>
  <div className="mx-[5%]">
    <Image src='/images/heroImgHome.jpg' alt='' width={1344} height={700} />
    <div className="">
      <p className=" flex justify-center items-center">First Look</p>
      <p className="font-semibold text-5xl  flex justify-center items-center">Nike Air Max Pulse</p>
      <ul className="w-[511] h-[48]">
        <li className=" flex justify-center items-center">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse</li>
      <li className=" flex justify-center items-center">—designed to push you past your limits and help you go to the max.</li></ul>

      <div className=" flex justify-center items-center gap-3">
        <button className="bg-[#111111] text-white rounded-xl border-spacing-10">Notify Me</button>
        <button className="bg-[#111111] text-white rounded-xl border-spacing-10">Shop Air Max</button>
      </div>

      <div className="">Best of Air Max</div>
      <div className="grid grid-cols-3">
        <Image src='/images/sliderImgHome-1.svg' alt="" width={441.36} height={510.36}/>
        <Image src='/images/sliderImgHome-2.svg' alt="" width={441.36} height={510.36}/>
        <Image src='/images/sliderImgHome-3.svg' alt="" width={441.36} height={510.36}/>
      </div>
      <div className="">
        <div className="font-semibold text-xl">Featured</div>
        <Image src='/images/featuredHome.jpg' alt="" width={1344} height={700}/>
        <div className="text-6xl flex justify-center items-center">STEP INTO WHAT FEELS GOOD</div>
        <div className="text-3xl">Gear Up</div>


      </div>


    </div></div>
  </>  );
}
