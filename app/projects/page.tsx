import NormalNavbar from '@/components/NavBar';
import Image from 'next/image';
import Link from 'next/link';

export default function Project() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen bg-lightgreen">

      <NormalNavbar/>

      <div className="Heading">
        <div className="flex flex-row justify-center lg:justify-start font-semibold text-4xl text-green hover:underline
         mt-24 lg:ml-24">
          <h1 className="">
            Projects
          </h1>
        </div>
        <div className='flex flex-row justify-center text-green text-4xl font-bold md:mt-12'>
            Coming Soon...
        </div>
      </div>
      
    </main>
  );
}
