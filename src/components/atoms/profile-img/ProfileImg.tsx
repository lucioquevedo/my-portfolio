import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProfileImg = () => {
  return (
    <motion.figure
      className="mx-auto md:absolute md:top-0 md:right-0 my-4 rotate-[30deg] w-[140px] h-[140px] bg-[--foreground]"
      initial={{ scale: 0, rotate: 0, clipPath: "inset( -100vw 0 0 -100vw )" }}
      animate={{
        scale: 1,
        rotate: "30deg",
        clipPath: "inset( -100vw 0 0 -100vw )",
      }}
      transition={{ delay: 0.3 }}
    >
      <motion.span
        className="block rotate-[-30deg] scale-[1.75]"
        initial={{ x: "80px", y: "150%", rotate: "-30deg", scale: 1.5 }}
        animate={{ x: "0", y: "0", rotate: "-30deg", scale: 1.5 }}
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
