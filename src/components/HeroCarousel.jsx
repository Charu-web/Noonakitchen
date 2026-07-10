import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Noonaimg from "../assets/noona.png"

const images = [
  Noonaimg,
  "/bowl1.png",
  "/bowl2.png",
  "/bowl3.png",
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[450px] h-[450px] flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt=""
          initial={{
            y: -250,
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            y: 250,
            opacity: 0,
            scale: 0.8,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className="absolute w-[320px] object-contain"
        />
      </AnimatePresence>
    </div>
  );
}