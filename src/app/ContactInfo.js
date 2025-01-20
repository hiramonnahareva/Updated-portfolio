import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactInfo() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_kb5zotq",
        "template_hx4vy36", 
        form.current,
        "QPsBNRpvFsbr7Kbf4"
      )
      .then(
        (result) => {
         toast.success( "Wow! Message sent successfully.");
        },
        (error) => {
         toast.error("Opps! Something wants wrong.");
        }
      );
  }; 

  return (
    <div className="h-screen mb-10 flex mx-6 items-center justify-center">
      <div className="pro p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Let’s Talk</h2>
            <p className="text-gray-400 mb-6">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div className="mb-4">
              <p className="text-lg font-semibold">Email:</p>
              <a
                href="mailto:hiramoneva@gmail.com"
                className="text-pink-500 hover:underline"
              >
                hiramoneva@gmail.com
              </a>
            </div>

            <div className="mb-4">
              <p className="text-lg font-semibold">Social:</p>
              <a href="#" className="text-pink-500 hover:underline mr-4">
                LinkedIn
              </a>
              <a href="#" className="text-pink-500 hover:underline">
                GitHub
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              action="#"
              method="POST"
              className="space-y-4"
            >
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  placeholder="John I"
                  className="w-full p-3 rounded-md dark:bg-transparent border focus:outline-none focus:border-pink-500"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  required
                  className="w-full p-3 rounded-md dark:bg-transparent border  focus:outline-none focus:border-pink-500"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Tell me about your needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message here..."
                  className="w-full p-3 rounded-md dark:bg-transparent border  focus:outline-none focus:border-pink-500" required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F6826F] text-white to-[#FA4FCA] font-semibold py-3 rounded-md flex items-center justify-center"
              >
                Send
                <svg
                  className="ml-2 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
}
