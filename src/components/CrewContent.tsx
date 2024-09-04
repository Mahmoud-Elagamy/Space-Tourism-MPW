"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs, Spin } from "antd";
import { motion } from "framer-motion";
import { crewData } from "@/app/crew/data";
import { fadeIn } from "@/utils/motionVariants";
import { slideIn } from "@/utils/motionVariants";

function CrewContent() {
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setIsInitialLoad(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const onTabChange = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 400);
  };

  const tabItems = crewData.map((person, index) => ({
    label: person.name.toUpperCase().split(" ")[0],
    key: index.toString(),
    children: loading ? (
      <div className="flex min-h-[768px] items-center justify-center md:min-h-[718px] lg:min-h-[444px]">
        <Spin size="large" />
      </div>
    ) : (
      <>
        {!loading && (
          <motion.div
            key={index}
            className="flex h-[769px] flex-row-reverse flex-wrap items-center justify-center md:h-[718px] lg:h-[444px] lg:justify-between"
            variants={fadeIn()}
            initial="hidden"
            animate="visible"
          >
            {/* Left Side: Crew Image */}
            <motion.picture variants={fadeIn(0.8, 1)} className="mb-8 lg:mb-0">
              <source srcSet={person.images.webp} type="image/webp" />
              <Image
                src={person.images.png}
                alt={person.name}
                width={350}
                height={350}
                priority
              />
            </motion.picture>

            {/* Right Side: Tab Content */}
            <motion.div
              variants={slideIn("left", 0, 0.6, 50)}
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
      </>
    ),
  }));

  return (
    <motion.article className="crew-content">
      {isInitialLoad ? (
        <div className="loading-indicator flex min-h-[783px] items-start justify-center md:min-h-[780px] md:items-center lg:min-h-[505px]">
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
