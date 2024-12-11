import React from "react";
import { FaDiscord, FaTelegram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-1 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-center md:text-left md:mb-0">
            <h2 className="text-2xl font-bold">Xyenux</h2>
            <p className="text-sm md:mt-2">
              Your gateway to the decentralized web.
            </p>
          </div>

          <div className="flex justify-center gap-3 md:gap-6">
            <a
              href="http://discordapp.com/users/1151028385108213760"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 text-xl md:text-3xl"
            >
              <FaDiscord />
            </a>

            <a
              href="http://x.com/0xc_Ether"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 text-xl md:text-3xl"
            >
              <FaXTwitter />
            </a>

            <a
              href="https://t.me/OxcEther"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 text-xl md:text-3xl"
            >
              <FaTelegram />
            </a>

            <a
              href="https://github.com/1am-programmer/Xyenux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-500 text-xl md:text-3xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="text-center md:mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Xyenux. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
