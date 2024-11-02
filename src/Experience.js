import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Fullstack Developer @ Sumeru Software Solutions",
      duration: "October 2024 - Present",
      responsibilities: [
        "Deliver high-quality, robust production code for a diverse range of projects, providing effective solutions for clients such as Art of Living International.",
        "Collaborate with creative directors to research, develop, and architect technical solutions that align with business goals.",
        "Work closely with designers, project managers, and fellow engineers to translate creative concepts into practical applications.",
        "Lead engineering efforts by sharing knowledge, offering mentorship, and fostering a collaborative atmosphere.",
      ],
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center py-20 mt-[1000px] md:mt-0">
      <div className="w-4/5">
        <h2 className="text-purple-600 text-2xl sm:text-3xl font-semibold pl-14 ">
          &lt;Experience&gt;
        </h2>
        <div className="mt-8 pl-[40px] text-xl">
          {experiences.map((exp, index) => (
            <article key={index} className="mb-8">
              <h3 className=" font-semibold">{exp.title}</h3>
              <p className="">{exp.duration}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <h2 className="text-purple-600 text-2xl sm:text-3xl font-semibold pl-14 ">
          &lt;/Experience&gt;
        </h2>
      </div>
    </section>
  );
};

export default Experience;
