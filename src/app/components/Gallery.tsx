"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Head from "next/head"; // Import Head untuk preload gambar

const images = [
  "jogja.jpg",
  "bandung.jpg",
  "gede.jpg",
  "cirimpak.jpg",
  "citaCita.jpg",
  "aeon.jpg",
  "museummacan.jpg",
];

const detailImages = {
  jogja: ["jogja1.jpg", "jogja2.jpg", "jogja3.jpg", "jogja4.jpg"],
  bandung: ["bandung1.jpg", "bandung2.jpg"],
  gede: ["gede1.jpg", "gede2.jpg"],
  cirimpak: ["cirimpak1.jpg", "cirimpak2.jpg"],
  citacita: ["citacita1.jpg", "citacita2.jpg"],
  aeon: ["aeon1.jpg", "aeon2.jpg", "aeon3.jpg"],
  museummacan: ["museummacan1.jpg", "museummacan2.jpg", "museummacan3.jpg"],
};

type Title = keyof typeof detailImages; // Mendefinisikan tipe yang valid hanya untuk kunci objek detailImages

const titles = [
  "Jogja",
  "Bandung",
  "Gede",
  "Cirimpak",
  "citacita",
  "aeon",
  "Museummacan",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [detailImagesList, setDetailImagesList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (src: string, title: string) => {
    const titleLowerCase = title.toLowerCase() as Title; // Pastikan title valid
    setSelectedImage(src);
    setDetailImagesList(detailImages[titleLowerCase] || []);
    setCurrentIndex(0); // reset ke awal saat gambar baru dipilih
  };

  const closeDetailView = () => {
    setSelectedImage(null);
  };

  const handleNext = () => {
    if (currentIndex < detailImagesList.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <Head>
        {/* Preload gambar detail untuk efisiensi loading */}
        {detailImagesList.map((image) => (
          <link
            key={image}
            rel="preload"
            href={`/images/${image}`}
            as="image"
          />
        ))}
      </Head>
      <main className="items-center bg-fuchsia text-white">
        <div
          id="gallery"
          className="flex items-center text-4xl font-bold pt-3 ml-10"
        >
          <h1>Gallery</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {images.map((src, index) => (
            <Card
              key={index}
              src={src}
              title={titles[index]}
              onClick={handleImageClick}
            />
          ))}
        </div>

        {/* Menampilkan gambar detail jika ada yang dipilih */}
        {selectedImage && (
          <ImageDetail
            src={detailImagesList[currentIndex]}
            onClose={closeDetailView}
            onNext={handleNext}
            onPrev={handlePrev}
            showPrev={currentIndex > 0}
            showNext={currentIndex < detailImagesList.length - 1}
          />
        )}
      </main>
    </>
  );
}

const Card = ({
  src,
  title,
  onClick,
}: {
  src: string;
  title: string;
  onClick: (src: string, title: string) => void;
}) => {
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
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-60 overflow-hidden rounded-lg shadow-lg bg-gray-800 cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={() => onClick(src, title)}
    >
      <Image
        src={`/images/${src}`}
        alt={`image ${src}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover"
        priority={true}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
    </motion.div>
  );
};

const ImageDetail = ({
  src,
  onClose,
  onNext,
  onPrev,
  showNext,
  showPrev,
}: {
  src: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  showNext: boolean;
  showPrev: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 backdrop-blur-md"
    >
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={onClose}
      >
        ✕
      </button>
      <div className="relative max-w-3xl w-full p-4">
        <Image
          src={`/images/${src}`}
          alt={`Detail ${src}`}
          width={800}
          height={600}
          className="object-cover rounded-lg"
          priority={true} // Gambar detail diberi priority
          style={{ maxWidth: "100%", maxHeight: "80vh", height: "auto" }}
        />
        {/* Tombol navigasi */}
        {showPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-900 p-3 rounded-full opacity-70 hover:opacity-100 transition"
          >
            ‹
          </button>
        )}
        {showNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-gray-900 p-3 rounded-full opacity-70 hover:opacity-100 transition"
          >
            ›
          </button>
        )}
      </div>
    </motion.div>
  );
};
