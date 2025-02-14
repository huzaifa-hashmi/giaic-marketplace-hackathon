"use client";
import Image from "next/image";
import Link from "next/link";
import { SignIn } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Nike Logo */}
      <div className="mb-12">
        <Image
          src="/images/logoNike-2.svg"
          alt="Nike"
          width={324}
          height={17}
          className="mx-auto"
        />
      </div>

      {/* Sign In Form */}
      <div className="max-w-sm w-full">
        <div className="text-center mb-12 font-bold">
          <h1 className="text-2xl">YOUR ACCOUNT</h1>
          <h2 className="text-2xl">FOR EVERYTHING</h2>
          <h3 className="text-2xl">NIKE</h3>
        </div>

        {/* Use Clerk's SignIn component */}
        <SignIn 
          path="/login" // Ensure this matches your route
          routing="path" // Use path routing
          signUpUrl="/join" // Redirect to sign-up if not a member
          afterSignInUrl="/" // Redirect after successful login
        />

        <div className="text-center text-sm mt-4">
          Not a Member?{" "}
          <Link href="/join" className="text-black underline hover:no-underline">
            Join Us
          </Link>
        </div>
      </div>
    </div>
  );
}