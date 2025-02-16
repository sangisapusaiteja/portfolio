import React from "react";

const EmailVertical = ({
  email = "tejasai38409@gmail.com",
  isWhiteBackground,
}) => {
  return (
    <div className="fixed bottom-10 right-5 sm:bottom-8 sm:right-8 md:bottom-6 md:right-6 lg:bottom-10 lg:right-10 flex flex-col items-center text-white">
      {/* Vertical Email Text */}
      <a
        href={`mailto:${email}`}
        className={`flex flex-col items-center text-purple-500 text-sm leading-none 
          ${isWhiteBackground ? "hover:text-black" : "hover:text-purple-300"} 
          transition-colors duration-200 font-semibold`}
        aria-label={`Email me at ${email}`}
      >
        {Array.from(email).map((char, index) => (
          <span key={index} className="rotate-90 -mt-1">
            {char}
          </span>
        ))}
      </a>
      {/* Vertical Line */}
      <div className="flex justify-center items-center mt-2">
        <hr className="w-px h-24 bg-purple-500" />
      </div>
    </div>
  );
};

export default EmailVertical;
