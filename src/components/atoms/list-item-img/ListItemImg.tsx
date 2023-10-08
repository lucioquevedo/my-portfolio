import React from "react";
import { ImagePropsType } from "@/types/item.types";
import Image from "next/image";

const ListItemImg = ({ src, alt, height, width }: ImagePropsType) => {
  return (
    <figure className="relative">
      <span
        className={`absolute top-0 left-0 bg-[--decoration] w-[150px] h-[150px] rotate-[-25deg] -z-10`}
      />
      <span
        className={`absolute bottom-0 left-3/4 md:left-0 bg-[--decoration] w-[50px] h-[50px] rotate-[25deg] -z-10`}
      />
      <Image
        style={{ aspectRatio: width / height }}
        className="mx-auto shadow-xl w-[85%] md:w-[80%]"
        src={src}
        height={height}
        width={width}
        alt={alt}
      />
    </figure>
  );
};

export default ListItemImg;
