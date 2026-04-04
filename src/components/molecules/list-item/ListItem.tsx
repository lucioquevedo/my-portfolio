"use client";
import { useEffect } from "react";
import clsx from "clsx";
import { ItemType } from "@/types/item.types";
import {
  HTMLMotionProps,
  motion,
  MotionValue,
  useTransform,
} from "framer-motion";
import ListItemImg from "@/components/atoms/list-item-img/ListItemImg";

const ListItem = ({
  item: { itemTitle, subtitle, text, techList, image },
  className,
  scrollYProgress,
  oneColumn,
  idx,
  ...props
}: IProps) => {
  const magnifier = idx * 0.1;

  const x = useTransform(
    scrollYProgress,
    [0.2 + magnifier, 0.3 + magnifier],
    ["-100px", "0px"],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0.2 + magnifier, 0.3 + magnifier],
    ["0", "1"],
  );

  useEffect(() => {}, [x]);

  return (
    <motion.div
      className={clsx(
        className,
        "grid grid-cols-1 my-7 md:grid-cols-[190px_1fr] gap-y-3 md:gap-x-4",
        {
          "md:grid-cols-1": oneColumn,
        },
      )}
      {...props}
      style={{ x, opacity }}
    >
      <span
        className={clsx("grid grid-cols-1 h-fit", {
          "md:justify-items-end md:text-right": !oneColumn,
        })}
      >
        <h3 className="text-xl font-medium">{itemTitle}</h3>
        <div className="text-sm font-light">{subtitle}</div>
      </span>
      <span>
        <div className="text-sm font-light">{text}</div>
        {techList && (
          <ul className="flex flex-wrap gap-x-2 mt-3 text-sm">
            {techList.map((tech, idx) => (
              <li key={tech + idx}>{tech}</li>
            ))}
          </ul>
        )}
      </span>
      {image && (
        <span className="pt-10 justify-self-center">
          <ListItemImg {...image} />
        </span>
      )}
    </motion.div>
  );
};

export default ListItem;

interface IProps extends HTMLMotionProps<"div"> {
  item: ItemType;
  idx: number;
  scrollYProgress: MotionValue<number>;
  oneColumn?: boolean;
}
