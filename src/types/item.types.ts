import { ReactNode } from "react";

export type ItemType = {
  itemTitle: ReactNode;
  subtitle: ReactNode;
  text: ReactNode;
  techList?: string[];
  image?: ImagePropsType;
};

export type ImagePropsType = {
  src: string;
  height: number;
  width: number;
  alt: string;
};
