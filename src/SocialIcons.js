import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = ({ isWhiteBackground }) => {
  console.log(isWhiteBackground, "isWhiteBackground");

  return (
    <div className="fixed bottom-10 left-5 sm:bottom-8 sm:left-8 md:bottom-6 md:left-6 lg:bottom-10 lg:left-10 flex flex-col space-y-4 text-white">
      <a
        href="https://github.com/sangisapusaiteja"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-purple-500 ${
          isWhiteBackground ? "hover:text-black" : "hover:text-white"
        }`}
      >
        <FontAwesomeIcon icon={faGithub} className="text-2xl md:text-3xl lg:text-4xl" />
      </a>

      <a
        href="https://www.instagram.com/mr._.teja_/profilecard/?igsh=MXBzaGdlYW90YjJp"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-purple-500 ${
          isWhiteBackground ? "hover:text-black" : "hover:text-white"
        }`}
      >
        <FontAwesomeIcon icon={faInstagram} className="text-2xl md:text-3xl lg:text-4xl" />
      </a>

      <a
        href="https://www.linkedin.com/in/sangisapusaiteja/"
        target="_blank"
        rel="noopener noreferrer"
        className={`text-purple-500 ${
          isWhiteBackground ? "hover:text-black" : "hover:text-white"
        }`}
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-2xl md:text-3xl lg:text-4xl" />
      </a>


      <div className="flex justify-center items-center h-full">
        <hr className="w-px h-24 bg-purple-500" />
      </div>
    </div>
  );
};

export default SocialIcons;
