"use client";
import React, { useState } from "react";
import Link from "next/link"; // For navigation to the cart page
import { Orbitron } from "next/font/google";
import Image from "next/image";
import { FaHome, FaShoppingCart } from "react-icons/fa"; // Importing Home and Cart icons from react-icons/fa

const orbitron = Orbitron({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const Route: React.FC = () => {
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState<null | string>(null);

  // Handle buy click - open the buy confirmation modal
  const handleBuyClick = (nftName: string) => {
    setSelectedNFT(nftName);
    setIsBuyModalOpen(true);
  };

  // Handle sell click - open the sell confirmation modal
  const handleSellClick = (nftName: string) => {
    setSelectedNFT(nftName);
    setIsSellModalOpen(true);
  };

  // Close buy modal
  const handleCloseBuyModal = () => setIsBuyModalOpen(false);

  // Close sell modal
  const handleCloseSellModal = () => setIsSellModalOpen(false);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-web3-gradient text-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-wrap">
          <section className="flex items-center space-x-4">
            <Image
              src="/images/logo.svg"
              alt="Xyenux Logo"
              width={50}
              height={50}
            />
            <h1
              className={`${orbitron.className} text-2xl md:flex items-center`}
            >
              Xyenux
            </h1>
            {/* <div className="text-2xl font-bold mx-5 hidden sm:flex">
              NFT Marketplace
            </div> */}
          </section>

          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="hover:text-gray-300 flex items-center space-x-2"
                >
                  <FaHome className="h-6 w-6" /> {/* Home Icon */}
                  <span className="hidden sm:inline">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/nfts/cart"
                  className="hover:text-gray-300 flex items-center space-x-2"
                >
                  <FaShoppingCart className="h-6 w-6" /> {/* Cart Icon */}
                  <span className="hidden sm:inline">Cart</span>
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
            {/* Increased NFT Card count to 8 */}
            <NFTCard
              onBuyClick={handleBuyClick}
              onSellClick={handleSellClick}
            />
            <NFTCard
              onBuyClick={handleBuyClick}
              onSellClick={handleSellClick}
            />
            <NFTCard
              onBuyClick={handleBuyClick}
              onSellClick={handleSellClick}
            />
            <NFTCard
              onBuyClick={handleBuyClick}
              onSellClick={handleSellClick}
            />
            <NFTCard
              onBuyClick={handleBuyClick}
              onSellClick={handleSellClick}
            />
            <NFTCard
              onBuyClick={handleBuyClick}
              onSellClick={handleSellClick}
            />
            <NFTCard
              onBuyClick={handleBuyClick}
              onSellClick={handleSellClick}
            />
            <NFTCard
              onBuyClick={handleBuyClick}
              onSellClick={handleSellClick}
            />
          </div>
        </div>
      </main>

      {/* Buy Modal */}
      {isBuyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 sm:p-8 rounded-lg max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4">
              Confirm Your Purchase
            </h3>
            <p className="mb-4">
              Are you sure you want to purchase the NFT "{selectedNFT}"? Once
              purchased, this action cannot be undone.
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleCloseBuyModal}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCloseBuyModal}
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sell Modal */}
      {isSellModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 sm:p-8 rounded-lg max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4">Confirm Your Sale</h3>
            <p className="mb-4">
              Are you sure you want to sell the NFT "{selectedNFT}"? Once sold,
              it will no longer be in your collection.
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleCloseSellModal}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCloseSellModal}
                className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
              >
                Confirm Sale
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// NFT Card Component
const NFTCard: React.FC<{
  onBuyClick: (nftName: string) => void;
  onSellClick: (nftName: string) => void;
}> = ({ onBuyClick, onSellClick }) => {
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
          <div className="flex space-x-2">
            <button
              onClick={() => onBuyClick("NFT Title")}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Buy
            </button>
            <button
              onClick={() => onSellClick("NFT Title")}
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
            >
              Sell
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Route;
