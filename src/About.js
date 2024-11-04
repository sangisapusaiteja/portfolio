import React from "react";
import myPhoto from "./assets/images/myphoto.png";
import myCV from "./assets/cv.pdf";

const About = () => {
  const handleCVClick = () => {
    window.open(myCV, "_blank");
  };

  return (
    <div className="flex flex-col justify-center items-center  text-2xl h-screen">
      <div className="flex flex-col md:flex-row items-center md:w-[80%]">
        <img
          src={myPhoto}
          alt="Saiteja"
          className="mb-5 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full  mx-10  border-[3px] border-purple-500"
        />
        <div>
          <h2 className="text-purple-500 text-xl sm:text-2xl font-none pl-[60px]">
            &lt;About&gt;
          </h2>
          <div className="p-5 flex flex-col items-center gap-10 text-sm md:text-xl">
            <p className="w-[80%]">
              I'm Saiteja, a web developer with expertise in front-end and
              back-end tech, skilled in React.js, Next.js, and Tailwind CSS. I
              work as a front-end developer at Sumeru Software Solutions on
              Project MVP for the Art of Living International.
            </p>
            <p className="w-[80%]">
              I’m skilled in Supabase, PostgreSQL, and RESTful APIs for building
              efficient web apps, and I have experience in mechanical design and
              modeling with tools like CATIA V5, AutoCAD, SolidWorks, and ANSYS.
            </p>
            <p className="w-[80%]">
              I’m eager to learn, seeking challenges that expand my expertise. I
              aim to make a meaningful impact through both front-end and
              back-end development.
            </p>

            <button
              onClick={handleCVClick}
              className="w-[80%] border border-purple-500 text-purple-500 px-4 py-2 rounded hover:text-white hover:bg-purple-500 transition duration-300"
            >
              View My Resume
            </button>
          </div>
          <h2 className="text-purple-500 text-xl sm:text-2xl font-none pl-[60px]">
            &lt;/About&gt;
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
