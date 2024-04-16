import React from 'react'
import PageBackgroundSolid from '@/components/PageBackgroundSolid'
import Head from 'next/head';
import { Inter } from "next/font/google";
import Image from 'next/image';
import white_logo from "/public/WhiteFullLogoTransparentCropped.png"
import instagram from "/public/instagram_logo.png"
import linkedin from "/public/linkedin_logo.png"
import facebook from "/public/facebook_logo.png"

export default function ContactPage() {
  return (
    <>
      <PageBackgroundSolid color="black" />
      <div className="flex min-h-screen text-white flex-col md:flex-row">
        <div className="w-1/2 flex justify-end items-center pr-10">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-white"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-white"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  maxLength={1000}
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 resize-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/2 flex justify-start items-center pl-10">
          <div className="w-full max-w-lg p-8 bg-opacity-80 flex flex-col items-center justify-center">
            <Image src={white_logo} alt="S4H White Logo" height={150}></Image>
            <p className="text-center mt-4">128 Madison Ln</p>
            <p className="text-center">Charlottesville, VA 22903</p>
            <a
              className="text-center hover:underline"
              href="mailto:shoes4hopeproject@gmail.com"
            >
              shoes4hopeproject@gmail.com
            </a>
            <div className="flex mt-6">
              <a href="https://www.instagram.com/shoes4hopeproject">
                <div className="pr-2">
                  <Image
                    src={instagram}
                    alt="Instagram Logo"
                    height={40}
                  ></Image>
                </div>
              </a>
              <a
                className="flex"
                href="https://www.linkedin.com/company/shoes-4-hope/"
              >
                <div className="pl-2 pr-2">
                  <Image src={linkedin} alt="LinkedIn Logo" height={40}></Image>
                </div>
              </a>
              <a
                className="flex"
                href="https://www.facebook.com/p/Shoes-4-Hope-100087884192503/"
              >
                <div className="pl-2">
                  <Image src={facebook} alt="Facebook Logo" height={40}></Image>
                </div>
              </a>
            </div>
            <p className="text-l text-center mt-6">
              Thank you for your interest in Shoes4Hope! Feel free to reach out
              via the contact form to the left and we will get back to you
              shortly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
