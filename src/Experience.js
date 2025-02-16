import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer @ TECHVED Consulting",
      duration: "january 2025 - Present",
      responsibilities: [
        "Developing frontend using React.js, Next.js, Tailwind CSS",
        "Working on backend with Node.js, Supabase, PostgreSQL",
        "Building full-stack features & optimizing performance",
        "Managing databases & API integrations.",
      ],
    },
    {
      title: "Fullstack Developer @ Sumeru Solutions",
      duration: "january 2024 - December 2024",
      responsibilities: [
        "Deliver high-quality, robust production code for a diverse range of projects, providing effective solutions for clients such as Art of Living International.",
        "Collaborate with creative directors to research, develop, and architect technical solutions that align with business goals.",
        "Work closely with designers, project managers, and fellow engineers to translate creative concepts into practical applications.",
        "Lead engineering efforts by sharing knowledge, offering mentorship, and fostering a collaborative atmosphere.",
      ],
    },
  ];

  return (
    <section className="  h-screen flex flex-col justify-center items-center p-5  md:mt-0">
      <div className="w-4/5">
        <h2 className="text-purple-500 text-xl sm:text-2xl font-none">
          &lt;Experience&gt;
        </h2>
        <div className="  text-sm md:text-xl">
          {experiences.map((exp, index) => (
            <article key={index} className="mb-10">
              <h3 className=" font-semibold">{exp.title}</h3>
              <p>{exp.duration}</p>
              <ul className="list-disc list-inside">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <h2 className="text-purple-500 text-xl sm:text-2xl font-none ">
          &lt;/Experience&gt;
        </h2>
      </div>
    </section>
  );
};

export default Experience;
