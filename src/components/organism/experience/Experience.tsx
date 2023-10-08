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

  const x = useTransform(scrollYProgress, [0.2, 0.4], ["-100px", "0px"]);
  const x2 = useTransform(scrollYProgress, [0.3, 0.5], ["-100px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4], ["0", "1"]);
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.5], ["0", "1"]);
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0.2, 0.4],
    ["100% 100%", "0% 0%"]
  );

  const xs = [
    { x, opacity },
    { x: x2, opacity: opacity2 },
  ];

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
            style={{ x: xs[idx].x, opacity: xs[idx].opacity }}
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
    subtitle: "July 2022 - Present",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut felis in turpis consequat scelerisque ut at diam. Quisque ultrices tellus ac pellentesque pellentesque. Pellentesque sit amet ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crascongue nec est sit amet blandit.",
    techList: ["NextJS", "TypeScript", "Express", "AWS"],
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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut felis in turpis consequat scelerisque ut at diam. Quisque ultrices tellus ac pellentesque pellentesque. Pellentesque sit amet ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crascongue nec est sit amet blandit.",
  },
];
