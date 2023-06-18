import NormalNavbar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className="min-w-screen bg-lightgreen flex min-h-screen flex-col">
      <NormalNavbar />

      <div className="Heading">
        <div
          className="text-green mt-12 flex flex-row justify-center text-4xl font-semibold underline lg:ml-24
         lg:mt-8 lg:justify-start"
        >
          <h1 className="">Projects</h1>
        </div>
      </div>

      <div className="mt-12 flex flex-col justify-center md:hidden lg:block">
        <div className="text-green mt-0 flex flex-col items-center justify-between md:ml-20 md:mr-20 md:flex-row lg:mt-4 lg:items-start">
          <a
            href="https://github.com/Ashishjob/Ashishjob.github.io"
            target="_blank"
            className="border-green text-green hover:bg-textbox-green bg-offwhite mb-12 h-72 w-72 rounded-full border-2 p-4 md:mb-0 md:ml-0 md:h-80 md:w-80"
          >
            <span className="flex h-full flex-col items-center justify-center">
              <h1 className="justify-start text-2xl font-semibold hover:underline">
                Portfolio Website
              </h1>
              <h2 className="text-center">
                Responsive website built using Next.js, TailwindCSS, and
                TypeScript.
              </h2>
            </span>
          </a>

          <a
            href="https://github.com/Ashishjob/CougarCS-AdminPortal"
            target="_blank"
            className="border-green text-green hover:bg-textbox-green bg-offwhite mb-12 h-72 w-72 rounded-full border-2 p-4 md:mb-0 md:ml-0 md:h-80 md:w-80"
          >
            <span className="flex h-full flex-col items-center justify-center">
              <h1 className="justify-start text-center text-2xl font-semibold hover:underline">
                CougarCS Admin Portal
              </h1>
              <h2 className="text-center">
                Full-stack web-application that streamlines administrative
                duties.
              </h2>
            </span>
          </a>

          <a
            href="https://github.com/Ashishjob/Pokemon-Tamagotchi-1437"
            target="_blank"
            className="border-green text-green hover:bg-textbox-green bg-offwhite h-72 w-72 rounded-full border-2 p-4 md:mb-0 md:ml-0 md:h-80 md:w-80"
          >
            <span className="flex h-full flex-col items-center justify-center">
              <h1 className="justify-start text-2xl font-semibold hover:underline">
                Tamagotchi Project
              </h1>
              <h2 className="text-center">
                Small Pokemon Game constructed with Object-Oriented Programming
              </h2>
            </span>
          </a>
        </div>

        <div className="text-green mt-12 flex flex-col items-center justify-between lg:flex-row lg:justify-evenly">
          <a
            href="https://github.com/Ashishjob/MalayalamMNIST"
            target="_blank"
            className="border-green text-green hover:bg-textbox-green bg-offwhite mb-12 h-72 w-72 rounded-full border-2 p-4 md:mb-0 md:ml-0 md:h-80 md:w-80"
          >
            <span className="flex h-full flex-col items-center justify-center">
              <h1 className="justify-start text-2xl font-semibold hover:underline">
                Malayalam MNIST
              </h1>
              <h2 className="text-center">
                Deep learning model to accurately classify handwritten letters.
              </h2>
              <h6 className="font-semibold"> [In Progress]</h6>
            </span>
          </a>

          <a
            href="https://github.com/Ashishjob/Scheduling-Bot"
            target="_blank"
            className="border-green text-green hover:bg-textbox-green bg-offwhite mb-12 h-72 w-72 rounded-full border-2 p-4 md:mb-0 md:ml-0 md:h-80 md:w-80"
          >
            <span className="flex h-full flex-col items-center justify-center">
              <h1 className="justify-start text-2xl font-semibold hover:underline">
                Scheduling Bot
              </h1>
              <h2 className="text-center">
                Discord Bot with event listeners to set meeting times in
                organizations.
              </h2>
              <h6 className="font-semibold"> [In Progress]</h6>
            </span>
          </a>
        </div>
      </div>

      <div className="mt-12 hidden flex-col items-center justify-center md:block lg:hidden">
        <div className="text-green flex flex-col items-center justify-center">
          <a
            href="https://github.com/Ashishjob/Ashishjob.github.io"
            target="_blank"
            className="border-green text-green hover:bg-textbox-green bg-offwhite mb-12 h-96 w-96 rounded-full border-2 p-4"
          >
            <span className="flex h-full flex-col items-center justify-center">
              <h1 className="justify-start text-3xl font-semibold hover:underline">
                Portfolio Website
              </h1>
              <h2 className="text-center text-lg">
                Responsive website built using Next.js, TailwindCSS, and
                TypeScript.
              </h2>
            </span>
          </a>

          <a
            href="https://github.com/Ashishjob/Ashishjob.github.io"
            target="_blank"
            className="border-green text-green hover:bg-textbox-green bg-offwhite mb-12 h-96 w-96 rounded-full border-2 p-4"
          >
            <span className="flex h-full flex-col items-center justify-center">
              <h1 className="justify-start text-3xl font-semibold hover:underline">
                CougarCS Admin Portal
              </h1>
              <h2 className="text-center text-lg">
                Full-stack web-application that streamlines administrative
                duties.
              </h2>
            </span>
          </a>
          <a
            href="https://github.com/Ashishjob/Ashishjob.github.io"
            target="_blank"
            className="border-green text-green hover:bg-textbox-green bg-offwhite mb-12 h-96 w-96 rounded-full border-2 p-4"
          >
            <span className="flex h-full flex-col items-center justify-center">
              <h1 className="justify-start text-3xl font-semibold hover:underline">
                Tamagotchi Project
              </h1>
              <h2 className="text-center text-lg">
                Small Pokemon Game constructed with Object-Oriented Programming
              </h2>
            </span>
          </a>

          <a
            href="https://github.com/Ashishjob/Ashishjob.github.io"
            target="_blank"
            className="border-green text-green hover:bg-textbox-green bg-offwhite mb-12 h-96 w-96 rounded-full border-2 p-4"
          >
            <span className="flex h-full flex-col items-center justify-center">
              <h1 className="justify-start text-3xl font-semibold hover:underline">
                Malayalam MNIST
              </h1>
              <h2 className="text-center text-lg">
                Deep learning model to accurately classify handwritten letters.
              </h2>
              <h6 className="font-semibold"> [In Progress]</h6>
            </span>
          </a>

          <a
            href="https://github.com/Ashishjob/Ashishjob.github.io"
            target="_blank"
            className="border-green text-green hover:bg-textbox-green bg-offwhite mb-12 h-96 w-96 rounded-full border-2 p-4"
          >
            <span className="flex h-full flex-col items-center justify-center">
              <h1 className="justify-start text-3xl font-semibold hover:underline">
                Scheduling Bot
              </h1>
              <h2 className="text-center text-lg">
                Discord Bot with event listeners to set meeting times in
                organizations.
              </h2>
              <h6 className="font-semibold"> [In Progress]</h6>
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
