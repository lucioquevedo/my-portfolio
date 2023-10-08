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

  const x = useTransform(scrollYProgress, [0.1, 0.3], ["-100px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], ["0", "1"]);
  const backgroundPosition = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["100% 100%", "0% 0%"]
  );

  const xs = [{ x, opacity }];

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
            style={{ x: xs[idx].x, opacity: xs[idx].opacity }}
          />
        ))}
      </Container>
    </section>
  );
};

export default Projects;

const projectsList: ItemType[] = [
  {
    itemTitle: (
      <Anchor
        href="https://red-book.vercel.app"
        target="_blank"
        rel="noreferrer"
        stroke="strong"
        svgClass="h-5 w-5"
      >
        Red Book
      </Anchor>
    ),
    subtitle: "Coder House - 2022",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut felis in turpis consequat scelerisque ut at diam. Quisque ultrices tellus ac pellentesque pellentesque. Pellentesque sit amet ullamcorper urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Crascongue nec est sit amet blandit.",
    image: {
      src: "/rb-main.png",
      width: 1920,
      height: 1080,
      alt: "RedBook Main Page",
    },
  },
];
