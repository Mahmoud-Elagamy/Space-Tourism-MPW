"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket } from "react-icons/fa";

const ExploreButton = () => {
  return (
    <Link href="/destination" aria-label="Explore destination">
      <motion.div
        className="relative flex size-40 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#0B0D19] to-[#0C1D39] md:size-60"
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={containerVariants}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Rocket Icon */}
        <motion.div variants={rocketVariants}>
          <FaRocket className="text-5xl text-white md:text-7xl" />
        </motion.div>

        {/* Cool Blue Glow */}
        <motion.div
          className="absolute bottom-0 h-12 w-12 rounded-full bg-blue-500 opacity-0 blur-xl filter md:h-16 md:w-16"
          variants={glowVariants}
        />

        {/* Particle Trail */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 h-2 w-2 rounded-full bg-blue-300 blur-sm filter"
            style={{
              left: `${i * 20}%`,
              opacity: 0.7 - i * 0.2,
            }}
            variants={particleVariants}
          />
        ))}

        {/* Explore Text */}
        <motion.span
          className="absolute bottom-6 text-xl uppercase tracking-widest text-white md:text-2xl"
          variants={textVariants}
        >
          Explore
        </motion.span>
      </motion.div>
    </Link>
  );
};

// Animation Variants
const containerVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const rocketVariants = {
  rest: { y: 0 },
  hover: { y: -10 },
  tap: { y: -100, transition: { duration: 0.5 } },
};

const glowVariants = {
  rest: { opacity: 0, scale: 0 },
  hover: {
    opacity: 0.5,
    scale: 1.5,
    y: 10,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  tap: { opacity: 1, scale: 2, y: 100, transition: { duration: 0.5 } },
};

const particleVariants = {
  rest: { opacity: 0, y: 0 },
  hover: {
    opacity: 1,
    y: [10, -10],
    transition: {
      yoyo: Infinity,
      duration: 0.4,
      ease: "easeInOut",
    },
  },
  tap: { opacity: 0, y: 100, transition: { duration: 0.5 } },
};

const textVariants = {
  rest: { opacity: 1 },
  hover: { opacity: 0 },
  tap: { opacity: 0 },
};

export default ExploreButton;
