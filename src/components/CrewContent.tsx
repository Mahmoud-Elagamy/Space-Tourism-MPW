"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs, Spin } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { crewData } from "@/app/crew/data";

// Motion configurations
const imageMotionConfig = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
};

const contentMotionConfig = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
  transition: { duration: 0.6 },
};

const pageMotionConfig = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.6 },
};

function CrewContent() {
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

  const tabItems = crewData.map((person, index) => ({
    label: person.name.toUpperCase().split(" ")[0],
    key: index.toString(),
    children: loading ? (
      <div className="flex min-h-[783px] items-center justify-center md:min-h-[644px] lg:min-h-[444px]">
        <Spin size="large" />
      </div>
    ) : (
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key={index}
            className="flex h-[728px] flex-row-reverse flex-wrap items-center justify-center md:h-[644px] lg:h-[444px] lg:justify-between"
          >
            {/* Left Side: Crew Image */}
            <motion.picture {...imageMotionConfig} className="mb-8 lg:mb-0">
              <source srcSet={person.images.webp} type="image/webp" />
              <Image
                src={person.images.png}
                alt={person.name}
                width={300}
                height={300}
                priority
              />
            </motion.picture>

            {/* Right Side: Tab Content */}
            <motion.div
              {...contentMotionConfig}
              className="mb-4 max-w-3xl lg:mb-0"
            >
              <h1 className="mb-2 font-headings text-2xl font-bold uppercase tracking-widest text-[#D0D6F9] lg:text-3xl">
                {person.role}
              </h1>
              <h2 className="font-headings text-4xl font-semibold uppercase tracking-wide text-white lg:text-7xl">
                {person.name}
              </h2>

              {/* Bio */}
              <p className="mt-4 font-headings text-lg text-[#D0D6F9] lg:text-xl">
                {person.bio}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    ),
  }));

  return (
    <motion.article className="crew-content">
      {loading && activeTab === "0" ? (
        <div className="loading-indicator flex min-h-[783px] items-center justify-center md:min-h-[705px] lg:min-h-[505px]">
          <Spin size="large" />
        </div>
      ) : (
        <Tabs
          defaultActiveKey="0"
          centered
          items={tabItems}
          onChange={onTabChange}
        />
      )}
    </motion.article>
  );
}

export default CrewContent;
