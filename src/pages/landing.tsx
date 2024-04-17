"use client";

import React, { useState } from "react";
import PageBackgroundImage from "@/components/PageBackgroundImage";
import NavBarBackground from "@/components/NavBarBackground";
import landing_background from "/public/landing_background.jpg";
import Image from "next/image";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import SpotlightComponent from "@/components/landing/SpotlightComponent";
import StatsComponent from "@/components/landing/StatsComponent";
import EnrollComponent from "@/components/landing/EnrollComponent";
import PartnersComponent from "@/components/landing/PartnersComponent";
import InstagramComponent from "@/components/landing/InstagramComponent";
type Props = {};

function landing({}: Props) {
  

  return (
    <div className="flex flex-col space-y-24">
      <div>
        <PageBackgroundImage
          image={landing_background}
          description="Landing Background Image"
        />
      </div>
      <div className="absolute flex-col left-28 top-32 space-y-6 flex items-start justify-center">
        <h1 className="text-7xl text-white w-2/3 font-bold">
          We Tell Stories Through Shoes
        </h1>
        <button className="bg-orange-500 text-white rounded-2xl text-xl px-5 py-3">
          Learn More
        </button>        
      </div>
      <EnrollComponent />
      <div className="flex flex-col items-center text-black px-24 py-12 space-y-8">
        <StatsComponent />
      </div>
      <div className="flex flex-col items-center text-black px-24 py-12 space-y-8">
        <InstagramComponent />
      </div>
      <div className="flex flex-col items-center text-black px-24 py-12 space-y-8">
        <PartnersComponent />
      </div>
      <div className="flex flex-col items-center text-black px-24 py-12 space-y-8">
        <h1 className="text-4xl font-bold">Spotlight</h1>
        <div className="flex flex-row space-x-12">
          <SpotlightComponent />
          <SpotlightComponent />
          <SpotlightComponent />
        </div>
      </div>
    </div>
  );
}

export default landing;
