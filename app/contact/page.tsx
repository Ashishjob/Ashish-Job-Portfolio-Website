import NormalNavbar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import RootLayout from "../layout";

export default function Contact() {
  return (
    <main className="min-w-screen bg-lightgreen flex min-h-screen flex-col">
      <NormalNavbar />

      <div className="text-green mb-6 mt-36 flex flex-row justify-center text-3xl font-semibold md:mt-56 lg:text-4xl">
        CONTACT ME
      </div>

      <div className="mb-6 flex flex-row justify-center">
        <div className="relative w-56 md:w-1/3">
          <input
            className="border-1 border-green text-green block w-full rounded-lg bg-white p-4 text-sm"
            placeholder="Name"
          />
        </div>
      </div>

      <div className="mb-6 flex flex-row justify-center">
        <div className="relative w-56 md:w-1/3">
          <input
            className="border-1 border-green text-green block w-full rounded-lg bg-white p-4 text-sm"
            placeholder="Email"
          />
        </div>
      </div>

      <div className="mb-6 flex flex-row justify-center">
        <div className="relative w-56 md:w-1/3">
          <textarea
            className="border-1 border-green text-green block w-full resize-y rounded-lg bg-white p-4 text-sm"
            placeholder="Message"
          />
        </div>
      </div>

      <div className="flex flex-row justify-center">
        <div className="relative w-24 md:w-1/6">
          <button className="border-1 border-green text-green hover:bg-textbox-green block w-full resize-y rounded-lg bg-white p-4 text-sm font-semibold">
            Submit
          </button>
        </div>
      </div>
    </main>
  );
}
