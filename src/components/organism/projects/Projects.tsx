"use client";
import React, { useRef } from "react";
import Anchor from "@/components/atoms/anchor/Anchor";
import Container from "@/components/atoms/container/Container";
import ListItem from "@/components/molecules/list-item/ListItem";
import { ItemType } from "@/types/item.types";
import H2 from "@/components/atoms/h2/H2";
import { useScroll, useTransform } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 0"],
  });

  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["100% 100%", "0% 0%"],
  );

  return (
    <section id="projects" ref={ref} className="pb-20">
      <Container>
        <H2
          className="bg-clip-text text-transparent bg-[length:200%_200%] bg-gradient-to-r from-[--foreground] from-50% to-[--background] to-50%"
          style={{ backgroundPosition }}
        >
          Projects
        </H2>
        {projectsList.map((project, idx) => (
          <ListItem
            item={project}
            key={idx}
            scrollYProgress={scrollYProgress}
            idx={idx}
            oneColumn
          />
        ))}
      </Container>
    </section>
  );
};

export default Projects;

const projectsList: ItemType[] = [
  {
    itemTitle: "Direct Debit Management System",
    subtitle: "MOX",
    text: (
      <span>
        Backend system built with .NET and AWS to manage and process payments
        across multiple clients.
        <ul className="list-disc list-inside mt-2">
          <li>Designed scalable APIs and payment workflows</li>
          <li>Handled scheduling, status tracking, and multi-tenant logic</li>
          <li>Processed thousands of payments weekly</li>
          <li>Built with serverless AWS architecture</li>
        </ul>
      </span>
    ),
    techList: [".NET", "AWS", "PostgreSQL"],
  },
  {
    itemTitle: "Data Scraping & Automation System",
    subtitle: "MOX",
    text: (
      <span>
        Automated payroll data extraction and processing pipeline.
        <ul className="list-disc list-inside mt-2">
          <li>Reduced processing time from hours/days to minutes</li>
          <li>Implemented retry logic and exponential backoff</li>
          <li>Integrated with backend services for automated workflows</li>
        </ul>
      </span>
    ),
    techList: ["Node.js", "Puppeteer"],
  },
  {
    itemTitle: "Monitoring & Observability Tool",
    subtitle: "MOX",
    text: (
      <span>
        Internal tool to track system health and detect failures. .
        <ul className="list-disc list-inside mt-2">
          <li>Improved debugging and system visibility</li>
          <li>Enabled faster issue detection</li>
          <li>Provided real-time insights into system performance</li>
        </ul>
      </span>
    ),
    techList: ["Node.js", "TypeScript", "Next.js"],
  },
  {
    itemTitle: (
      <Anchor
        href="https://triana-khaki.vercel.app/"
        target="_blank"
        rel="noreferrer"
        stroke="strong"
        svgClass="h-5 w-5"
      >
        Triana
      </Anchor>
    ),
    subtitle: "Freelance",
    text: (
      <span>
        Designed and developed a responsive landing page for a construction
        company.
        <ul className="list-disc list-inside mt-2">
          <li>Built using Next.js and Tailwind</li>
          <li>Implemented animations with Framer Motion</li>
          <li>Focused on performance and clean UI</li>
        </ul>
      </span>
    ),
    techList: ["Next JS", "Tailwind", "Framer Motion"],
    image: {
      src: "/triana.png",
      width: 1920,
      height: 1080,
      alt: "triana",
    },
  },
];
