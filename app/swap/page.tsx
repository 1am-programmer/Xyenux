"use client";
import React, { useState } from "react";
import { HiMiniArrowsUpDown } from "react-icons/hi2";

const page = () => {
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("XYN");
  const [toCurrency, setToCurrency] = useState("ETH");

  const handleSwap = () => {
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h1 className="md:text-3xl text-center mb-6 text-[#9b59b6] text-2xl font-bold">
          Swap Xyenux to any ERC20 network
        </h1>

        <div className="space-y-6">
          {/* From Currency Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:space-x-4 sm:space-y-0 space-y-4">
            <div className="flex w-full sm:w-2/3 border border-gray-300 rounded-md overflow-hidden">
              <input
                type="number"
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                className="w-full p-3 border-none text-lg"
                placeholder={`Amount in ${
                  fromCurrency === "XYN"
                    ? "XYN"
                    : fromCurrency?.slice(0, 3).toUpperCase()
                }`}
              />
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="w-1/3 p-3 border-none text-lg"
              >
                <option value="XYN">XYN</option>
                <option value="ETH">ETH</option>
                <option value="USDT">USDT</option>
                <option value="DAI">DAI</option>
                <option value="UNI">UNI</option>
              </select>
            </div>
          </div>

          {/* Swap Icon (Arrows) */}
          <div className="flex justify-center">
            <button
              onClick={handleSwap}
              className="text-3xl p-2 border border-gray-300 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition"
            >
              <HiMiniArrowsUpDown />
            </button>
          </div>

          {/* To Currency Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:space-x-4 sm:space-y-0 space-y-4">
            <div className="flex w-full sm:w-2/3 border border-gray-300 rounded-md overflow-hidden">
              <input
                type="number"
                value={toAmount}
                onChange={(e) => setToAmount(e.target.value)}
                className="w-full p-3 border-none text-lg"
                placeholder={`Amount in ${
                  toCurrency === "XYN"
                    ? "XYN"
                    : toCurrency?.slice(0, 3).toUpperCase()
                }`}
              />
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="w-1/3 p-3 border-none text-lg"
              >
                <option value="ETH">ETH</option>
                <option value="USDT">USDT</option>
                <option value="DAI">DAI</option>
                <option value="LINK">LINK</option>
                <option value="UNI">UNI</option>
              </select>
            </div>
          </div>

          <button
            onClick={handleSwap}
            className="w-full p-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-blue-600 transition"
          >
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
