"use client";
import React from "react";
import Image from "next/image";

const MainImage = ({ imagURL, imageSize, imageName, border }) => {
  return (
    <>
      <Image
        src={`${imagURL}`}
        width={imageSize}
        height={500}
        alt={`${imageName}`}
        loading="lazy"
        className={`${border}`}
      />
    </>
  );
};

export default MainImage;
