"use client";

import React, { useState } from "react";
import PageBackgroundImage from "@/components/PageBackgroundImage";
import NavBarBackground from "@/components/NavBarBackground";
import landing_background from "/public/landing_background.jpg";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
type Props = {};

function landing({}: Props) {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="flex flex-col space-y-24">
      <div>
        <NavBarBackground color="black" />
        <PageBackgroundImage
          image={landing_background}
          description="Landing Background Image"
        />
      </div>
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-orange-400 bg-opacity-50 text-white p-8 rounded-lg shadow-lg max-w-lg">
          <h1 className="text-3xl font-bold">Hello, World!</h1>
          <p>This is a rounded, translucent orange text box on top of a background image.</p>
        </div>
      </div> */}
      <div className="flex flex-col bg-[#102549] px-12 py-12 space-y-12">
        <div className="flex flex-row space-x-12">
          <div className="">
            <Image
              src="/landing_background.jpg"
              width={500}
              height={500}
              alt="Picture of Family"
              className="flex rounded-xl"
            />
          </div>
          <div className="flex flex-col space-y-8">
            <h1 className="text-lg text-orange-500">Enroll Your Child</h1>
            <h1 className="text-3xl font-bold">Families</h1>
            <h1>
              One to two sentence summary about why parents should join for
              child
            </h1>
            <button className="rounded-xl bg-orange-500 px-6 py-2 text-white">
              Apply as a Family
            </button>
          </div>
        </div>
        <div className="flex flex-row space-x-12 justify-end">
          <div className="flex flex-col space-y-8">
            <h1 className="text-lg text-orange-500">Enroll Your Child</h1>
            <h1 className="text-3xl font-bold">Families</h1>
            <h1>
              One to two sentence summary about why parents should join for
              child
            </h1>
            <button className="rounded-xl bg-orange-500 px-6 py-2 text-white">
              Apply as a Family
            </button>
          </div>
          <div className="">
            <Image
              src="/landing_background.jpg"
              width={500}
              height={500}
              alt="Picture of Family"
              className="flex rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center text-black px-12 py-12 space-y-12">
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-7xl font-bold">
                {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}
              </h1>
              <h1>All-Time Matches</h1>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-7xl font-bold">1,000</h1>
              <h1>All-Time Student Athletes</h1>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-7xl font-bold">25</h1>
              <h1>All-Time Campuses</h1>
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-7xl font-bold">10</h1>
              <h1>All-Time States</h1>
            </div>
          </div>
        </ScrollTrigger>
      </div>
      <div className="flex flex-col items-center text-black px-12 py-12 space-y-12">
        <h1 className="text-4xl font-bold">Spotlight</h1>
        <div className="flex flex-col">
          <div className="">
            <Image
              src="/landing_background.jpg"
              width={300}
              height={300}
              alt="Picture of Family"
              className="flex rounded-xl"
            />
          </div>
          <h1 className="text-xl font-bold">Title of Article</h1>
          <h1>
            Brief Description of Article. Should take up a couple of sentences
            at least to give reader good idea of what article is going to be
            about and if it draws their attention to read it
          </h1>
          <h1>Read More</h1>
        </div>
      </div>
    </div>
  );
}

export default landing;
