import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="about-section bg-black py-5 flex flex-col justify-center gap-8 md:px-10 px-5"
    >
      <h1 className="text-2xl md:text-3xl text-center py-5 font-bold about">
        About Us
      </h1>

      <p className="text-justify">
        Xyenux is a cutting-edge platform created to drive the next generation
        of Web3 technologies. By prioritizing decentralization, blockchain, and
        user empowerment, Xyenux is building a more transparent and secure
        digital future. Unlike traditional systems controlled by centralized
        entities, Xyenux puts the power back into the hands of the users. This
        approach fosters greater control, privacy, and freedom, enabling
        individuals to have a more active role in shaping their digital
        experiences. Our goal is to revolutionize the digital space by providing
        innovative solutions that promote openness, transparency, and trust. We
        aim to build a decentralized ecosystem where users can interact freely,
        securely, and with full control over their data and assets. Our
        objectives include expanding the adoption of Web3 technologies,
        increasing user participation in decentralized networks, and creating a
        fairer, more inclusive digital economy. Xyenux is at the forefront of
        the Web3 revolution, offering solutions that challenge the status quo
        and pave the way for a more open and equitable digital world.
      </p>

      <section>
        <h2 className="text-2xl font-bold py-5">Why Xyenux?</h2>
        <p>
          Xyenux is redefining the internet by prioritizing privacy,
          transparency, and security through decentralized protocols, empowering
          developers and users to thrive within the Web3 ecosystem, free from
          centralized control.
        </p>

        <h2 className="text-2xl font-bold py-5">Key Features</h2>
        <ul>
          <li>
            <strong>Web3 Integration:</strong> Designed for decentralized
            applications (dApps) and blockchain protocols.
          </li>
          <li>
            <strong>Blockchain Security:</strong> Secure, transparent
            transactions via a decentralized ledger.
          </li>
          <li>
            <strong>Smart Contracts:</strong> Automates trustless transactions
            securely.
          </li>
          <li>
            <strong>NFTs & Tokenization:</strong> Create, mint, and trade
            digital assets and NFTs.
          </li>
        </ul>

        <h2 className="text-2xl font-bold py-5">Core Values</h2>
        <ul>
          <li>
            <strong>Decentralization:</strong> Users maintain complete control
            over their data and assets.
          </li>
          <li>
            <strong>Security:</strong> Cryptographically secure transactions and
            interactions.
          </li>
          <li>
            <strong>Transparency:</strong> Full visibility on actions through
            the blockchain.
          </li>
          <li>
            <strong>Innovation:</strong> Continuously pushing the boundaries of
            decentralized technology.
          </li>
        </ul>

        <h2 className="text-2xl font-bold py-5">Use Cases</h2>
        <ul>
          <li>
            <strong>NFTs:</strong> Artists and creators can tokenize and sell
            their work.
          </li>
          <li>
            <strong>Swap & Stake:</strong> Swap assets and stake tokens
            securely.
          </li>
          <li>
            <strong>Privacy:</strong> Secure and private management of your
            digital identity and personal data.
          </li>
        </ul>

        <h2 className="text-2xl font-bold py-5">Architecture</h2>
        <ul>
          <li>
            <strong>Decentralized Ledger:</strong> Public blockchain ensures
            secure transactions.
          </li>
          <li>
            <strong>Smart Contracts:</strong> Automate asset transfers and
            governance actions.
          </li>
          <li>
            <strong>User Wallets:</strong> Secure wallet integration for
            managing digital assets.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
