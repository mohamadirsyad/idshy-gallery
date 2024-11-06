// components/Contact.tsx
import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center py-16 px-8 bg-gray-950 text-white"
    >
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg text-center max-w-2xl mb-6">
        Free kalo mau ngepoin !!!
      </p>

      {/* Kontak melalui icon */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <FaEnvelope className="text-xl" />
          <a
            href="mailto:mohamadirsyad8@gmail.com"
            className="text-lg hover:text-blue-400 transition duration-300"
          >
            mohamadirsyad8@gmail.com
          </a>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <FaPhone className="text-xl" />
          <a
            href="tel:+1234567890"
            className="text-lg hover:text-blue-400 transition duration-300"
          >
            0895-4055-66969
          </a>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <FaGithub className="text-xl" />
          <a
            href="https://github.com/mohamadirsyad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-400 transition duration-300"
          >
            mohamadirsyad
          </a>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <FaInstagram className="text-xl" />
          <a
            href="https://instagram.com/irsyaddd25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg hover:text-blue-400 transition duration-300"
          >
            irsyaddd25
          </a>
        </div>
      </div>
    </section>
  );
}
