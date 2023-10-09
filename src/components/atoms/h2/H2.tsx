"use client";
import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";
import clsx from "clsx";

const H2 = ({ children, ref, className, ...props }: IProps) => {
  return (
    <motion.h2
      ref={ref}
      className={clsx("font-medium text-3xl", className)}
      {...props}
    >
      {children}
    </motion.h2>
  );
};

export default H2;

interface IProps extends HTMLMotionProps<"h2"> {
  children: React.ReactNode;
  ref?: React.Ref<HTMLHeadingElement>;
}
