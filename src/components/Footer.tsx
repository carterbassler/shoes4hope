import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkedinLogo } from "@phosphor-icons/react";
import React from "react";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-[#3A4045]">
      <div className="w-full px-24 md:py-8">
        <div className="flex items-center justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <ul className="flex flex-row items-center space-x-4">
            <FontAwesomeIcon icon={faFacebookF} className="fa-xl"/>
            <FontAwesomeIcon icon={faLinkedinIn} className="fa-xl"/>
            <FontAwesomeIcon icon={faInstagram} className="fa-xl"/>
          </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
