import NormalNavbar from '@/components/NavBar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen min-w-screen bg-lightgreen">

      <NormalNavbar/>

      <div className="Heading">
        <div className="flex flex-row justify-center lg:justify-start font-semibold text-4xl text-green hover:underline
         mt-16 md:mt-36 lg:mt-56 lg:ml-24">
          <h1 className="">
            ASHISH - K - JOB
          </h1>
        </div>
        <div className="flex items-center text-center justify-center lg:justify-start lg:ml-24 font-semibold text-green mt-2">
          <h1 className="lg:text-lg md:text-xl sm:text-xs">| CS + Math Student @ UH |</h1>
        </div>
      </div>

      <div className="md:flex flex-row text-green mt-6 md:mt-12 w=full">
        
        <div className="justify-start hidden lg:block ml-36"> {/*Large Screen Border Next to About Us*/}
          <hr className="w-1 h-80 bg-green border0 rounded dark:bg-green"></hr>
        </div>
        
        <div className="justify-start hidden lg:hidden md:block ml-44"> {/*Medium Screen Border Next to About Us*/}
          <hr className="w-1 h-80 bg-green"></hr>
        </div>

        <div className='flex flex-row'>
          <div className="flex flex-col text-left justify-center md:ml-6"> {/* Large Screen */} 
            <h1 className="hidden lg:block lg:text-2xl font-semibold hover:underline">
              About Me
            </h1>
            <h2 className="hidden lg:block text-xl pt-4 text-left">
              Hey there! My name is Ashish Job, and I am majoring in <br />
              Computer Science with a minor in Mathematics at the <br />
              University of Houston. I&apos;m also incredibly passionate about the <br />
              fields of Artificial Intelligence and Data Science, and looking <br />
              to gain further experience in them!
              <br /><br />
              Feel free to connect with me on LinkedIn and <br />
              check out all my work on GitHub!
            </h2>

            <h1 className="hidden lg:hidden md:block text-2xl font-semibold hover:underline"> {/* Medium Screen */}
              About Me
            </h1>

            <h2 className="text-left lg:hidden hidden md:block font-base text-xl pt-4 lg:text-left">
              Hey there! My name is Ashish Job, and I am <br />
              majoring in Computer Science with a minor in <br />
              Mathematics at the University of Houston. <br />
              I&apos;m also incredibly passionate about the fields of  <br />
              Artificial Intelligence and Data Science, and looking <br />
              to gain further experience in them!
              <br /><br />
              Feel free to connect with me on LinkedIn and <br />
              check out all my work on GitHub!
            </h2>

            <h1 className="md:hidden sm:block text-xl text-center font-semibold hover:underline"> {/* Small Screen*/}
              About Me
            </h1>

            <h2 className="sm:hidden font-base text-base text-center px-6">
              Hey there! My name is Ashish Job, and I am
              majoring in Computer Science with a minor in
              Mathematics at the University of Houston.
              I&apos;m also incredibly passionate about the fields of
              Artificial Intelligence and Data Science, and looking
              to gain further experience in them!<br /><br />
              Feel free to connect with me on LinkedIn <br />
              and check out all my work on GitHub!
            </h2>
          
            <div className="flex md:justify-start justify-center items-center">

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
          </div>  
        </div>
      </div>
    </main>
  );
}
