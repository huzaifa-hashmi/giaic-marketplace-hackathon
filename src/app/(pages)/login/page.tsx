'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

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

      {/* Login Form */}
      <div className="max-w-sm w-full">
        <div className="text-center mb-12 font-bold">
          <h1 className="text-2xl ">YOUR ACCOUNT</h1>
          <h2 className="text-2xl ">FOR EVERYTHING</h2>
          <h3 className="text-2xl ">NIKE</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-3 border rounded focus:outline-none focus:border-black text-base"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-3 border rounded focus:outline-none focus:border-black text-base"
              required
            />
          </div>

          {/* Keep Signed In & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
                className="rounded border-gray-300 focus:ring-black"
              />
              <span>Keep me signed in</span>
            </label>
            <Link href="/forgot-password" className="text-gray-500 hover:text-black">
              Forgotten your password?
            </Link>
          </div>

          {/* Terms and Conditions */}
          <div className="text-xs text-gray-500">
            By logging in, you agree to Nike&apos;s{' '}
            <Link href="/privacy-policy" className="underline hover:text-black">
              Privacy Policy
            </Link>
            {' '}and{' '}
            <Link href="/terms" className="underline hover:text-black">
              Terms of Use
            </Link>
            .
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
          >
            SIGN IN
          </button>

          {/* Join Us Link */}
          <div className="text-center text-sm">
            Not a Member?{' '}
            <Link href="/join" className="text-black underline hover:no-underline">
              Join Us
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
