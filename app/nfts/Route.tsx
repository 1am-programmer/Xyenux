"use client";
import React, { useState } from "react";
import Link from "next/link"; // For navigation to the cart page

const Route: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState<null | string>(null);

  const handleBuyClick = (nftName: string) => {
    setSelectedNFT(nftName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold">NFT Marketplace</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/nfts/cart" className="hover:text-gray-300">
                  Cart
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* NFT Grid Section */}
      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Explore NFTs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <NFTCard onBuyClick={handleBuyClick} />
            <NFTCard onBuyClick={handleBuyClick} />
            <NFTCard onBuyClick={handleBuyClick} />
            <NFTCard onBuyClick={handleBuyClick} />
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4">Confirm Purchase</h3>
            <p className="mb-4">
              Are you sure you want to buy the NFT "{selectedNFT}"?
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCloseModal}
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// NFT Card Component
const NFTCard: React.FC<{ onBuyClick: (nftName: string) => void }> = ({
  onBuyClick,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-64 object-cover"
        src="https://via.placeholder.com/400"
        alt="NFT"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">NFT Title</h3>
        <p className="text-gray-500 text-sm mt-2">Created by Creator Name</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-blue-600">
            Price: 1.5 ETH
          </span>
          <button
            onClick={() => onBuyClick("NFT Title")}
            className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Route;
