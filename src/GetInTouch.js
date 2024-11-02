import React from "react";
import sai from "./assets/images/sai.png";

const GetInTouch = () => {
  const mailMe = () => {
    window.location.href = "mailto:saitejasangisapu2003@gmail.com";
  };

  return (
    <div className="flex h-screen flex-col lg:flex-row justify-center items-center text-lg pl-[60px] w-[90%]">
      <div className="flex flex-col justify-start items-start sm:items-start max-w-lg lg:mr-10">
        <h2 className="text-purple-500 text-xl sm:text-2xl font-none">
          &lt;GetInTouch&gt;
        </h2>
        <div className="p-5 md:p-0 flex flex-col text-left sm:text-left text-sm md:text-xl">
          <p className="mb-2 sm:mb-4">Get In Touch</p>
          <p className="mb-2 sm:mb-4">
            I’m currently looking for any new opportunities,
          </p>
          <p className="mb-2 sm:mb-4">
            my inbox is always open. Whether you have a question or just want to
            say hi,
          </p>
          <p className="mb-2 sm:mb-4">I’ll try my best to get back to you!</p>
          <p className="mt-2 sm:mt-4">
            Feel free to reach me on
            <a
              href="https://www.linkedin.com/in/sangisapusaiteja/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline mx-1"
            >
              My LinkedIn Profile
            </a>
            ,
            <a
              href="https://github.com/sangisapusaiteja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline mx-1"
            >
              My GitHub Profile
            </a>
            , or
            <a
              href="https://www.instagram.com/mr._.teja_/profilecard/?igsh=MXBzaGdlYW90YjJp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:underline mx-1"
            >
              My Instagram
            </a>
          </p>
          <p className="mb-2 sm:mb-4 mt-4">
            Contact Telephone:{" "}
            <a className="text-purple-500" href="tel:+918247714017">
              +91 82477 14017
            </a>
          </p>
          <button
            onClick={mailMe}
            aria-label="Send me an email"
            className="sm:w-auto border border-purple-500 text-purple-500 px-4 py-2 rounded hover:text-white hover:bg-purple-500 transition duration-300"
          >
            Say Hello
          </button>
        </div>
        <h2 className="text-purple-500 text-xl sm:text-2xl font-none">
          &lt;/ GetInTouch&gt;
        </h2>
      </div>
      {/* Image Section */}
      <img
        src={sai}
        alt="Your Description"
        className="hidden lg:block w-[300px] h-[400px]  border-[3px] border-purple-500"
      />
    </div>
  );
};

export default GetInTouch;
