"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

type Props = {};

function NavBar({}: Props) {
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolledPastThreshold(true);
      } else {
        setScrolledPastThreshold(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 group ${
        scrolledPastThreshold ? "bg-white" : "bg-transparent"
      } hover:bg-white transition duration-300 ease-in-out z-10`}
    >
      <div className="mx-24 px-2 sm:px-0">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex items-center">
              <a href="/" className="absolute">
                <img
                  className={`relative flex h-32 w-auto transition-opacity duration-300 ${
                    scrolledPastThreshold ? "opacity-0" : "opacity-100"
                  } group-hover:opacity-0`}
                  src="/WhiteLogoTransparent.png"
                  alt=""
                />
              </a>
              <a href="/">
                <img
                  className={`relative flex h-32 w-auto transition-opacity duration-300 ${
                    scrolledPastThreshold ? "opacity-100" : "opacity-0"
                  } group-hover:opacity-100`}
                  src="/BlackLogoTransparent.png"
                  alt=""
                />
              </a>
              <div className="ml-2">
                <div className="hidden sm:block">
                  <div className="flex space-x-4">
                    <a
                      href="/families"
                      className={`${
                        scrolledPastThreshold ? "text-black" : "text-white"
                      } hover:underline transition duration-300 group-hover:text-black rounded-md px-3 py-2 text-sm font-medium`}
                      aria-current="page"
                    >
                      Families
                    </a>
                    <a
                      href="/teams"
                      className={`${
                        scrolledPastThreshold ? "text-black" : "text-white"
                      } hover:underline transition duration-300 group-hover:text-black rounded-md px-3 py-2 text-sm font-medium`}
                      aria-current="page"
                    >
                      Teams
                    </a>
                    <a
                      href="/about"
                      className={`${
                        scrolledPastThreshold ? "text-black" : "text-white"
                      } hover:underline transition duration-300 group-hover:text-black rounded-md px-3 py-2 text-sm font-medium`}
                      aria-current="page"
                    >
                      About
                    </a>
                    <a
                      href="/contact"
                      className={`${
                        scrolledPastThreshold ? "text-black" : "text-white"
                      } hover:underline transition duration-300 group-hover:text-black rounded-md px-3 py-2 text-sm font-medium`}
                      aria-current="page"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex flex-row space-x-4">
              <a href="/donate">
                <button
                  type="button"
                  className="relative rounded-xl bg-[#3A4045] px-6 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Get Involved
                </button>
              </a>
              <a href="/donate">
                <button
                  type="button"
                  className="relative rounded-xl bg-orange-500 px-6 py-2 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Donate
                </button>
              </a>
            </div>

            <div className="relative ml-3">
              {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2">Sign out</a>
                </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Families
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
