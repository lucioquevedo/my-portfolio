"use client";
import { ImagePropsType } from "@/types/item.types";
import Image from "next/image";
import classNames from "classnames";
import { motion } from "framer-motion";

const ListItemImg = ({ src, alt, height, width }: ImagePropsType) => {
  return (
    <figure className="relative">
      <motion.span
        className={`absolute top-0 left-0 bg-[--decoration] w-[150px] h-[150px] -z-10`}
        initial={{ rotate: 25 }}
        animate={{
          rotate: 50,
          bottom: Math.floor(Math.random() * 100) + 1 + "%",
          left: Math.floor(Math.random() * 100) + 1 + "%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 10,
        }}
      />
      <motion.span
        className={`absolute bottom-0 left-3/4 md:left-0 bg-[--decoration] w-[50px] h-[50px] rotate-[25deg] -z-10`}
        initial={{ rotate: 25 }}
        animate={{
          rotate: 50,
          top: Math.floor(Math.random() * 100) + 1 + "%",
          left: Math.floor(Math.random() * 100) + 1 + "%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 10,
        }}
      />
      <motion.div
        whileHover={{
          scale: 1.03,
          transition: { duration: 1.3 },
        }}
      >
        <Image
          style={{ aspectRatio: width / height }}
          className="mx-auto shadow-xl w-[85%] md:w-[80%]"
          src={src}
          height={height}
          width={width}
          alt={alt}
        />
      </motion.div>
    </figure>
  );
};

export default ListItemImg;
