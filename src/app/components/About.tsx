// components/About.tsx
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center py-16 px-8 bg-gray-950 text-white"
    >
      <h2 className="text-3xl font-bold mb-4">About</h2>
      <p className="text-lg text-center max-w-2xl">
        Web ini hanya berisikan Gallery atau foto-foto jalan-jalan aja cuyyy.
      </p>
    </section>
  );
}
