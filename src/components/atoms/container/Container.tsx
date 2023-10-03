"use client";
import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";

const Container = ({ children, className, ...props }: IProps) => {
  return (
    <motion.div
      {...props}
      className={clsx(
        "container mx-auto md:ml-28 2xl:mx-auto px-4 max-w-screen-sm",
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
