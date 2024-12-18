import React from "react";
import Link from "next/link";
const page: React.FC = () => {
  return (
    <div className="flex-1 py-8" id="cart">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Your Cart</h2>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">NFTs in Cart</h3>
          <p>No items added yet.</p>
        </div>
        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
