"use client";
import React, { useRef, useState, useEffect } from "react";
import { SpeakerXMarkIcon, SpeakerWaveIcon } from "@heroicons/react/24/outline";

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null); // Referensi untuk elemen video
  const [isMuted, setIsMuted] = useState(true); // State untuk mute/unmute
  const [isClient, setIsClient] = useState(false); // State untuk mengecek apakah sudah client-side

  // Fungsi untuk toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  // Cek apakah sudah client-side untuk mencegah masalah SSR
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Jika belum di-render di client, jangan render apapun
  }

  return (
    <div className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted} // Menyesuaikan dengan state isMuted
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
      >
        <source src="/vidio.mp4" type="video/mp4" />
        Browser kamu tidak mendukung video tag.
      </video>

      {/* Tombol untuk mute/unmute di pojok kanan bawah */}
      <button
        onClick={toggleMute}
        className="absolute bottom-14 right-4 z-20 w-12 h-12 bg-gray-800 bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-300"
      >
        {/* Ikon speaker berganti sesuai state isMuted */}
        {isMuted ? (
          <SpeakerXMarkIcon className="h-6 w-6" />
        ) : (
          <SpeakerWaveIcon className="h-6 w-6" />
        )}
      </button>
    </div>
  );
};

export default VideoBackground;
