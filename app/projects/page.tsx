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
        <div className="text-green flex flex-row justify-center text-4xl font-bold md:mt-12">
          Coming Soon...
        </div>
      </div>
    </main>
  );
}
