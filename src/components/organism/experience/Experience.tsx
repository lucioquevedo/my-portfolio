"use client";
import React, { useRef } from "react";
import Container from "@/components/atoms/container/Container";
import H2 from "@/components/atoms/h2/H2";
import { ItemType } from "@/types/item.types";
import ListItem from "@/components/molecules/list-item/ListItem";
import Anchor from "@/components/atoms/anchor/Anchor";
import { motion, useScroll, useTransform } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  const backgroundPosition = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    ["100% 100%", "0% 0%"],
  );

  return (
    <section ref={ref} id="experience" className="py-20">
      <Container>
        <H2
          className="bg-clip-text text-transparent bg-[length:200%_200%] bg-gradient-to-r from-[--foreground] from-50% to-[--background] to-50%"
          style={{ backgroundPosition }}
        >
          Relevant Experience
        </H2>
        {expList.map((exp, idx) => (
          <ListItem
            item={exp}
            key={idx}
            idx={idx}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </Container>
    </section>
  );
};

export default Experience;

const expList: ItemType[] = [
  {
    itemTitle: (
      <Anchor
        href="https://mox.cash"
        target="_blank"
        rel="noreferrer"
        stroke="strong"
        svgClass="h-5 w-5"
      >
        MOX
      </Anchor>
    ),
    subtitle: "July 2022 - April 2025",
    text: (
      <span>
        At MOX, I worked across the stack, building both user-facing features
        and backend systems. Over time, I took ownership of several core
        services, including a Direct Debit system built with .NET and AWS that
        handled real customer payment flows.
        <br />
        <br />I also built automation tools that reduced payroll data processing
        from hours (sometimes days) to minutes, and created internal monitoring
        tools to improve reliability.
        <br />
        <br />
        This is where I learned to think beyond features, focusing on
        scalability, infrastructure, and long-term maintainability.
      </span>
    ),
    techList: [
      "NextJS",
      "TypeScript",
      ".NET",
      "Express",
      "AWS",
      "Puppeteer",
      "FCM",
      "MongoDB",
    ],
  },
  {
    itemTitle: (
      <Anchor
        href="https://spaak.ai"
        target="_blank"
        rel="noreferrer"
        stroke="strong"
        svgClass="h-5 w-5"
      >
        Spaak
      </Anchor>
    ),
    subtitle: (
      <span>
        March 2024 <br />
        (Short-term internship)
      </span>
    ),
    text: (
      <span>
        At Spaak, I joined a small AI-focused startup team and worked on data
        extraction tools supporting political monitoring workflows.
        <br />
        <br />I built web scrapers in Node.js and experienced firsthand how fast
        product and technical decisions move in an early-stage environment. It
        reinforced my interest in working in teams where ownership and iteration
        go hand in hand.
      </span>
    ),
    techList: ["TypeScript", "Cheerio"],
  },
  {
    itemTitle: (
      <Anchor
        href="https://victoria-fernandez.vercel.app"
        target="_blank"
        rel="noreferrer"
        stroke="strong"
        svgClass="h-5 w-5"
      >
        VF Portfolio
      </Anchor>
    ),
    subtitle: "June 2022 - August 2022",
    text: "This project served as my introduction to the world of web development, where I led the development of Victoria Fernández's portfolio using Next.js in partnership with a small freelance team. It was a valuable experience that allowed me to demonstrate my commitment to learning and my ability to deliver a professional digital solution.",
    techList: ["NextJS", "SASS", "Figma"],
  },
];
