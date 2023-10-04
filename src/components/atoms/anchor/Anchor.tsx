import React, { HTMLProps, ReactNode } from "react";

const Anchor = ({
  children,
  svgClass = "w-6 h-6",
  stroke,
  ...props
}: IProps) => {
  return (
    <a
      {...props}
      className="group flex w-fit items-center gap-1 text-[--decoration] hover:text-[--foreground]"
    >
      <span className="group-hover:underline">{children}</span>
      <span className="group-hover:scale-105 group-hover:rotate-90 transition-transform">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={stroke === "light" ? 1 : stroke === "strong" ? 2 : 1.5}
          stroke="currentColor"
          className={svgClass}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      </span>
    </a>
  );
};

export default Anchor;

interface IProps extends HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
  stroke?: "light" | "medium" | "strong";
  svgClass?: string;
}
