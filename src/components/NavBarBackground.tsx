import React from "react";
import Link from 'next/link'

const colorClasses = {
    black: "from-black",
    blue: "from-blue-900", // example for addition of future colors
  };
  
type Props = {
    color: 'black' | 'blue'; // Defined color options for props
};

function NavBarBackground({color}: Props) {
  return (
    <div className={`fixed h-32 w-full bg-gradient-to-b ${colorClasses[color] || colorClasses.black} from-25% z-0`}></div>
  );
}

export default NavBarBackground;
