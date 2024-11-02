import React from "react";

const Logo = ({ isWhiteBackground }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed top-3 left-5 md:left-10 ">
      <div
        onClick={scrollToTop}
        className={`flex justify-center items-center w-[32px] h-[32px] md:w-12 md:h-12 border-2 border-purple-500 rounded-full text-2xl md:text-3xl text-purple-500 
          ${
            isWhiteBackground
              ? "hover:text-black hover:border-black"
              : "hover:text-white hover:border-white"
          } 
          transition-colors duration-200 cursor-pointer`}
      >
        ઽե
      </div>
      {/* You can add additional icons or elements here for larger screens if needed */}
    </div>
  );
};

export default Logo;
