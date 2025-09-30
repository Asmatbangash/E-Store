"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const images = [
    "/airPorts.webp",
    "/camera.webp",
    "/gamingConsole.webp",
    "/headphones.webp",
    "/laptop.webp",
    "/smartWatch.webp",
  ];
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // fix hydration
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const t = setInterval(
      () => setCurrent((s) => (s + 1) % images.length),
      5000
    );
    return () => clearInterval(t);
  }, [images.length, mounted]);

  if (!mounted) return null; // prevent SSR mismatch

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-12 px-6 lg:px-12">
        <div className="relative w-full h-full">
          <Image
            src={images[current]}
            alt={`slide-${current}`}
            width={350}
            height={350}
            className="rounded-full w-full h-full object-cover transition-opacity duration-700"
            priority
          />
        </div>

        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight text-gray-900">
            Welcome to <span className="text-[#FF3700]">E-Store</span>
          </h1>
          <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
            Discover the best collection of trendy products at unbeatable
            prices. Shop with confidence and enjoy a seamless online shopping
            experience. Fast delivery, secure payments, and top-notch customer
            support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="px-6 py-3 rounded-full bg-[#FF3700] text-white font-semibold shadow-lg hover:bg-[#e53100] hover:scale-105 transition duration-300">
              Shop Now
            </button>
            <button className="px-6 py-3 rounded-full border border-gray-400 text-gray-800 font-semibold hover:bg-gray-100 hover:scale-105 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
