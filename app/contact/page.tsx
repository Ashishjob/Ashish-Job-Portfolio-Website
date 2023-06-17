"use client";
import NormalNavbar from '@/components/NavBar';
import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    setTimeout(() => {

      setName('');
      setEmail('');
      setMessage('');

      setIsLoading(false);
      setIsSent(true);

      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }, 2000);
  };

  return (
    <main className="flex flex-col min-h-screen min-w-screen bg-lightgreen">
      <NormalNavbar />

      <div className='flex flex-row justify-center mt-36 md:mt-56 text-3xl lg:text-4xl font-semibold text-green mb-6'>
        CONTACT ME
      </div>

      <div className='flex flex-row justify-center mb-6'>
        <div className={`relative md:w-1/3 w-56 ${name ? 'border-green' : ''}`}>
          <input
            className="bg-white border-1 border-green text-green text-sm rounded-lg block w-full p-4"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

      <div className='flex flex-row justify-center mb-6'>
        <div className={`relative md:w-1/3 w-56 ${email ? 'border-green' : ''}`}>
          <input
            className="bg-white border-1 border-green text-green text-sm rounded-lg block w-full p-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className='flex flex-row justify-center mb-6'>
        <div className={`relative md:w-1/3 w-56 ${message ? 'border-green' : ''}`}>
          <textarea
            className="resize-y bg-white border-1 border-green text-green text-sm rounded-lg block w-full p-4"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>

      <div className='flex flex-row justify-center'>
        <div className="relative md:w-1/6 w-24">
          <button
            className="resize-y bg-white border-1 border-green text-green text-sm rounded-lg block w-full p-4 font-semibold hover:bg-textbox-green"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className='flex flex-row justify-center'>
                <svg
                  className="animate-spin h-5 w-5 mr-3 justify-center"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </div>

      {isSent && (
        <div className="flex flex-row font-semibold justify-center mt-4 text-green">
          Message sent!
        </div>
      )}
    </main>
  );
}

export default Contact;
