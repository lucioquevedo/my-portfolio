"use client";
import React, { HTMLProps } from "react";
import Container from "@/components/atoms/container/Container";
import { motion } from "framer-motion";
import ProfileImg from "@/components/atoms/profile-img/ProfileImg";

const Hero = () => {
  return (
    <header className="min-h-[calc(100vh - 46px)] h-fit flex flex-col justify-center gap-y-20">
      <Container>
        <motion.h1
          className="relative max-w-full grid pt-[30px] self-end text-7xl md:mt-[30px] md:text-9xl font-semibold"
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
          className="text-3xl font-light bg-clip-text text-transparent bg-[length:200%_200%] bg-gradient-to-t from-[--background] from-50% to-[--foreground] to-50%"
        >
          Full-stack developer
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
          Hello, I&apos;m Lucio, a{" "}
          {calculateAge(new Date("2002-10-18").getTime())}-year-old full-stack
          developer with a passion for crafting seamless user experiences.
          I&apos;ve been immersed in the world of web development since 2021,
          honing my skills in a dynamic fintech startup environment. While my
          primary focus is front-end development, I also possess a strong
          foundation in back-end development.
        </motion.p>
      </Container>
    </header>
  );
};

const calculateAge = (birthday: number) => {
  var ageDifMs = Date.now() - birthday;
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export default Hero;
