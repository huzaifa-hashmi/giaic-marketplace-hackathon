"use client";
import Image from "next/image";
import Link from "next/link";
import { SignUp } from '@clerk/nextjs';

export default function JoinPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Nike Logo */}
      <div className="mb-8 sm:mb-12">
        <Image
          src="/images/logoNike-2.svg"
          alt="Nike"
          width={324}
          height={17}
          className="mx-auto w-48 sm:w-64"
        />
      </div>

      {/* Sign Up Form */}
      <div className="max-w-sm w-full">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">
          BECOME A NIKE MEMBER
        </h1>
        <p className="text-center text-sm sm:text-base mb-6">
          Create your Nike Member profile and get first access to the very best of Nike
          products, inspiration, and community.
        </p>

        {/* Use Clerk's SignUp component */}
        <SignUp 
          path="/join" // Ensure this matches your route
          routing="path" // Use path routing
          signInUrl="/login" // Redirect to login after sign-up
          afterSignUpUrl="/" // Redirect after successful sign-up
        />

        <div className="text-center text-sm mt-4">
            Already a Member?{" "}
            <Link href="/login" className="text-black underline hover:no-underline">
              Sign In
            </Link>
          </div>
      </div>
    </div>
  );
}