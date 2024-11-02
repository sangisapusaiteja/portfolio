import React, { useState } from "react";
import NavBar from "./NavBar";
import IntroCard from "./IntroCard";
import About from "./About";
import Contact from "./Contact";
import GetInTouch from "./GetInTouch";
import SocialIcons from "./SocialIcons";
import EmailVertical from "./EmailVertical";
import Logo from "./Logo";
import Experience from "./Experience";
import Projects from "./Projects";
import { FaAdjust } from "react-icons/fa";

const App = () => {
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);

  const toggleBackground = () => {
    setIsWhiteBackground(!isWhiteBackground);
  };

  return (
    <div
      className={`overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-800 transition-all duration-500   ${
        isWhiteBackground ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <NavBar isWhiteBackground={isWhiteBackground} />

      <div
        className={`fixed ${
          isWhiteBackground ? "text-black" : "text-white"
        } w-[32px] h-[32px] md:w-12 md:h-12 top-20 right-5 md:right-10`}
      >
        <FaAdjust
          onClick={toggleBackground}
          className={`cursor-pointer ${
            isWhiteBackground ? "hover:text-black" : "hover:text-white"
          }`}
          size={
            window.innerWidth >= 1024 ? 40 : window.innerWidth >= 640 ? 36 : 32
          }
        />
      </div>

      <div id="intro">
        <IntroCard />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        {" "}
        <Experience />{" "}
      </div>
      <div id="projects">
        {" "}
        <Projects />{" "}
      </div>
      <div id="contact">
        {" "}
        <Contact />{" "}
      </div>
      <div id="getintouch">
        {" "}
        <GetInTouch />{" "}
      </div>

      <SocialIcons isWhiteBackground={isWhiteBackground} />
      <EmailVertical isWhiteBackground={isWhiteBackground} />
    </div>
  );
};

export default App;
