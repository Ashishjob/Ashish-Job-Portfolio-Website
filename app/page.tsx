import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-y-auto min-w-screen overflow-x-auto flex-col bg-lightgreen">

    <div className="flex text-center items-center justify-center font-semibold text-4xl text-green hover:underline mt-12 lg:mt-16 md:mt-16">
      <h1 className="w-80 md:text-center md:text-4xl md:w-full sm:text-xl">
        ASHISH - K - JOB
      </h1>
    </div>


      <div className="flex items-center text-center justify-center font-semibold  text-green mt-2">
        <h1 className="lg:text-lg md:text-xl sm:text-xs">| CS + Math Student @ UH |</h1>
      </div>


      <div className="lg:absolute lg:top-1/3 lg:left-48 text-left text-green mt-12">
        <h1 className="text-center font-semibold sm:text-2xl md:text-2xl lg:text-2xl lg:text-left hover:underline">About Me</h1>
        

        <h2 className="hidden lg:block font-base text-xl pt-4 lg:text-left text-center">
          Hey there! My name is Ashish Job, and I am <br />
          a rising sophomore majoring in Computer <br />
          Science with a minor in Mathematics at the <br />University of Houston.<br /><br />
          Feel free to connect with me on LinkedIn and <br />
          check out all my work on GitHub!
        </h2>

        <h2 className="items-center justify-center pl-48 pb-4 text-left lg:hidden hidden md:block font-base text-xl pt-4 lg:text-left">
          Hey there! My name is Ashish Job, and I am <br />
          a rising sophomore majoring in Computer <br />
          Science with a minor in Mathematics at the <br />University of Houston.<br /><br />
          Feel free to connect with me on LinkedIn and <br />
          check out all my work on GitHub!
        </h2>

        <h2 className="sm:hidden font-base text-base pt-4 lg:text-left px-6">
          Hey there! My name is Ashish Job, and I am
          a rising sophomore majoring in Computer 
          Science with a minor in Mathematics at the University of Houston.<br /><br />
          Feel free to connect with me on LinkedIn and
          check out all my work on GitHub!
        </h2>
      </div>

        <div className="lg:absolute flex justify-center items-center lg:bottom-1/3 lg:translate-y-2/3 lg:left-48 pb-4">
          <div className="pt-3 pr-1">
            <a href="https://www.linkedin.com/in/ashish-job/" target="_blank">
              <Image
                className="rounded-xl hover:bg-green-hover"
                src="/linkedin.svg"
                alt="LinkedIn"
                width={50}
                height={50}
              />
            </a>
          </div>

          <div className="pt-3 pr-1">
            <a href="https://github.com/Ashishjob" target="_blank">
              <Image
                className="rounded-full hover:bg-green-hover"
                src="/github.svg"
                alt="GitHub"
                width={50}
                height={50}
              />
            </a>
          </div>

          <div className="pt-3 pr-1">
            <a href="resume.pdf" target="_blank" title="My Resume">
              <Image
                className="rounded-xl hover:bg-green-hover"
                src="/resume.png"
                alt="Resume"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>


      <div className="lg:absolute hidden lg:block top-52 left-40 transform translate-y-44">
        <hr className="w-1 h-80 bg-green border0 rounded dark:bg-green"></hr>
      </div>

      <div className="hidden md:block lg:block md:px-8 lg:absolute lg:left-1/2 lg:top-44 transform translate-y-1/4 lg:translate-x-8">
        <h1 className="sm:left-2 text-3xl font-semibold hover:underline text-green">
          Experiences
        </h1>
      </div>

      <div className="md:hidden sm:block">
        <h1 className="pt-4 pl-4 text-3xl font-semibold hover:underline text-green">
          Experiences
        </h1>
      </div>

      <div className="hidden md:absolute lg:block lg:absolute lg:left-1/2 lg:top-4 transform translate-y-1/4 translate-x-8">
        <hr style={{ height: '680px' }} className="w-1 bg-green border0 rounded dark:bg-green"></hr>
      </div>

      <div className="hidden lg:hidden md:absolute md:block md:top-56 md:left-40">
        <hr className="w-1 h-56 bg-green border0 rounded dark:bg-green"></hr>
      </div>



      <div className="lg:absolute lg:left-1/2 top-52 pt-6 right-12 text-green">
        <div className="">
          <h1 className="px-8 md:px-20 font-semibold text-xl md:text-2xl lg:text-2xl hover:underline pb-2">
            Undergraduate Researcher @ SAIL Lab 
          </h1>
          <h3 className='pl-8 md:pl-20 pb-2 font-semibold '>[May 2023 - Present]</h3>

          <h2 className="px-12 md:pl-28 pr-16 sm:text-lg md:text-lg">
            I utilized NERFstudio, a Neural Embedded Radiance Field software, to render images into 3-Dimensions to detect flaws in civil infrastructure.
          </h2>
        </div>

        <div className="">
          <h1 className="py-4 px-8 md:px-20 font-semibold text-xl md:text-2xl lg:text-2xl hover:underline pb-2">
            Logistics Director @ DataCON
          </h1>
          <h3 className='pl-8 md:pl-20 pb-2 font-semibold '>[March 2023 - Present]</h3>

          <h2 className="px-12 md:pl-28 pr-16 sm:text-lg md:text-lg">
            I led the set up for the first Datathon at the University of Houston with the hosting responsibilities in venue booking, food catering, and scheduling .
          </h2>
        </div>

        <div className="">
          <h1 className="py-4 px-8 md:px-20 font-semibold text-xl md:text-2xl lg:text-2xl hover:underline pb-2">
            Cybersecurity Intern @ Chrysallis.AI
          </h1>
          <h3 className='pl-8 md:pl-20 pb-2 font-semibold '>[March 2023 - May 2023]</h3>

          <h2 className="px-12 md:pl-28 pr-16 sm:text-lg md:text-lg">
            I led a team held in charge of comprehensively comparing the company&apos;s security policies through gap analyses.
          </h2>
        </div>

        <div className="mb-12">
          <h1 className="py-4 px-8 md:px-20 font-semibold text-xl md:text-2xl lg:text-2xl hover:underline pb-2">
            Web Developer @ CougarCS Web Dev
          </h1>
          <h3 className='pl-8 md:pl-20 pb-2 font-semibold '>[March 2023 - Present]</h3>

          <h2 className="px-12 md:pl-28 pr-16 sm:text-lg md:text-lg">
            I worked to construct the frontend of the admin portal of the organization to allow for easier user interaction.
          </h2>
        </div> 
      </div> 
    </main>
  );
}
