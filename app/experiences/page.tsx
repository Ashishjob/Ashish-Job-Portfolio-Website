import NormalNavbar from "@/components/NavBar";

export default function Experience() {
  return (
    <main className="min-w-screen bg-lightgreen flex min-h-screen flex-col">
      <NormalNavbar />

      <div className="Heading">
        <div
          className="text-green mt-8 flex flex-row justify-center text-4xl font-bold underline
         lg:ml-24 lg:justify-start"
        >
          <h1 className="">Experiences</h1>
        </div>

        <div className="md:hidden lg:block ">
          <div className="text-green mt-12 flex flex-col items-center justify-start lg:ml-20 lg:flex-row lg:items-start">
            <a
              href="https://sail.cive.uh.edu/"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green block h-72 w-72 rounded-lg border-2 bg-offwhite p-4"
            >
              <h1 className="text-xl font-semibold">
                Undergraduate Research <br />
                Assistant @ SAIL Lab
              </h1>
              <h6 className="mt-2 font-semibold"> [May 2023 - Present] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              Analyzed data using Python, NerfStudio, and LERF to detect structural faults caused by natural disasters.
              </div>
            </a>

            <a
              href="https://www.qubitbyqubit.org/programs"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green mt-12 block h-72 w-72 rounded-lg border-2 bg-offwhite p-4 lg:ml-20 lg:mt-0"
            >
              <h1 className="text-xl font-semibold">
                UQN Member @ <br /> Qubit x Qubit
              </h1>
              <h6 className="mt-2 font-semibold"> [May 2023 - Present] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
                Participated in IBM Quantum Explorers and other special events with industry and academic experts in the quantum field.
              </div>
            </a>

            <a
              //href=""
              target="_blank"
              className="border-green text-green hover:bg-textbox-green mt-12 block h-72 w-72 rounded-lg border-2 bg-offwhite p-4 lg:ml-20 lg:mt-0"
            >
              <h1 className="text-xl font-semibold">
                Logistics Director @ <br />
                DataCON
              </h1>
              <h6 className="mt-2 font-semibold"> [April 2023 - Present] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I coordinate event logistics, including venue arrangements, accommodation, equipment procurement, and vendor/sponsor partnerships.
              </div>
            </a>

            <a
              href="https://uhcode.red/"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green mt-12 block h-72 w-72 rounded-lg border-2 bg-offwhite p-4 lg:ml-20 lg:mt-0"
            >
              <h1 className="text-xl font-semibold">
                Logistics Officer @ <br />
                CodeRED
              </h1>
              <h6 className="mt-2 font-semibold"> [April 2023 - Present] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I manage the logistical aspects of Houston&apos;s biggest hackathon, enabling participants to focus on innovation and collaboration.
              </div>
            </a>

            <a
              href="https://chrysallis.ai/"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green mt-12 block h-72 w-72 rounded-lg border-2 bg-offwhite p-4 lg:ml-20 lg:mt-0"
            >
              <h1 className="text-xl font-semibold">
                Cybersecurity Intern @ <br />
                Chrysallis.AI
              </h1>
              <h6 className="mt-2 font-semibold"> [March 2023 - May 2023] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I assessed threat feed monitoring policies, identified vulnerabilities, and enhanced cybersecurity through gap analyses.
              </div>
            </a>
          </div>
          <div className="text-green mt-12 flex flex-col items-center justify-start lg:ml-20 lg:flex-row lg:items-start">
            <a
              href="https://cougarcs.com/"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green block h-72 w-72 rounded-lg border-2 bg-offwhite p-4"
            >
              <h1 className="text-xl font-semibold">
                Web Developer @ <br />
                CougarCS Web Dev
              </h1>
              <h6 className="mt-2 font-semibold"> [March 2023 - Present] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I contributed to the Admin Portal and Revamp teams by reconfiguring the website&apos;s front end using Git source control.
              </div>
            </a>

            <a
              //href=""
              target="_blank"
              className="border-green text-green hover:bg-textbox-green mt-12 block h-72 w-72 rounded-lg border-2 bg-offwhite p-4 lg:ml-20 lg:mt-0"
            >
              <h1 className="text-xl font-semibold">
                Relations Officer @ <br />
                CougarAI
              </h1>
              <h6 className="mt-2 font-semibold"> [April 2023 - Present] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I build relationships with organizations, organize events, workshops, and project teams to drive advancements in AI and ML for students.
              </div>
            </a>

            <a
              href="https://www.codecoogs.com/"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green mt-12 block h-72 w-72 rounded-lg border-2 bg-offwhite p-4 lg:ml-20 lg:mt-0"
            >
              <h1 className="text-xl font-semibold">
                Teams Director @ <br />
                Code[Coogs]
              </h1>
              <h6 className="mt-2 font-semibold"> [April 2023 - Present] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I ensure active member participation and placement in software engineering projects and competitions organization-wide.
              </div>
            </a>

            <a
              href="https://cougarcs.com//"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green mt-12 block h-72 w-72 rounded-lg border-2 bg-offwhite p-4 lg:ml-20 lg:mt-0"
            >
              <h1 className="text-xl font-semibold">
                &quot;Hacker&quot; @ CougarCS
                <br /> InfoSec Team
              </h1>
              <h6 className="mt-2 font-semibold">
                {" "}
                [February 2023 - Present]{" "}
              </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I developed a web-scraping bot for CyberNews, delivering current cybersecurity news and training materials for certifications/exams.
              </div>
            </a>

            <a
              href="https://www.codecoogs.com/"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green mb-12 mt-12 block h-72 w-72 rounded-lg border-2 bg-offwhite p-4 lg:mb-0 lg:ml-20 lg:mt-0"
            >
              <h1 className="text-xl font-semibold">
                Executive Intern @ <br />
                Code[Coogs]
              </h1>
              <h6 className="mt-2 font-semibold">
                {" "}
                [January 2023 - May 2023]{" "}
              </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I organized coding competitions, networking events, and led sub-organizations to boost community participation.
              </div>
            </a>
          </div>
        </div>

        <div className="hidden md:block lg:hidden ">
          <div className="text-green ml-20 mt-12 flex flex-row justify-start">
            <a
              href="https://sail.cive.uh.edu/"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green block h-72 w-72 rounded-lg border-2 bg-offwhite p-4"
            >
              <h1 className="text-xl font-semibold">
                Undergraduate Research <br />
                Assistant @ SAIL Lab
              </h1>
              <h6 className="mt-2 font-semibold"> [May 2023 - Present] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              Analyzed data using Python, NerfStudio, and LERF to detect structural faults caused by natural disasters.
              </div>
            </a>

            <a
              href="https://www.qubitbyqubit.org/programs"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green ml-20 block h-72 w-72 rounded-lg border-2 bg-offwhite p-4"
            >
              <h1 className="text-xl font-semibold">
                UQN Member @ <br /> Qubit x Qubit
              </h1>
              <h6 className="mt-2 font-semibold"> [May 2023 - Present] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              Participated in IBM Quantum Explorers and other special events with industry and academic experts in the quantum field.
              </div>
            </a>
          </div>

          <div className="text-green ml-20 mt-12 flex flex-row justify-start">
            <a
            //   href=""
              target="_blank"
              className="border-green text-green hover:bg-textbox-green block h-72 w-72 rounded-lg border-2 bg-offwhite p-4"
            >
              <h1 className="text-xl font-semibold">
                Logistics Director @ <br />
                DataCON
              </h1>
              <h6 className="mt-2 font-semibold"> [April 2023 - Present] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I coordinate event logistics, including venue arrangements, accommodation, equipment procurement, and vendor/sponsor partnerships.
              </div>
            </a>

            <a
              href="https://uhcode.red/"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green ml-20 block h-72 w-72 rounded-lg border-2 bg-offwhite p-4"
            >
              <h1 className="text-xl font-semibold">
                Logistics Officer @ <br />
                CodeRED
              </h1>
              <h6 className="mt-2 font-semibold"> [April 2023 - Present] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I manage the logistical aspects of Houston&apos;s biggest hackathon, enabling participants to focus on innovation and collaboration.
              </div>
            </a>
          </div>

          <div className="text-green ml-20 mt-12 flex flex-row justify-start">
            <a
              href="https://chrysallis.ai/"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green block h-72 w-72 rounded-lg border-2 bg-offwhite p-4"
            >
              <h1 className="text-xl font-semibold">
                Cybersecurity Intern @ <br />
                Chrysallis.AI
              </h1>
              <h6 className="mt-2 font-semibold"> [March 2023 - May 2023] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I assessed threat feed monitoring policies, identified vulnerabilities, and enhanced cybersecurity through gap analyses.
              </div>
            </a>

            <a
              href="https://cougarcs.com/"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green ml-20 block h-72 w-72 rounded-lg border-2 bg-offwhite p-4"
            >
              <h1 className="text-xl font-semibold">
                Web Developer @ <br />
                CougarCS Web Dev
              </h1>
              <h6 className="mt-2 font-semibold"> [March 2023 - Present] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I contributed to the Admin Portal and Revamp teams by reconfiguring the website&apos;s front end using Git source control.
              </div>
            </a>
          </div>

          <div className="text-green ml-20 mt-12 flex flex-row justify-start">
            <a
            //   href=""
              target="_blank"
              className="border-green text-green hover:bg-textbox-green block h-72 w-72 rounded-lg border-2 bg-offwhite p-4"
            >
              <h1 className="text-xl font-semibold">
                Relations Officer @ <br />
                CougarAI
              </h1>
              <h6 className="mt-2 font-semibold"> [April 2023 - Present] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I build relationships with organizations, organize events, workshops, and project teams to drive advancements in AI and ML for students.
              </div>
            </a>

            <a
              href="https://www.codecoogs.com/"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green ml-20 block h-72 w-72 rounded-lg border-2 bg-offwhite p-4"
            >
              <h1 className="text-xl font-semibold">
                Teams Director @ <br />
                Code[Coogs]
              </h1>
              <h6 className="mt-2 font-semibold"> [April 2023 - Present] </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I ensure active member participation and placement in software engineering projects and competitions organization-wide.
              </div>
            </a>
          </div>

          <div className="text-green mb-12 ml-20 mt-12 flex flex-row justify-start">
            <a
              href="https://cougarcs.com//"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green block h-72 w-72 rounded-lg border-2 bg-offwhite p-4"
            >
              <h1 className="text-xl font-semibold">
                &quot;Hacker&quot; @ CougarCS
                <br /> InfoSec Team
              </h1>
              <h6 className="mt-2 font-semibold">
                {" "}
                [February 2023 - Present]{" "}
              </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I developed a web-scraping bot for CyberNews, delivering current cybersecurity news and training materials for certifications/exams.
              </div>
            </a>

            <a
              href="https://www.codecoogs.com/"
              target="_blank"
              className="border-green text-green hover:bg-textbox-green ml-20 block h-72 w-72 rounded-lg border-2 bg-offwhite p-4"
            >
              <h1 className="text-xl font-semibold">
                Executive Intern @ <br />
                Code[Coogs]
              </h1>
              <h6 className="mt-2 font-semibold">
                {" "}
                [January 2023 - May 2023]{" "}
              </h6>
              <div className="font-sm mt-2 flex flex-row text-base lg:ml-4">
              I organized coding competitions, networking events, and led sub-organizations to boost community participation.
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
