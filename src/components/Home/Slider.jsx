"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Slider() {
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
      3000
    );
    return () => clearInterval(t);
  }, [images.length, mounted]);

  if (!mounted) return null; // prevent SSR mismatch
  return (
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
  );
}

export default Slider;
