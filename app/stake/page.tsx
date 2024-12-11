"use client";
import React, { useState } from "react";

type StakingDuration = "24h" | "1w" | "1m" | "6m";

const Page = () => {
  const [stakingAmount, setStakingAmount] = useState("");
  const [status, setStatus] = useState("");
  const [stakingBalance, setStakingBalance] = useState(1000);
  const [xyenuxReward, setXyenuxReward] = useState(0);
  const [stakingDuration, setStakingDuration] =
    useState<StakingDuration>("24h");

  // Rewards percentage based on the staking duration
  const rewardPercentage: Record<StakingDuration, number> = {
    "24h": 0.05,
    "1w": 0.1,
    "1m": 0.15,
    "6m": 0.3,
  };

  // Simulate staking process
  const handleStake = () => {
    if (
      parseFloat(stakingAmount) <= 0 ||
      parseFloat(stakingAmount) > stakingBalance
    ) {
      setStatus("Please enter a valid staking amount.");
      return;
    }

    setStatus(`Staking for ${stakingDuration}...`);

    // Simulate staking logic
    setTimeout(() => {
      const reward =
        parseFloat(stakingAmount) * rewardPercentage[stakingDuration];
      setXyenuxReward(reward);
      setStatus(
        `Staked successfully for ${stakingDuration}! You earned ${reward} Xyenux.`
      );
    }, 2000); // Simulated delay for staking
  };

  // Function to handle quick stake options (percentage of the balance)
  const handleQuickStake = (percentage: number) => {
    const quickAmount = (stakingBalance * percentage) / 100;
    setStakingAmount(quickAmount.toString());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        Stake Xyenux to Earn More Xyenux
      </h1>

      <div className="flex justify-center mb-4">
        <div className="text-lg">
          <p>Available Xyenux balance: {stakingBalance}</p>
        </div>
      </div>

      <div className="flex justify-center mb-6">
        <input
          type="number"
          value={stakingAmount}
          onChange={(e) => setStakingAmount(e.target.value)}
          className="border border-gray-300 p-2 rounded-md text-black w-1/2"
          placeholder="Enter amount to stake"
        />
      </div>

      <div className="flex justify-center mb-6 gap-4">
        {/* Quick Stake Buttons */}
        <button
          onClick={() => handleQuickStake(25)}
          className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-500"
        >
          25%
        </button>
        <button
          onClick={() => handleQuickStake(50)}
          className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-500"
        >
          50%
        </button>
        <button
          onClick={() => handleQuickStake(100)}
          className="text-red-600 bg-white px-4 py-2 rounded-xl hover:bg-red-500"
        >
          Max
        </button>
      </div>

      <div className="flex justify-center mb-6 gap-4">
        {/* Duration Selection */}
        <select
          value={stakingDuration}
          onChange={(e) =>
            setStakingDuration(e.target.value as StakingDuration)
          } // Type-safe update
          className="bg-white border border-gray-300 p-2 rounded-md"
        >
          <option value="24h">24 hours</option>
          <option value="1w">1 week</option>
          <option value="1m">1 month</option>
          <option value="6m">6 months</option>
        </select>
      </div>

      <div className="flex justify-center mb-6">
        <button
          onClick={handleStake}
          className="bg-red-600 text-white rounded-xl px-6 py-3 hover:bg-gray-100 hover:text-red-600"
        >
          Stake Xyenux
        </button>
      </div>

      {status && (
        <div className="text-center mb-6">
          <p>{status}</p>
        </div>
      )}

      {xyenuxReward > 0 && (
        <div className="text-center">
          <p className="font-bold text-lg">
            Your Xyenux Reward: {xyenuxReward} Xyenux
          </p>
        </div>
      )}
    </div>
  );
};

export default Page;
