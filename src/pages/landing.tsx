import React from "react";
import PageBackgroundImage from "@/components/PageBackgroundImage";
import NavBarBackground from "@/components/NavBarBackground";
import landing_background from "/public/landing.jpg"
type Props = {};

function landing({}: Props) {
  return (
    <div>
      <NavBarBackground color="black"/>
      <PageBackgroundImage image={landing_background} description="Landing Background Image"/>
      {/* <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
        <div className="bg-orange-400 bg-opacity-75 text-white p-8 rounded-lg shadow-lg max-w-lg">
          <h1 className="text-5xl font-bold">Shoes4Hope</h1>
          <p>Test</p>
        </div>
      </div> */}
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl text-black font-bold mb-4">Welcome to Our Website!</h1>
        <p className="text-lg text-black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {/* Add more content as needed */}
      </div>
      
    </div>
  );
}

export default landing;
