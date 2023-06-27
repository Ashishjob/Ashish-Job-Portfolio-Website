"use client";
import NormalNavbar from "@/components/NavBar";
import router from "next/router";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    console.log(formData);
    const req = await fetch(
      "https://getform.io/f/9f318209-bcfc-4d11-9087-84e68654599a",
      {
        method: "POST",
        body: formData,
      }
    );
    if (req.status === 200) {
      router.push("/Success");
    }
  };

  return (
    <main className="min-w-screen bg-lightgreen flex min-h-screen flex-col">
      <NormalNavbar />

      <div className="text-green mb-6 mt-36 flex flex-row justify-center text-3xl font-semibold underline md:mt-56 lg:text-4xl">
        CONTACT ME
      </div>

      <div className="bg-lightgreen flex h-4/6 items-center justify-center">
        <form onSubmit={handleSubmit} className="w-5/6 lg:w-1/2">
          <input name="_input" type="hidden" className="hidden"></input>
          <div className="w-full">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="lg:placeholder:text-md h-10 w-full rounded-lg pl-2 shadow-inner"
              placeholder="Name"
            ></input>
          </div>
          <div className="mt-6 w-full">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="lg:placeholder:text-md h-10 w-full rounded-lg pl-2 shadow-inner"
              placeholder="Email"
            ></input>
          </div>
          <div className="mt-6 w-full">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-24 w-full resize-y rounded-lg bg-gray-200 pl-2 pt-2 shadow-inner placeholder:text-sm lg:placeholder:text-lg"
              placeholder="Enter Your Message Here"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-clear-white text-green mt-6 w-1/2 rounded-full p-2 shadow-inner hover:shadow-2xl">
              Submit!
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Contact;
