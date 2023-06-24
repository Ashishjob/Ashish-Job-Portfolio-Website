"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NormalNavbar = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <nav>
      <div className="bg-green-hover flex flex-wrap items-center justify-between p-4 md:justify-center lg:w-full shadow-lg">
        <Image
          src="/icon.svg"
          width="50"
          height="50"
          alt="Logo"
          className="hover:animate-bounce"
        />

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="text-green hover:bg-green-button focus:ring-green ml-3 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={handleClick}
        >
          <span className="sr-only">Open Main Menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>

          <ul
            id="hamburger-menu-items"
            className="hamburger-menu-items flex flex-col"
            style={visible ? { display: "block" } : { display: "none" }}
          >
            <div className="">
              <Link href={"/"}>
                <span className="text-green mx-4 hover:underline"> Home</span>
              </Link>
              <Link href={"/experiences"}>
                <span className="text-green mx-2 hover:underline">
                  {" "}
                  Experiences
                </span>
              </Link>
            </div>
            <Link href={"/projects"}>
              <span className="text-green mx-2 hover:underline"> Projects</span>
            </Link>
            <Link href={"/contact"}>
              <span className="text-green mx-5 hover:underline"> Contact</span>
            </Link>
          </ul>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="flex flex-row items-center text-2xl font-semibold md:justify-center">
            <Link href={"/"}>
              <span className="text-green mx-6 hover:underline"> Home</span>
            </Link>

            <Link href={"/experiences"}>
              <span className="text-green mx-6 hover:underline">
                {" "}
                Experiences
              </span>
            </Link>

            <Link href={"/projects"}>
              <span className="text-green mx-6 hover:underline"> Projects</span>
            </Link>

            <Link href={"/contact"}>
              <span className="text-green mx-6 hover:underline"> Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NormalNavbar;
