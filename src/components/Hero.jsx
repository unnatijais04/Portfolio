import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-black text-white">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        👋 Hi, I'm Unnati Jaiswal
      </motion.h1>
      <motion.p
        className="text-xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <TypewriterEffect />
      </motion.p>
    </section>
  );
}

function TypewriterEffect() {
  const words = ["Web Developer", "UI/UX Enthusiast", "Full Stack Engineer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % words.length), 2000);
    return () => clearInterval(interval);
  }, []);

  return <span className="text-cyan-400">{words[index]}</span>;
}
