import NormalNavbar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-w-screen bg-lightgreen flex min-h-screen flex-col">
      <NormalNavbar />

      <div className="Heading">
        <div
          className="text-green mt-16 flex flex-row justify-center text-4xl font-semibold 
         md:mt-36 lg:ml-24 lg:mt-56 lg:justify-between"
        >
          <h1 className="hover:underline">ASHISH - K - JOB</h1>
          <h1 className="hidden lg:block mr-24"> Some Technologies I like to Use:</h1>
        </div>
        <div className="text-green mt-2 flex items-center justify-center text-center font-semibold lg:ml-24 lg:justify-start">
          <h1 className="sm:text-xs md:text-xl lg:text-lg">
            | CS + Math Student @ UH |
          </h1>
        </div>
      </div>

      <div className="text-green mt-6 min-w-screen w-full flex-row md:mt-12 md:flex">
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
            <div className="text-center text-green mt-12 md:mr-12 flex flex-col items-center justify-center text-2xl font-semibold md:text-3xl lg:hidden">
              Some Technologies <br /> I Like to Use:
            </div>
            <div className="justify-center items-center md:mr-12">
            <div className="mt-12 flex flex-row justify-evenly lg:hidden ">
              <Image
                className=""
                src="/python.svg"
                alt="Python"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/js.svg"
                alt="JavaScript"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/ts.svg"
                alt="TypeScript"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/html.svg"
                alt="HTML"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/css.svg"
                alt="CSS"
                width={50}
                height={50}
              />
              </div>
              <div className="mt-6 flex flex-row justify-evenly lg:hidden">
              <Image
                className=""
                src="/cpp.svg"
                alt="C++"
                width={50}
                height={50}
              />
              
              <Image
                className=""
                src="/r.svg"
                alt="R"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/java.svg"
                alt="Java"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/postgresql.svg"
                alt="PostgreSQL"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/docker.svg"
                alt="Docker"
                width={50}
                height={50}
              />
              </div>
              <div className="mt-6 flex flex-row justify-evenly lg:hidden mb-12">
              <Image
                className=""
                src="/git.svg"
                alt="Git"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/figma.svg"
                alt="Figma"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/linux.svg"
                alt="Linux"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/react.svg"
                alt="React.js"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/node.svg"
                alt="Node.js"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
        </div>

        <div className="hidden lg:block lg:justify-end ml-auto mr-40"> 
        <div className="text-green flex flex-col items-center justify-center text-2xl font-bold md:text-3xl">
              ---------------------------------
          </div>
            <div className="mt-4 flex flex-row justify-evenly">
              <Image
                className=""
                src="/python.svg"
                alt="Python"
                width={50}
                height={50}
              />
             
              <Image
                className=""
                src="/js.svg"
                alt="JavaScript"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/ts.svg"
                alt="TypeScript"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/html.svg"
                alt="HTML"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/css.svg"
                alt="CSS"
                width={50}
                height={50}
              />
              </div>
              <div className="mt-12 flex flex-row justify-evenly ">
              <Image
                className=""
                src="/cpp.svg"
                alt="C++"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/r.svg"
                alt="R"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/java.svg"
                alt="Java"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/postgresql.svg"
                alt="PostgreSQL"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/docker.svg"
                alt="Docker"
                width={50}
                height={50}
              />
              </div>
              <div className="mt-12 flex flex-row justify-evenly ">
              <Image
                className=""
                src="/git.svg"
                alt="Git"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/figma.svg"
                alt="Figma"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/linux.svg"
                alt="Linux"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/react.svg"
                alt="React.js"
                width={50}
                height={50}
              />
              <Image
                className=""
                src="/node.svg"
                alt="Node.js"
                width={50}
                height={50}
              />
            </div>
            <div className="mt-6 text-green flex flex-col items-center justify-center text-2xl font-bold md:text-3xl">
              ---------------------------------
          </div>
            </div>
      </div>
    </main>
  );
}
