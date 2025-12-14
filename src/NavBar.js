import { useState, useEffect } from "react";
import Resume from "./assets/Saiteja-Sangisapu-Resume.pdf";
import Logo from "./Logo";

const NavBar = ({ isWhiteBackground }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleSmoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const handleCVClick = () => {
    window.open(Resume, "_blank");
  };

  const controlNavBarVisibility = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // Hide navbar on scroll down
    } else {
      setIsVisible(true); // Show navbar on scroll up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBarVisibility);
    return () => {
      window.removeEventListener("scroll", controlNavBarVisibility);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex items-center justify-end px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 z-20 transition-transform duration-300 ${
        isWhiteBackground
          ? "bg-white text-black shadow-lg"
          : "bg-black text-white"
      }`}
    >
      <Logo isWhiteBackground={isWhiteBackground} />

      {/* Hamburger Icon */}
      <div
        className={`ml-auto cursor-pointer md:hidden text-2xl transition-transform duration-300 ${
          isMenuOpen ? "rotate-90" : "rotate-0"
        }`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? "✕" : "☰"}
      </div>

      {/* Menu Items */}
      <ul
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row md:justify-end items-center absolute md:static top-12 left-0 w-full md:w-auto ${
          isWhiteBackground ? "text-black bg-white" : "text-white bg-black"
        } md:text-inherit z-10 p-4 md:p-0 overflow-y-auto max-h-[70vh] md:max-h-full space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300`}
      >
        <li>
          <a
            href="#intro"
            onClick={(e) => handleSmoothScroll(e, "intro")}
            className="hover:text-purple-500"
          >
            Intro
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "about")}
            className="hover:text-purple-500"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#experience"
            onClick={(e) => handleSmoothScroll(e, "experience")}
            className="hover:text-purple-500"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "projects")}
            className="hover:text-purple-500"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "contact")}
            className="hover:text-purple-500"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="#getintouch"
            onClick={(e) => handleSmoothScroll(e, "getintouch")}
            className="hover:text-purple-500"
          >
            Get In Touch
          </a>
        </li>
        <li>
          <button
            onClick={handleCVClick}
            className="border border-purple-500 text-purple-500 px-4 py-2 rounded hover:text-white hover:bg-purple-500 transition duration-300"
          >
            View My Resume
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
