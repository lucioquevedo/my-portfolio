import React, { HTMLProps, ReactNode } from "react";

const Anchor = ({
  children,
  svgClass = "w-6 h-6",
  stroke,
  ...props
}: IProps) => {
  return (
    <a {...props} className="group flex w-fit items-center">
      <span className="group-hover:overline">{children}</span>
      <span className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
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
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
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
