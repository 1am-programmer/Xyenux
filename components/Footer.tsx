import React from "react";
import { FaDiscord, FaTelegram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-5">
        {/* Footer Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          {/* Brand Info Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Xyenux</h2>
            <p className="text-sm mt-2">
              Your gateway to the decentralized web.
            </p>
          </div>

          {/* Social Links Section */}
          <div className="flex justify-center gap-4">
            {/* Discord Link */}
            <a
              href="http://discordapp.com/users/1151028385108213760"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-2xl"
            >
              <FaDiscord />
            </a>

            {/* XTwitter Link */}
            <a
              href="http://x.com/0xc_Ether"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 text-2xl"
            >
              <FaXTwitter />
            </a>

            {/* Telegram Link */}
            <a
              href="https://t.me/OxcEther"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 text-2xl"
            >
              <FaTelegram />
            </a>

            {/* GitHub Link */}
            <a
              href="https://github.com/1am-programmer/Xyenux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 text-2xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Xyenux. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
