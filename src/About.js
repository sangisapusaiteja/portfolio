import React from "react";
import myPhoto from "./assets/images/myphoto.png";
import myCV from "./assets/cv.pdf";

const About = () => {
  const handleCVClick = () => {
    window.open(myCV, "_blank");
  };

  return (
    <div className="flex  flex-col justify-center items-end md:items-center  text-2xl h-[1000px]  ml-10 pt-[900px] md:pt-0" >
      <div className="flex flex-col md:flex-row items-center md:w-[80%]">
        <img
          src={myPhoto}
          alt="Saiteja"
          className="mb-5 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full mr-10 md:mr-0 border-[3px] border-purple-500"
        />
        <div>
          <h2 className="text-purple-500 text-2xl sm:text-3xl font-medium pl-[60px]">
            &lt;About&gt;
          </h2>
          <div className="p-5 flex flex-col items-center gap-10 text-xl md:p-0">
            <p className="w-[80%]">
              Hello! I'm Saiteja, a passionate web developer with a strong
              foundation in both front-end and back-end technologies. I
              graduated from SRKR Engineering College and have hands-on
              experience working on diverse projects, particularly using
              React.js, Next.js, and Tailwind CSS. Currently, I am working as a
              front-end developer at Sumeru Software Solutions, where I
              contribute to the development of the Project MVP, an application
              designed for teachers and program organizers of the Art of Living
              International.
            </p>
            <p className="w-[80%]">
              My skill set includes working with Supabase, PostgreSQL, and
              RESTful APIs, allowing me to create robust and efficient web
              applications. Additionally, I have experience in mechanical design
              and modeling, having learned tools like CATIA V5, AutoCAD,
              SolidWorks, and ANSYS.
            </p>
            <p className="w-[80%]">
              I am always eager to learn and grow, seeking opportunities that
              challenge me and help me expand my expertise. Whether it's
              crafting a seamless user experience or developing complex backend
              functionalities, I strive to make a meaningful impact through my
              work.
            </p>

            <button
              onClick={handleCVClick}
              className="w-[80%] border border-purple-500 text-purple-500 px-4 py-2 rounded hover:text-white hover:bg-purple-500 transition duration-300"
            >
              View My Resume
            </button>
          </div>
          <h2 className="text-purple-500 text-2xl sm:text-3xl font-medium pl-[60px]">
            &lt;/ About&gt;
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
