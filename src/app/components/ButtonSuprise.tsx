"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ButtonSurprise = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSurpriseText, setShowSurpriseText] = useState(false);

  const handleButtonClick = () => {
    setShowConfetti(true);
    setShowSurpriseText(true); // Tampilkan teks Surprise
    setTimeout(() => setShowConfetti(false), 3000); // Hanya confetti yang reset
  };

  return (
    <div className="relative flex flex-col items-center py-16 px-8 bg-gray-950 text-white overflow-hidden h-screen">
      {/* Button dan Text */}
      {!showSurpriseText && (
        <div className="flex flex-col mt-40 items-center">
          <button
            onClick={handleButtonClick}
            className="   bg-orange-300 px-10 py-4 rounded-lg text-black font-semibold shadow-lg hover:scale-105 transition-transform"
          >
            Click
          </button>
          <h1 className="mt-4">👆</h1>
        </div>
      )}

      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          {Array.from({ length: 30 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-3 h-3 rounded-full"
              style={{
                backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`, // Warna acak
              }}
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              animate={{
                x: Math.random() * 600 - 300, // Acak horizontal
                y: Math.random() * 600 - 300, // Acak vertical
                opacity: 0,
              }}
              transition={{
                duration: 1.5,
                delay: Math.random() * 0.5, // Acak delay
              }}
            />
          ))}
        </div>
      )}

      {/* Teks Surprise */}
      {showSurpriseText && (
        <div className="flex flex-col justify-center items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 0.8, 1] }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-4 md:text-4xl sm:text-2xl text-xl  font-bold text-orange-300"
          >
            🎉 Happy Anniversary 2th ! 🎉
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Mulai dari transparan dan posisi di bawah
            animate={{ opacity: 1, y: 0 }} // Berakhir dengan tampilan penuh dan posisi normal
            transition={{ type: "spring", stiffness: 300 }} // Durasi dan efek transisi
            whileHover={{ scale: 1.05 }} // Efek zoom saat hover
            className="max-w-sm mt-10 h-72 rounded-xl overflow-hidden shadow-lg bg-gray-200 text-gray-700 font-bold p-4"
          >
            <div className="mt-4">
              <h1 className="flex items-center justify-center">
                Aseeekkkkk udah jalan 2 tahun ya noy
              </h1>
              <h3 className="flex justify-center items-center">
                katanya pengen di bikinin website gallery gitu ya, ini udah
                dibikinin nanti tambahin lagi ya foto jalan-jalannya.
              </h3>
              <h3 className="flex justify-center items-center mt-4">
                Semoga Langgeng terus yaa!! ILY Hany❤️
              </h3>
              <h3 className="flex justify-center items-center">
                Every second, every minute, every hour, every day, and anytime.
              </h3>
            </div>
            <p className="font-extralight text-sm mt-12 flex justify-center">
              ~~Irsyad Siganteng~~
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ButtonSurprise;

// md:hover:scale-120 hover:scale-110 transition-all duration-300
