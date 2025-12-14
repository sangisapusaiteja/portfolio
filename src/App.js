import { useState } from "react";
import NavBar from "./NavBar";
import IntroCard from "./IntroCard";
import About from "./About";
import Contact from "./Contact";
import GetInTouch from "./GetInTouch";
import SocialIcons from "./SocialIcons";
import EmailVertical from "./EmailVertical";
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
      className={`relative min-h-screen overflow-y-auto scroll-smooth transition-colors duration-500
    scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-800
    ${isWhiteBackground ? "bg-white text-black" : "bg-black text-white"}
  `}
    >
      {/* Navbar */}
      <NavBar isWhiteBackground={isWhiteBackground} />

      {/* Main Content */}
      <main className="mx-auto flex max-w-8xl flex-col gap-32 px-6 md:px-10 py-20">
        {/* Theme Toggle */}
        <button
          onClick={toggleBackground}
          aria-label="Toggle theme"
          type="button"
          className={`fixed top-20 right-6 md:top-24 md:right-10 z-50 flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-full border backdrop-blur-md transition-all duration-300 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isWhiteBackground
              ? "border-black/20 text-black hover:bg-black hover:text-white focus:ring-black"
              : "border-white/20 text-white hover:bg-white hover:text-black focus:ring-white"
          }
`}
        >
          <FaAdjust className="text-xl md:text-2xl" />
        </button>

        <section id="intro">
          <IntroCard />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="getintouch">
          <GetInTouch />
        </section>
      </main>

      {/* Floating Socials */}
      <SocialIcons isWhiteBackground={isWhiteBackground} />
      <EmailVertical isWhiteBackground={isWhiteBackground} />
    </div>
  );
};

export default App;
