"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs, Spin } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { techData } from "@/app/technology/data";

// Motion configurations
const imageMotionConfig = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
};

const contentMotionConfig = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.6 },
};

function TechContent() {
  const [activeTab, setActiveTab] = useState("0");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const onTabChange = (key: string) => {
    setLoading(true);
    setActiveTab(key);
    setTimeout(() => setLoading(false), 400);
  };

  const tabItems = techData.map((tech, index) => ({
    label: index + 1,
    key: index.toString(),
    children: loading ? (
      <div className="flex min-h-[783px] items-center justify-center md:min-h-[644px] lg:min-h-[448px]">
        <Spin size="large" />
      </div>
    ) : (
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key={index}
            className="flex h-[728px] flex-row-reverse flex-wrap items-center justify-center md:h-[644px] lg:h-[448px] lg:justify-between"
          >
            {/* Left Side: Tech Image */}
            <motion.picture {...imageMotionConfig} className="mb-8 lg:mb-0">
              <source srcSet={tech.images.portrait} type="image/webp" />
              <Image
                src={tech.images.portrait}
                alt={tech.name}
                width={400}
                height={400}
                priority
                className="rounded shadow-lg"
              />
            </motion.picture>

            {/* Right Side: Tab Content */}
            <motion.div
              {...contentMotionConfig}
              className="mb-4 max-w-2xl lg:mb-0"
            >
              <h2 className="mb-2 font-headings text-3xl font-bold uppercase tracking-widest text-[#D0D6F9] lg:text-6xl">
                {tech.name}
              </h2>

              {/* Description */}
              <p className="mt-4 font-headings text-lg text-[#D0D6F9] lg:text-xl">
                {tech.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    ),
  }));

  return (
    <motion.article className="tech-content">
      {loading && activeTab === "0" ? (
        <div className="loading-indicator flex min-h-[783px] items-center justify-center md:min-h-[700px] lg:min-h-[503px]">
          <Spin size="large" />
        </div>
      ) : (
        <Tabs
          defaultActiveKey="0"
          centered
          items={tabItems}
          onChange={onTabChange}
          type="card"
        />
      )}
    </motion.article>
  );
}

export default TechContent;
