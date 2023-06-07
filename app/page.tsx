

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col bg-lightgreen overflow-x-auto">
      <div className="flex top-36 h-12 w-27 items-center justify-center pt-24 pb-4 font-semibold text-3xl text-green text-decoration-line: hover:underline">
        <h1 className='w-27'>
          ASHISH - K - JOB
        </h1>
      </div>

      <div className='flex top-24 h-12 w-78 items-center justify-center font-semibold text-xl text-green'>
        
        <h1 className='w-27'>
          | CS + Math Student @ UH | Undergraduate Research Assistant | 
        </h1>
      </div>
      

      <div className='absolute top-96 left-72 transform -translate-y-1/4 h-12 w-78 text-green'>
        <h1 className='font-semibold text-2xl hover:underline'>
          About Me
        </h1>

        <h2 className='font-base text-xl w-128 pt-3'>
        Hey there! My name is Ashish Job, and I am a
        <br />
        rising sophomore majoring in Computer Science with  
        <br />
        a minor in Mathematics at the University of Houston. 
        <br />
        <br />
        Feel free to connect with me on LinkedIn and check out all
        <br />
        my work on Github!
        </h2>

        <div className='flex'>

          <div className='pt-3 pr-1'>
            <a href='https://www.linkedin.com/in/ashish-job/'>
              <img src='/linkedin.svg' className='rounded-xl hover:bg-green-hover'></img>
            </a>
          </div>

          <div className='pt-3 pl-1 pr-1'>
            <a href='https://github.com/Ashishjob'>
              <img src='/github.svg' className='rounded-full hover:bg-green-hover'></img>
            </a>
          </div>

          <div className='pt-3 pl-1'>
            <a href='/resume.pdf'>
              <img src='/resume.png' className='rounded-xl hover:bg-green-hover'></img>
            </a>
          </div>

        </div>


      </div>

      <div className="absolute top-96 pl-64">
        <hr className="w-1 h-48 bg-green border0 rounded dark:bg-green"></hr>
      </div>

      <div className="absolute left-1/3 pl-64">
        <hr className="fixed w-1 top-56 h-96 bg-green border0 rounded dark:bg-green"></hr>
        <hr className="fixed w-1 bottom-28 h-96 bg-green border0 rounded dark:bg-green"></hr>
      </div>

      <div className='absolute top-52 py-2 left-1/2 text-green text-start'>
        
        <div className='py-3'>
          <h1 className='w-27 font-semibold text-2xl text-decoration-line: hover:underline pb-2 '>
            Undergraduate Researcher @ SAIL Lab
          </h1>

          <h2 className='py-1 pl-6 pr-16 text-lg'>
            I drew data to import into nerfstudio, a Neural Embedded Radiance Field software, to render the image into 3-Dimensions to detect flaws in civil infrastructure.
          </h2>
        </div>

        <div className='py-3'>
          <h1 className='w-27 font-semibold text-2xl text-decoration-line: hover:underline pb-2 '>
            Logistics Director @ DataCON
          </h1>

          <h2 className='py-1 pl-6 pr-16 text-lg'>
          I lead a team of 6 members to organize the hosting responsibilities in venue, food, and scheduling for the first Datathon at the University of Houston. 
          </h2>
        </div>

        <div className='py-3'>
          <h1 className='w-27 font-semibold text-2xl text-decoration-line: hover:underline pb-2 '>
            Cybersecurity Intern @ Chrysallis.AI
          </h1>
            
          <h2 className='py-1 pl-6 pr-16 text-lg'>
              I led a team held in charge of comprehensively comparing the company's security policies wth a gap analysis.
          </h2>
        </div>

        <div className='py-3'>
          <h1 className='w-27 font-semibold text-2xl text-decoration-line: hover:underline pb-2 '>
            Logistics Officer @ CodeRED
          </h1>

          <h2 className='py-1 pl-6 pr-16 text-lg'>
            I worked as a logistics officer and handled securing food vendors, venue booking, and scheduling arrangements at Houston's largest hackathon.
          </h2>
        </div>
        
        <div className='py-3'>
          <h1 className='w-27 font-semibold text-2xl text-decoration-line: hover:underline pb-2 '>
            Web Developer @ CougarCS WebDev
          </h1>

          <h2 className='py-1 pl-6 pr-16 text-lg'>
            I worked to construct the frontend of the admin portal of the organization to allow for easier user interaction.
          </h2>
        </div>

        {/* <div className='py-2'>
          <h1 className='w-27 font-semibold text-2xl text-decoration-line: hover:underline pb-2 '>
            "Hacker" @ CougarCS InfoSec
          </h1>

          <h2 className='py-1 pl-6 pr-16 text-lg'>
            I worked to construct applications to scrape opensourced data in order to provide immediate news concerning cybsersecurity.
          </h2>
        </div> */}

      </div>
    </main>
  )
}
