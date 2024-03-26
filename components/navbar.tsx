"use client";
import React, { useState } from "react";
import Link from "next/link";

type Props = {};

const MobileButton = ({ onClick }: { onClick: any }) => {
  return (
    <button
      onClick={onClick}
      className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      {/* Icon */}
      <svg
        className="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  );
};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white drop-shadow-md	 z-20 sticky top-0">
      <div className="w-full px-8 lg:px-24 flex flex-wrap items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center font-manstein text-2xl font-semibold whitespace-nowrap ">
            C+M
          </span>
        </Link>
        <MobileButton onClick={toggleMenu} />
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white text-neutral-800">
            <li>
              <Link
                href="/accommodations"
                className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0"
              >
                Accommodations
              </Link>
            </li>
            <li>
              <Link
                href="/wedding-party"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0 md:dark:hover:bg-transparent"
              >
                Wedding Party
              </Link>
            </li>
            <li>
              <Link
                href="/photos"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0  md:dark:hover:bg-transparent"
              >
                Photos
              </Link>
            </li>
            <li>
              <Link
                href="/our-story"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0  md:dark:hover:bg-transparent"
              >
                Our Story
              </Link>
            </li>
            <li>
              <Link
                href="/registry"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0  md:dark:hover:bg-transparent"
              >
                Registry
              </Link>
            </li>
            <li>
              <Link
                href="/rsvp"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-600 md:p-0  md:dark:hover:bg-transparent"
              >
                RSVP
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
