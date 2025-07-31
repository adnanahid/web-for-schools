import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-red-600">404 - পৃষ্ঠা পাওয়া যায়নি</h1>
      <p className="mt-4 text-gray-700">দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা খুঁজে পাওয়া যায়নি।</p>
      <Link href="/" className="mt-6 inline-block text-blue-600 hover:underline">
        হোমপেজে ফিরে যান
      </Link>
    </div>
  );
}
