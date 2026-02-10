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
          Work Experience
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
    text: "In my role, I have demonstrated expertise in full-stack development and project leadership. I developed a client dashboard integrating multiple API services for MOX, optimized a Next.js landing page with multilingual support and introduced a Contentful-driven blog section. I also maintained scraper robots for data retrieval and created a real-time health-check service to monitor API status.",
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
