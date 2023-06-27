"use client";
import { useState, useEffect } from "react";
import router from "next/router";
import NormalNavbar from "@/components/NavBar";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(`process.env.CONTACT_URL`, {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        setIsSent(true);
        setName("");
        setEmail("");
        setMessage("");
        setIsLoading(false);
        router.push("/Success");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => {
        setIsSent(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSent]);

  return (
    <main className="min-w-screen bg-lightgreen flex min-h-screen flex-col">
      <NormalNavbar />

      <div className="text-green mb-6 mt-36 flex flex-row justify-center text-3xl font-semibold underline md:mt-56 lg:text-4xl">
        CONTACT ME
      </div>

      <div className="bg-lightgreen flex h-4/6 items-center justify-center">
        <form onSubmit={handleSubmit} className="w-5/6 lg:w-1/2">
          <input name="_input" type="hidden" className="hidden" />
          <div className="w-full">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="lg:placeholder:text-md h-10 w-full rounded-lg pl-2 shadow-inner"
              placeholder="Name"
            />
          </div>
          <div className="mt-6 w-full">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="lg:placeholder:text-md h-10 w-full rounded-lg pl-2 shadow-inner"
              placeholder="Email"
            />
          </div>
          <div className="mt-6 w-full">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-24 w-full resize-y rounded-lg bg-gray-200 pl-2 pt-2 shadow-inner placeholder:text-sm lg:placeholder:text-lg"
              placeholder="Enter Your Message Here"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-clear-white text-green relative mt-6 w-1/2 rounded-full p-2 shadow-inner hover:shadow-2xl ${
                isLoading ? "flex items-center justify-center" : ""
              }`}
            >
              {isLoading ? (
                <div className="flex h-10 w-10 items-center justify-center">
                  <div className="border-green h-5 w-5 animate-spin rounded-full border-b-2 py-4"></div>
                </div>
              ) : (
                "Submit!"
              )}
            </button>
          </div>
          {isSent && (
            <p className="text-green mt-2 text-center font-semibold">
              Message Sent!
            </p>
          )}
        </form>
      </div>
    </main>
  );
}

export default Contact;
