"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs, Spin } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { destinations } from "@/app/destination/data";

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

function Destinations() {
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

  const tabItems = destinations.map((destination, index) => ({
    label: destination.name.toUpperCase(),
    key: index.toString(),
    children: loading ? (
      <div className="flex h-[445px] items-center justify-center">
        <Spin size="large" />
      </div>
    ) : (
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            key={index}
            className="flex flex-row-reverse flex-wrap items-center justify-center lg:justify-between"
          >
            {/* Left Side: Planet Image */}
            <motion.picture
              {...imageMotionConfig}
              className="mb-4 overflow-hidden lg:mb-0"
            >
              <source srcSet={destination.images.webp} type="image/webp" />
              <Image
                src={destination.images.png}
                alt={destination.name}
                width={445}
                height={445}
                priority
                className="animate-spin-slow"
              />
            </motion.picture>

            {/* Right Side: Tab Content */}
            <motion.div {...contentMotionConfig} className="max-w-md">
              {/* Active Planet Name */}
              <h2 className="font-headings text-6xl font-semibold uppercase tracking-wide text-white lg:text-8xl">
                {destination.name}
              </h2>

              {/* Description */}
              <p className="mt-4 font-headings text-lg text-[#D0D6F9] lg:text-xl">
                {destination.description}
              </p>

              {/* Line Separator */}
              <hr className="my-8 border-t border-gray-700" />

              {/* Distance and Travel Time */}
              <div className="destination-info flex justify-evenly gap-8 pb-10 text-xl lg:justify-normal lg:pb-0">
                <div>
                  <h3 className="items-center font-headings uppercase text-white">
                    Avg. Distance
                  </h3>
                  <p className="text-[#D0D6F9]">{destination.distance}</p>
                </div>
                <div>
                  <h3 className="font-headings uppercase text-white">
                    Est. Travel Time
                  </h3>
                  <p className="text-[#D0D6F9]">{destination.travel}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    ),
  }));

  return (
    <motion.article className="destination-content">
      {loading && activeTab === "0" ? (
        <div className="loading-indicator flex min-h-[783px] items-center justify-center md:min-h-[826px] lg:min-h-[507px]">
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

export default Destinations;
