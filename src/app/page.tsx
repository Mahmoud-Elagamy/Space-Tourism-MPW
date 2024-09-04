"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spin } from "antd";
import ExploreButton from "@/components/ExploreButton";
import { fadeIn } from "@/utils/motionVariants";
import { slideIn } from "@/utils/motionVariants";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className={`main bg-home-mobile md:bg-home-tablet lg:bg-home-desktop`}
    >
      <AnimatePresence>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <motion.div
            className="container flex flex-wrap items-center justify-center overflow-hidden lg:justify-between"
            variants={fadeIn()}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="max-w-xl text-center uppercase text-[#D0D6F9] lg:text-start"
              variants={slideIn("left", 0.3)}
            >
              <p className="mb-4 md:text-2xl">So, you want to travel to</p>
              <h1 className="mb-4 font-headings text-4xl text-slate-50 md:text-9xl">
                Space
              </h1>
              <p className="mb-8 font-headings text-lg normal-case md:text-xl lg:mb-0">
                Let&apos;s face it; if you want to go to space, you might as
                well genuinely go to outer space and not hover kind of on the
                edge of it. Well sit back, and relax because we&apos;ll give you
                a truly out of this world experience!
              </p>
            </motion.div>
            <motion.div variants={slideIn("right", 0.6)}>
              <ExploreButton />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
