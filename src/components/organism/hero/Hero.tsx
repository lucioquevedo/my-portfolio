"use client";
import React, { HTMLProps } from "react";
import Container from "@/components/atoms/container/Container";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen h-fit flex flex-col justify-center gap-y-20">
      <Container>
        <motion.h1 className="self-end text-7xl md:text-9xl font-semibold overflow-hidden">
          <motion.span
            initial={{ y: "100%" }}
            animate={{ y: "0" }}
            transition={{ delay: 0.2 }}
            className="block"
          >
            Lucio Quevedo
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ backgroundPosition: "0% 100%" }}
          animate={{ backgroundPosition: "0% 0%" }}
          transition={{ delay: 0.5 }}
          className="text-3xl font-light bg-clip-text text-transparent bg-[length:200%_200%] bg-gradient-to-t from-[#1b1b1e] from-50% to-[#FFF5E0] to-50%"
        >
          Front-end developer
          <span className="animate-blinker">_</span>
        </motion.p>
      </Container>
      <Container>
        <motion.p
          className="text-sm font-light my-5 bg-[length:200%_200%]"
          initial={{ /* x: "-100px", */ opacity: 0 }}
          animate={{ /* x: "0", */ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          felis in turpis consequat scelerisque ut at diam. Quisque ultrices
          tellus ac pellentesque pellentesque. Pellentesque sit amet ullamcorper
          urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          congue nec est sit amet blandit. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Sed sed
          consequat metus. Donec posuere est ut sapien elementum bibendum. Sed
          lacinia laoreet libero ac placerat.
        </motion.p>
      </Container>
    </section>
  );
};

export default Hero;
