"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import Anchor from "../anchor/Anchor";

const ContactItem = ({ item }: IProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <li
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-[100px_1fr] md:gap-x-4"
      style={{
        scale: isInView ? "1" : "0.95",
        transition: "all 0.4s ease 0.2s",
      }}
    >
      <p className="font-light">{item.site}</p>
      <Anchor
        href={item.link}
        target="_blank"
        rel="noreferrer"
        stroke="medium"
        svgClass="h-4 w-4"
      >
        {item.text}
      </Anchor>
    </li>
  );
};

export default ContactItem;

interface IProps {
  item: {
    site: string;
    text: string;
    link: string;
  };
}
