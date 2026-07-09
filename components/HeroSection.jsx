"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const slides = [
    { image: "/hero/foto_1.jpg" },
    { image: "/hero/foto_2.jpg" },
    { image: "/hero/foto_3.jpg" },
    { image: "/hero/foto_4.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  function goToNext() {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }

  function goToPrev() {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function goToSlide(index) {
    setCurrentIndex(index);
  }
  return (
    <section>
      <div className="h-175 w-full relative overflow-hidden group">
        <Image
          src={slides[currentIndex].image}
          alt="slide-image"
          fill
          className="object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
          {/* Tombol Panah Kiri */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Tombol Panah Kanan */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Navigasi */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  index === currentIndex ? "bg-[#C8922B] w-6" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
