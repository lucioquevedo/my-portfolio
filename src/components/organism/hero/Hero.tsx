"use client";
import React, { HTMLProps } from "react";
import Container from "@/components/atoms/container/Container";
import { motion } from "framer-motion";
import ProfileImg from "@/components/atoms/profile-img/ProfileImg";

const Hero = () => {
  return (
    <header className="min-h-screen h-fit flex flex-col justify-center gap-y-20">
      <Container>
        <motion.h1
          className="relative self-end text-7xl md:text-9xl font-semibold"
          style={{ clipPath: "inset( -100vw -100vw 0 0 )" }}
        >
          <ProfileImg />
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            transition={{ delay: 0.2 }}
            className="block"
          >
            Lucio <span className="text-[--decoration]">Quevedo</span>
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ backgroundPosition: "0% 100%" }}
          animate={{ backgroundPosition: "0% 0%" }}
          transition={{ delay: 0.6 }}
          className="text-3xl font-light bg-clip-text text-transparent bg-[length:200%_200%] bg-gradient-to-t from-[#1b1b1e] from-50% to-[#FFF5E0] to-50%"
        >
          Front-end developer
          <motion.span
            className="animate-blinker text-[--decoration]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            _
          </motion.span>
        </motion.p>
      </Container>
      <Container>
        <motion.p
          className="text-lg font-light my-5 bg-[length:200%_200%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          Hello, I&apos;m Lucio, a 20-year-old front-end developer with a
          passion for crafting seamless user experiences. I&apos;ve been
          immersed in the world of web development for the past ~1.5 years,
          honing my skills in a dynamic fintech startup environment. While my
          primary focus is front-end development, I also possess a strong
          foundation in back-end development.
        </motion.p>
      </Container>
    </header>
  );
};

export default Hero;
