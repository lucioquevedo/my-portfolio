import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProfileImg = () => {
  return (
    <motion.figure
      className="justify-self-center md:absolute md:top-0 md:right-6 rotate-[30deg] w-[140px] h-[140px] bg-[--decoration]"
      initial={{ scale: 0, rotate: 0, clipPath: "inset( -100vw 0 0 -100vw )" }}
      animate={{
        scale: 1,
        rotate: "30deg",
        clipPath: "inset( -100vw 0 0 -100vw )",
      }}
      transition={{ delay: 0.3 }}
    >
      <motion.span
        className="block w-[230px] h-[230px]"
        initial={{ x: "80px", y: "100%", rotate: "-30deg" }}
        animate={{ x: "-20%", y: "-20%", rotate: "-30deg" }}
        transition={{ delay: 0.5 }}
      >
        <Image
          src="/profile.png"
          width={1159}
          height={1159}
          alt="profile"
          quality={100}
        />
      </motion.span>
    </motion.figure>
  );
};

export default ProfileImg;
