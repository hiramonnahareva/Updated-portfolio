import React from 'react'

export default function Blogs() {
  return (
    <section>
    <div className="mb-6 lg:w-[56%] lg:mx-auto mx-[20px]">
      <span className="mt-2 text-pink-500 text-[18px] pro-btn px-4 py-1 rounded-full font-medium">Blogs</span>
      <h2 className="text-2xl md:text-3xl font-bold mt-4">
        Resources that help you
      </h2>
    </div>
   <div className="lg:flex justify-center mx-[20px] gap-6 mt-12">
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {Array(2)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-dark-gradient rounded-lg shadow-lg p-8 hover:scale-95 duration-700 transition-transform"
          >
            <h3 className="text-lg font-medium">How you can be a good Developer</h3>
            <p className="text-gray-400 mt-2">25 Feb 2023 - 10 Min Read </p>
          </div>
        ))}
    </div>
        <div className="bg-dark-gradient border border-[#FA4FCAB2] rounded-lg flex jusity-center items-center shadow-lg p-8 hover:scale-95 duration-700 transition-transform"
          >
            <h3 className="text-lg font-medium">Learn More  → </h3>
          </div>
   </div>
  </section>
  )
}
