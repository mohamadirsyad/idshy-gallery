"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const images = [
  "gambar1.jpg",
  "gambar2.jpg",
  "gambar3.jpg",
  "gambar4.jpg",
  "gambar5.jpg",
  "gambar6.jpg",
  "gambar7.jpg",
  "gambar8.jpg",
  "gambar9.jpg",
  "gambar10.jpg",
  "gambar11.jpg",
  "gambar12.jpg",
];

const titles = [
  "Jogja",
  "Bandung",
  "Sukabumi",
  "Jogja",
  "Bandung",
  "Sukabumi",
  "Jogja",
  "Bandung",
  "Sukabumi",
  "Jogja",
  "Bandung",
  "Sukabumi",
];

export default function Gallery() {
  return (
    <main className="items-center bg-gray-900 text-white">
      <div
        id="gallery"
        className="flex items-center text-4xl font-bold pt-3 ml-10"
      >
        <h1>Gallery</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((src, index) => (
          // Pass `title` to `Card` as a prop
          <Card key={index} src={src} title={titles[index]} />
        ))}
      </div>
    </main>
  );
}

// Tambahkan title sebagai prop di sini
const Card = ({ src, title }: { src: string; title: string }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-60 overflow-hidden rounded-lg shadow-lg bg-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Image
        src={`/images/${src}`}
        alt={`image ${src}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        {/* Menampilkan title yang di-pass dari props */}
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
    </motion.div>
  );
};
