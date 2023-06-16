import NormalNavbar from '@/components/NavBar';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen bg-lightgreen">

      <NormalNavbar/>

      <div className='flex flex-row justify-center mt-36 md:mt-56 text-3xl lg:text-4xl font-semibold text-green mb-6'>
        CONTACT ME
    </div>

    <div className='flex flex-row justify-center mb-6'>  
        <div className="relative md:w-1/3 w-56">
            <input className="bg-white border-1 border-green text-green text-sm rounded-lg block w-full p-4" placeholder="Name"/>
        </div>
    </div>

    <div className='flex flex-row justify-center mb-6'>  
        <div className="relative md:w-1/3 w-56">
            <input className="bg-white border-1 border-green text-green text-sm rounded-lg block w-full p-4" placeholder="Email"/>
        </div>
    </div>

    <div className='flex flex-row justify-center mb-6'>  
        <div className="relative md:w-1/3 w-56">
            <textarea className="resize-y bg-white border-1 border-green text-green text-sm rounded-lg block w-full p-4" placeholder="Message"/>
        </div>
    </div>

    <div className='flex flex-row justify-center'>  
        <div className="relative md:w-1/6 w-24">
            <button className="resize-y bg-white border-1 border-green text-green text-sm rounded-lg block w-full p-4 font-semibold hover:bg-textbox-green">
                Submit
            </button>
        </div>
    </div>


      
    </main>
  );
}
