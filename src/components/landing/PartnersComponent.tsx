import Image from "next/image";
import React from "react";

type Props = {};

function PartnersComponent({}: Props) {
  return (
    <div className="flex flex-col w-full space-y-8 items-center justify-center">
      <h1 className="text-4xl font-bold">Our Partners</h1>
      <div className="flex flex-row space-x-20 items-center justify-center bg-[#3A4045] p-16 rounded-2xl">
        <div className="w-1/12">
          <img
            src="/uva_logo.png"
            className="h-auto max-w-full"
            alt="UVA Logo"
          />
        </div>
        <div className="w-1/12">
          <img
            src="/tech_logo.png"
            className="h-auto max-w-full"
            alt="Tech Logo"
          />
        </div>
        <div className="w-1/12">
          <img
            src="/unc_logo.png"
            className="h-auto max-w-full"
            alt="UNC Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default PartnersComponent;
