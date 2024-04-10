import React from "react";
import Link from 'next/link'

const colorClasses = {
    black: "from-black",
    blue: "from-blue", // example for addition of future colors
  };
  
type Props = {
    color: 'black' | 'blue'; // Defined color options for props
};

function NavBarBackground({color}: Props) {
  return (
    <div className={`h-32 bg-gradient-to-b ${colorClasses[color] || colorClasses.black} from-25%`}></div>
  );
}

export default NavBarBackground;
