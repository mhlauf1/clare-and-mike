import React from "react";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
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
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
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
