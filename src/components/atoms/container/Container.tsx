"use client";
import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

const Container = ({ children, className, ...props }: IProps) => {
  return (
    <motion.div
      {...props}
      className={clsx(
        "container mx-auto 2xl:mx-auto px-4 md:px-0 max-w-screen-sm",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Container;

interface IProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}
