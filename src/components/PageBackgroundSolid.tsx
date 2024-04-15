import React from "react";
import Link from 'next/link'
import { StaticImageData } from "next/image";
import Image from "next/image";

const colorClasses = {
    black: "bg-black",
  };
  
type Props = {
    color: 'black'; // Defined color options for props
};

// TODO: figure out scrolling here
function PageBackgroundSolid({ color }: Props) {
    return (
      <div className={`${colorClasses[color]} absolute w-full h-screen z-[-1]`}></div>
    );
  }

export default PageBackgroundSolid;



