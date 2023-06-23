import NormalNavbar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-w-screen bg-lightgreen flex min-h-screen flex-col">
      <NormalNavbar />

      <div className="lg:ml-24">
        <div
          className="text-green mt-16 flex flex-row justify-center text-4xl font-semibold 
         md:mt-36 lg:ml-24 lg:mt-56 lg:justify-start"
        >
          <h1 className="hover:underline">ASHISH - K - JOB</h1>
        </div>
        <div className="text-green mt-2 flex items-center justify-center text-center font-semibold lg:ml-24 lg:justify-start">
          <h1 className="sm:text-xs md:text-xl lg:text-lg">
            | CS + Math Student @ UH |
          </h1>
        </div>
      

      <div className="text-green min-w-screen mt-6 w-full flex-row md:mt-12 md:flex">
        <div className="ml-36 hidden justify-start lg:block">
          {" "}
          {/*Large Screen Border Next to About Us*/}
          <hr className="bg-green border0 dark:bg-green h-80 w-1 rounded"></hr>
        </div>

        <div className="ml-44 hidden justify-start md:block lg:hidden">
          {" "}
          {/*Medium Screen Border Next to About Us*/}
          <hr className="bg-green h-80 w-1"></hr>
        </div>

        <div className="min-w-screen flex flex-row">
          <div className="flex flex-col justify-start text-left md:ml-6">
            {" "}
            {/* Large Screen */}
            <h1 className="hidden font-semibold hover:underline lg:block lg:text-2xl">
              About Me
            </h1>
            <h2 className="hidden pt-4 text-left text-xl lg:block">
              Hey there! My name is Ashish Job, and I am majoring in <br />
              Computer Science with a minor in Mathematics at the <br />
              University of Houston. I&apos;m also incredibly passionate about
              the <br />
              fields of Artificial Intelligence and Data Science, and looking{" "}
              <br />
              to gain further experience in them!
              <br />
              <br />
              Feel free to connect with me on LinkedIn and <br />
              check out all my work on GitHub!
            </h2>
            <h1 className="hidden text-2xl font-semibold hover:underline md:block lg:hidden">
              {" "}
              {/* Medium Screen */}
              About Me
            </h1>
            <h2 className="font-base hidden pt-4 text-left text-xl md:block lg:hidden lg:text-left">
              Hey there! My name is Ashish Job, and I am <br />
              majoring in Computer Science with a minor in <br />
              Mathematics at the University of Houston. <br />
              I&apos;m also incredibly passionate about the fields of <br />
              Artificial Intelligence and Data Science, and looking <br />
              to gain further experience in them!
              <br />
              <br />
              Feel free to connect with me on LinkedIn and <br />
              check out all my work on GitHub!
            </h2>
            <h1 className="text-center text-xl font-semibold hover:underline sm:block md:hidden">
              {" "}
              {/* Small Screen*/}
              About Me
            </h1>
            <h2 className="font-base px-6 text-center text-base sm:hidden">
              Hey there! My name is Ashish Job, and I am majoring in Computer
              Science with a minor in Mathematics at the University of Houston.
              I&apos;m also incredibly passionate about the fields of Artificial
              Intelligence and Data Science, and looking to gain further
              experience in them!
              <br />
              <br />
              Feel free to connect with me on LinkedIn <br />
              and check out all my work on GitHub!
            </h2>
            <div className="flex items-center justify-center md:justify-start">
              <div className="pr-1 pt-3">
                <a
                  href="https://www.linkedin.com/in/ashish-job/"
                  target="_blank"
                >
                  <Image
                    className="hover:bg-green-hover rounded-xl"
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={50}
                    height={50}
                  />
                </a>
              </div>

              <div className="pr-1 pt-3">
                <a href="https://github.com/Ashishjob" target="_blank">
                  <Image
                    className="hover:bg-green-hover rounded-full"
                    src="/github.svg"
                    alt="GitHub"
                    width={50}
                    height={50}
                  />
                </a>
              </div>

              <div className="pr-1 pt-3">
                <a href="officialResume.pdf" target="_blank" title="My Resume">
                  <Image
                    className="hover:bg-green-hover rounded-xl"
                    src="/resume.png"
                    alt="Resume"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
            </div>
          </div>

            <Image
              className="hidden lg:block ml-96"
              src="/bonsai.svg"
              alt="Bonsai"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
