"use client";
import { useRef } from "react";
import Container from "@/components/atoms/container/Container";
import H2 from "@/components/atoms/h2/H2";
import { ItemType } from "@/types/item.types";
import ListItem from "@/components/molecules/list-item/ListItem";
import Anchor from "@/components/atoms/anchor/Anchor";
import { useScroll, useTransform } from "framer-motion";

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
        Worked across the stack in a fintech startup, building and maintaining
        production systems used by real customers.
        <br />
        <br />
        Key contributions:
        <ul className="list-disc list-inside">
          <li>
            Designed and implemented a Direct Debit system using .NET and AWS,
            handling real payment workflows across multiple clients{" "}
          </li>
          <li>
            Built automation pipelines that reduced payroll data processing time
            from hours/days to minutes{" "}
          </li>
          <li>
            Developed internal monitoring tools to improve system reliability
            and failure detection
          </li>
        </ul>
        <br />
        This experience strengthened my focus on backend engineering,
        scalability, and building reliable systems in production environments.
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
];
