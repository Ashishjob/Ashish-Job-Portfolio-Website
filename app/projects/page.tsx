import NormalNavbar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Project() {
  return (
    <main className="min-w-screen bg-lightgreen flex min-h-screen flex-col">
      <NormalNavbar />

      <div className="Heading">
        <div
          className="text-green mt-24 flex flex-row justify-center text-4xl font-semibold hover:underline
         lg:ml-24 lg:justify-start"
        >
          <h1 className="">Projects</h1>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="text-green mt-12 flex flex-col items-center justify-start md:ml-20 md:flex-row lg:items-start">
          <a
            href="https://github.com/Ashishjob/Ashishjob.github.io"
            target="_blank"
            className="border-green text-green hover:bg-textbox-green bg-offwhite ml-12 md:ml-0 h-72 w-72 rounded-full border-2 p-4 md:h-96 md:w-96"
          >
            <span className="flex h-full flex-col items-center justify-center">
              <h1 className="justify-start text-2xl font-semibold">
                Portfolio Website
              </h1>
              <h2 className="text-center">
              Responsive website built using Next.js,
              TailwindCSS, and TypeScript.
              </h2>
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
