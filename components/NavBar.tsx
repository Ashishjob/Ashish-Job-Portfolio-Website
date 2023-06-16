import Image from "next/image";
import Link from "next/link";

const NormalNavbar = () => {
  return (

    <nav>
    <div className="bg-green-hover flex flex-wrap items-center justify-between md:justify-center p-4 lg:w-full">
    <Image src="/icon.svg" width="50" height="50" alt="Logo" className=" hover:animate-bounce"/>
    
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-green-button focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">

        <div className="flex flex-row text-2xl font-semibold md:justify-center items-center">
          <Link href={"/"}>
            <span className="text-green mx-6 hover:underline"> Home
            </span>
          </Link>

          <Link href={"/experiences"}>
            <span className="text-green mx-6 hover:underline"> Experiences
            </span>
          </Link>

          <Link href={"/projects"}>
            <span className="text-green mx-6 hover:underline"> Projects
            </span>
          </Link>

          <Link href={"/contact"}>
            <span className="text-green mx-6 hover:underline"> Contact
            </span>
          </Link>
        </div>
    </div>
</div>
          
    </nav>

    




  );
};

export default NormalNavbar;