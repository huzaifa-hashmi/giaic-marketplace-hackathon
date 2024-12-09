import Link from "next/link";
import Image from "next/image";

export default function Navbar(){

    return(
        <>
    <div className="bg-[#f5f5f5] flex justify-around mx-3">
      <Image src='/images/logoNike.svg' alt='logo' width={75} height={24}/>
      <ul className="flex justify-end gap-[10%]">
        <li>Find a Store</li>
        <li>|</li>
        <li>Help</li>
        <li>|</li>
        <li>Join Us</li>
        <li>|</li>
        <li>Sign in</li>
      </ul>
    </div>
    <div className="flex justify-around">
      <Image src='/images/tickNike.svg' alt='logo' width={78.47} height={78.47}/>
      <ul className="flex justify-evenly gap-3">
        <li>New & Featured</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Sale</li>
        <li>SNKRS</li>
      </ul>
    </div>

    </>

    )
}