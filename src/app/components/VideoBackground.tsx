"use client";
import React, { useRef, useState, useEffect } from "react";
import { SpeakerXMarkIcon, SpeakerWaveIcon } from "@heroicons/react/24/outline";

const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Mencegah render sebelum klien
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="/vidio.mp4" type="video/mp4" />
        Browser kamu tidak mendukung video tag.
      </video>

      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 z-20 w-10 h-10 bg-gray-800 bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition duration-300"
      >
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
