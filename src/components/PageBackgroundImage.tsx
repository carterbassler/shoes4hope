import React from "react";
import Link from 'next/link'
import { StaticImageData } from "next/image";
import Image from "next/image";

type Props = {
    image: StaticImageData
    description: string
};

// TODO: figure out scrolling here
function PageBackgroundImage({ image, description }: Props) {
    return (
      <div className="relative w-full h-screen z-[-1]">
        <Image
          src={image}
          alt={description}
          style={{
            objectFit: 'cover',
          }}
          fill
          priority
        />
      </div>
    );
  }

export default PageBackgroundImage;



