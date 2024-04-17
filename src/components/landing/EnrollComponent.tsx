import React from "react";
import Image from "next/image";

type Props = {};

function EnrollComponent({}: Props) {
  return (
    <div className="flex flex-col text-black justify-center px-24 py-12 space-y-12">
      <div className="flex flex-row p-5 space-x-12 rounded-xl">
        <div className="w-2/3">
          <Image
            src="/child.jpg"
            width={400}
            height={400}
            alt="Picture of Family"
            className="flex rounded-xl"
          />
        </div>
        <div className="flex flex-col space-y-8">
          <h1 className="text-lg text-orange-500">Enroll Your Child</h1>
          <h1 className="text-3xl font-bold">Families</h1>
          <h1>
            One to two sentence summary about why parents should join for child.
            One to two sentence summary about why parents should join for child.
            One to two sentence summary about why parents should join for child.
          </h1>
          <button className="rounded-xl w-48 bg-orange-500 px-6 py-2 text-white">
            Apply as a Family
          </button>
        </div>
      </div>
      <div className="flex flex-row p-5 space-x-12 rounded-xl">
        <div className="flex flex-col space-y-8">
          <h1 className="text-lg text-orange-500">Enroll Your Child</h1>
          <h1 className="text-3xl font-bold">Families</h1>
          <h1>
            One to two sentence summary about why parents should join for child.
            One to two sentence summary about why parents should join for child.
            One to two sentence summary about why parents should join for child.
          </h1>
          <button className="rounded-xl w-48 bg-orange-500 px-6 py-2 text-white">
            Apply as a Family
          </button>
        </div>
        <div className="w-2/3">
          <Image
            src="/child.jpg"
            width={400}
            height={400}
            alt="Picture of Family"
            className="flex rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default EnrollComponent;
