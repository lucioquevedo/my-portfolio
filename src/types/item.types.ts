import { ReactNode } from "react";

export type ItemType = {
  itemTitle: ReactNode;
  subtitle: ReactNode;
  text: ReactNode;
  techList?: string[];
};
