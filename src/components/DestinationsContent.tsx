"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs, Spin } from "antd";
import { motion } from "framer-motion";
import { destinationsData } from "@/app/destination/data";
import { fadeIn } from "@/utils/motionVariants";
import { slideIn } from "@/utils/motionVariants";

function Destinations() {
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

  const tabItems = destinationsData.map((destination, index) => ({
    label: destination.name.toUpperCase(),
    key: index.toString(),
    children: loading ? (
      <div className="flex h-screen items-start justify-center md:h-[844px] md:items-center lg:h-[445px]">
        <Spin size="large" />
      </div>
    ) : (
      <>
        {!loading && (
          <motion.div
            key={index}
            className="flex flex-row-reverse flex-wrap items-center justify-center lg:justify-between"
            variants={fadeIn()}
            initial="hidden"
            animate="visible"
          >
            {/* Left Side: Planet Image */}
            <motion.picture
              variants={fadeIn(0.8, 1)}
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
            <motion.div
              variants={slideIn("left", 0, 0.6, 50)}
              className="max-w-md"
            >
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
      </>
    ),
  }));

  return (
    <motion.article className="destination-content">
      {isInitialLoad ? (
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
