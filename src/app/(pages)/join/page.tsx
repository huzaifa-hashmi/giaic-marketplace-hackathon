"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function JoinPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState('India');
  const [gender, setGender] = useState('Male');
  const [updates, setUpdates] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Example of handling form submission
    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          dateOfBirth,
          country,
          gender,
          updates,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create account');
      }

      // Handle successful account creation (e.g., redirect or show a success message)
    } catch (error) {
      console.error(error); // Log the error for debugging
      setError('An error occurred while creating your account. Please try again.');
    }
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

      {/* Join Form */}
      <div className="max-w-sm w-full">
        <h1 className="text-2xl font-bold text-center mb-8">BECOME A NIKE MEMBER</h1>
        <p className="text-center mb-8">Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.</p>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

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

          {/* First Name Input */}
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-3 border rounded focus:outline-none focus:border-black text-base"
              required
            />
          </div>

          {/* Last Name Input */}
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-3 border rounded focus:outline-none focus:border-black text-base"
              required
            />
          </div>

          {/* Date of Birth Input */}
          <div>
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full px-3 py-3 border rounded focus:outline-none focus:border-black text-base"
              required
            />
          </div>

          {/* Country Selection */}
          <div>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-3 py-3 border rounded focus:outline-none focus:border-black text-base"
            >
              <option value="India">India</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          {/* Gender Selection */}
          <div className="flex items-center mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
                className="rounded"
              />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
                className="rounded"
              />
              <span>Female</span>
            </label>
          </div>

          {/* Updates Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={updates}
              onChange={(e) => setUpdates(e.target.checked)}
              className="rounded border-gray-300 focus:ring-black"
            />
            <span className="ml-2">Sign up for emails to get updates from Nike on products, offers, and your Member benefits</span>
          </div>

          {/* Terms and Conditions */}
          <div className="text-xs text-gray-500">
            By creating an account, you agree to Nike&apos;s{' '}
            <Link href="/privacy-policy" className="underline hover:text-black">
              Privacy Policy
            </Link>
            {' '}and{' '}
            <Link href="/terms" className="underline hover:text-black">
              Terms of Use
            </Link>
            .
          </div>

          {/* Join Us Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition-colors"
          >
            JOIN US
          </button>

          {/* Already a Member Link */}
          <div className="text-center text-sm">
            Already a Member?{' '}
            <Link href="/login" className="text-black underline hover:no-underline">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
