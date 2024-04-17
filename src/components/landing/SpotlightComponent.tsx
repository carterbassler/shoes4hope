import React from "react";
import Image from "next/image";

type Props = {};

function SpotlightComponent({}: Props) {
  return (
    <div className="flex flex-col space-y-2 w-1/3">
      <div className="">
        <Image
          src="/landing_background.jpg"
          width={500}
          height={300}
          alt="Picture of Family"
          className="flex rounded-xl"
        />
      </div>
      <h1 className="text-xl font-bold">Title of Article</h1>
      <h1>
        Brief Description of Article. Should take up a couple of sentences at
        least to give reader good idea of what article is going to be about and
        if it draws their attention to read it
      </h1>
    </div>
  );
}

export default SpotlightComponent;
