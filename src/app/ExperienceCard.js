import React from "react";

const ExperienceCard = ({ title, role, date, description, icons }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-[400px] mx-auto transition-transform hover:scale-105">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-4">
        {/* <img
          src="/logo.png" // Add a placeholder logo
          alt={`${title} logo`}
          className="w-12 h-12 rounded-full"
        /> */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            {title}
          </h3>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      {/* Dates */}
      <p className="text-sm text-gray-400 mb-4">{date}</p>

      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">{description}</p>

      {/* Icons */}
      {/* <div className="flex space-x-4">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="transition-transform transform hover:scale-110"
          > */}
            {/* <img
              src={icon.color}
              alt={icon.alt}
              className="h-10 w-10 grayscale hover:grayscale-0 transition-all"
            /> */}
          {/* </div>
        ))}
      </div> */}
    </div>
  );
};

export default ExperienceCard;
