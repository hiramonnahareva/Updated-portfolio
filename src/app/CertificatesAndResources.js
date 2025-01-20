import Image from "next/image";
import certificate1 from "./PhHero.jpg";
import certificate2 from "./Harvard.png";

export default function CertificatesAndResources() {
    return (
      <div className="py-12 px-4 md:px-12 space-y-16"> 
        {/* Certificates Section */}
        <section className="lg:flex lg:flex-row md:flex-col justify-between items-center gap-20 lg:mx-24 mx-4">
          <div className="mb-6 flex-1">
            <span className="mt-2 text-pink-500 text-[18px] pro-btn px-4 py-1 rounded-full font-medium">Certificates</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-6">
              Tools that help Develop and Consistent at my
            </h2>
            <p className="text-gray-400 md:text-base mt-4">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="mt-6"> 
            <a
              href="#"
              className="text-gradient hover:underline font-medium"
            >
              More about me <span className="ml-2">&rarr;</span>
            </a>
          </div>  
          </div>

          <div className="flex lg:flex-row flex-col flex-2 gap-4 py-4">
            <a href="https://drive.google.com/file/d/16legtf0JV6d2wb4GH0b8YsiBCOcvJQ6O/view" target="_blank" className="flex-shrink-0 cer-border rounded-lg p-2 shadow-lg hover:scale-95 duration-700 transition-transform">
              <Image
                src={certificate1 }
                alt="Certificate 1"
                className="grayscale hover:grayscale-0 duration-700 rounded-lg lg:w-[353px] h-auto"
              />
            </a>
            <a  href="https://certificates.cs50.io/1c0331ef-9e19-4cc3-84e3-f354a6dc608f.pdf?size=letter" target="_blank" className="flex-shrink-0 cer-border rounded-lg p-2 shadow-lg hover:scale-95 duration-700 transition-transform">
              <Image
                src={certificate2 }
                alt="Certificate 2"
                className="grayscale hover:grayscale-0 duration-700 rounded-lg lg:w-[353px] h-auto"
              />
            </a>
          </div>
         
        </section>
  
        {/* Resources Section */}
        <section>
          <div className="text-center mb-6">
            <span className="mt-2 text-pink-500 text-[18px] pro-btn px-4 py-1 rounded-full font-medium">Resources</span>
            <h2 className="text-2xl md:text-3xl font-bold mt-4">
              Resources that help you
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:w-[80%] mx-[20px] lg:mx-auto mt-12">
            {Array(3)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-dark-gradient border border-[#2A2A2A] rounded-lg shadow-lg p-4 hover:scale-95 duration-700 transition-transform"
                >
                  <div className="bg-[#2A2A2A] rounded-lg h-56"></div>
                  <h3 className="mt-8 text-lg font-medium">CV for Developer</h3>
                  <p className="text-gray-400 mt-2">
                    This website is a full-stack project. <br /> This is created as a Responsive <br /> web application.
                  </p>
                  <a
                    href="#"
                    className="text-gradient hover:underline font-medium my-4 inline-block"
                  >
                    Download Now &rarr;
                  </a>
                </div>
              ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="#"
              className="mt-6 inline-block btn-bg text-black py-2 px-6 rounded-lg shadow hover:bg-pink-600"
            >
              See All &rarr;
            </a>
          </div>
        </section>
      </div>                                                                                                                                    
    );                                                                                                                                                    
  }
  