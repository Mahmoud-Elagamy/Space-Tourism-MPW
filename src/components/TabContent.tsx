import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/utils/motionVariants";

// Types
export type TabContentProps = {
  imageSrc: string;
  imageAlt: string;
  imageWebpSrc?: string;
  imageWidth: number;
  imageHeight: number;
  name: string;
  description: string;
  role?: string;
  lineSeparator?: boolean;
  largeText?: boolean;
  animateImage?: boolean;
  styleImage?: boolean;
  explicitHeight?: boolean;
  additionalInfo?: { label: string; value: string }[];
};

const TabContent = ({
  imageSrc,
  imageAlt,
  imageWebpSrc,
  imageWidth,
  imageHeight,
  name,
  description,
  role,
  lineSeparator,
  largeText,
  animateImage,
  styleImage,
  explicitHeight,
  additionalInfo,
}: TabContentProps) => {
  return (
    <motion.div
      className="flex flex-row-reverse flex-wrap items-center justify-center md:h-[700px] lg:h-auto lg:justify-between"
      variants={fadeIn()}
      initial="hidden"
      animate="visible"
    >
      {/* Left Side: Planet Image */}
      <motion.picture
        variants={fadeIn(0.8, 1)}
        className="mb-8 overflow-hidden lg:mb-0"
      >
        {imageWebpSrc && <source srcSet={imageWebpSrc} type="image/webp" />}
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          priority
          className={`${animateImage ? "animate-spin-slow" : ""} $ w-64 md:w-72 ${explicitHeight ? "lg:h-[340px]" : ""} ${styleImage ? "rounded-md shadow-md" : ""}`}
        />
      </motion.picture>

      {/* Right Side: Tab Content */}
      <motion.div
        variants={slideIn("left", 0, 0.6, 50)}
        className={`${largeText ? "max-w-xl" : "max-w-md"}`}
      >
        {/* Optional Role */}
        {role && (
          <h1 className="mb-2 font-headings text-2xl font-bold uppercase tracking-widest text-[#D0D6F9] lg:text-3xl">
            {role}
          </h1>
        )}

        {/* Name */}
        <h2 className="font-headings text-4xl font-semibold uppercase tracking-wide text-white lg:text-7xl">
          {name}
        </h2>

        {/* Description */}
        <p className="mt-4 font-headings text-lg text-[#D0D6F9] lg:text-xl">
          {description}
        </p>

        {/* Optional Line Separator */}
        {lineSeparator && <hr className="my-8 border-t border-gray-700" />}

        {/* Optional Additional Info */}
        {additionalInfo && (
          <div className="flex justify-evenly gap-8 text-xl lg:justify-normal">
            {additionalInfo.map((info, index) => (
              <div key={index}>
                <h3 className="items-center font-headings uppercase text-white">
                  {info.label}
                </h3>
                <p className="text-[#D0D6F9]">{info.value}</p>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};
export default TabContent;
