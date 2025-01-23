import emailjs from "@emailjs/browser";
import { GoArrowUpRight } from "react-icons/go";
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
    <div className="mt-20 mb-20 flex lg:px-20 px-[20px] items-center justify-center">
      <div className="pro md:p-16 p-[20px] rounded-lg shadow-lg w-full max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
          {/* Left Section */}
          <div>
          <span className="mt-2 text-pink-500 text-[18px] pro-btn px-4 py-1 rounded-full font-medium">
              Contact
            </span>
            <h2 className="text-3xl font-bold md:my-8 my-4">Let’s Talk</h2>
            <p className="text-[#5D5C5D] md:mb-8 mb-4">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <div className="mb-6 flex flex-col">
              <p className="text-lg text-gradient">Email:</p>
             
              <a
                href="mailto:hiramoneva@gmail.com"
              >
                hiramoneva@gmail.com
              </a>
            </div>

            <div className="mb-6">
              <p className="text-lg text-gradient ">Social:</p>
              <a href="#" className="flex items-center mb-2 gap-1">
                LinkedIn  <GoArrowUpRight className="text-xl ml-1" />
              </a>
              <a href="#" className="flex items-center gap-2">
                GitHub  <GoArrowUpRight className="text-xl ml-1" />
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
                  className="w-full p-3 rounded-md dark:bg-[#170111] dark:placeholder:text-[#4f394a] border focus:outline-none focus:border-pink-500"
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
                  className="w-full p-3 rounded-md dark:bg-[#170111] dark:placeholder:text-[#4f394a] border  focus:outline-none focus:border-pink-500"
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
                  className="w-full p-3 rounded-md dark:bg-[#170111] dark:placeholder:text-[#4f394a] border  focus:outline-none focus:border-pink-500" required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F6826F] text-white to-[#FA4FCA]  py-3 rounded-md flex items-center justify-center"
              >
                Send
                <GoArrowUpRight className="text-xl ml-1" />
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
