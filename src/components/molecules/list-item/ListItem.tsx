"use client";
import React from "react";
import clsx from "clsx";
import { ItemType } from "@/types/item.types";
import { HTMLMotionProps, motion } from "framer-motion";

const ListItem = ({
  item: { itemTitle, subtitle, text, techList },
  className,
  ...props
}: IProps) => {
  return (
    <motion.div
      className={clsx(
        className,
        "grid grid-cols-1 my-7 md:grid-cols-[180px_1fr] gap-y-3 md:gap-x-4"
      )}
      {...props}
    >
      <span className="grid grid-cols-1 h-fit md:justify-items-end md:text-right">
        <h3 className="text-xl font-medium">{itemTitle}</h3>
        <p className="text-sm font-light">{subtitle}</p>
      </span>
      <span>
        <p className="text-sm font-light">{text}</p>
        {techList && (
          <ul className="flex wrap gap-x-2 mt-3 text-sm">
            {techList.map((tech, idx) => (
              <li key={tech + idx}>{tech}</li>
            ))}
          </ul>
        )}
      </span>
    </motion.div>
  );
};

export default ListItem;

interface IProps extends HTMLMotionProps<"div"> {
  item: ItemType;
}
