import tictactoe from "./assets/images/tictactoe.png";
import hotstar from "./assets/images/hotstar.png";
import PokemonFinder from "./assets/images/PokemonFinder.png";
import Portfolio from "./assets/images/Portfolio.png";
import ConnectTogether from "./assets/images/ConnectTogether.png";
import SkillConnect from "./assets/images/SkillConnect.png";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Skill Connect",
      description:
        "Skill Connect is a unique platform built with Next.js that lets users discover and connect with people based on skills they admire. Users can match with like-minded individuals and chat in real time through a responsive and engaging interface.",
      tags: ["Next.js", "Tailwind CSS", "WebSockets", "Supabase"],
      imageUrl: SkillConnect,
      links: {
        github: "https://skillconnect-2025.vercel.app/",
      },
    },

    {
      title: "Connect Together",
      description:
        "Connect Together is a full-stack, real-time chat application built with Next.js, Tailwind CSS, and Supabase (PostgreSQL). It supports one-on-one and group chats, room creation, room entry, profile picture uploads, and real-time messaging, all with a responsive and engaging UI.",
      tags: ["Next.js", "Tailwind CSS", "WebSockets", "Supabase", "PostgreSQL"],
      imageUrl: ConnectTogether,
      links: {
        github: "http://connect-together-st.vercel.app/",
      },
    },

    {
      title: "Portfolio Website",
      description:
        "I built a modern, responsive portfolio website using React and Tailwind CSS, showcasing my skills and projects. It features a contact form for inquiries and a color theme toggle for light and dark modes.",
      tags: ["VS Code", "React.js", "Tailwind CSS"],
      imageUrl: Portfolio,
      links: {
        github: "#",
      },
    },
    {
      title: "TIC TAC TOE",
      description:
        "Dive into the world of strategic gameplay with my React and Tailwind CSS-powered Tic Tac Toe game. Challenge a friend a thrilling match of wits. Experience the classic fun of X's and O's, beautifully rendered and optimized for a seamless gaming experience.",
      tags: ["VS Code", "React.js", "Tailwind CSS"],
      imageUrl: tictactoe,
      links: {
        github: "https://sangisapusaiteja.github.io/tic-tac-toe/",
      },
    },
    {
      title: "Hotstar Clone",
      description:
        "Experience the future of entertainment with my frontend clone of Hotstar. This project replicates the sleek design, intuitive navigation, and rich user experience of the original platform.",
      tags: ["VS Code", "HTML", "CSS", "Tailwind CSS"],
      imageUrl: hotstar,
      links: {
        github: "https://sangisapusaiteja.github.io/hotstar-clone/",
      },
    },
    {
      title: "Pokémon Finder",
      description:
        "The Pokémon Finder app is an interactive web application built with React that allows users to search for any Pokémon by name. Simply enter the desired Pokémon name into the input field, and the app will fetch and display the corresponding image along with essential details. It's a fun and engaging way to explore the diverse world of Pokémon!",
      tags: ["VS Code", "React.js", "Tailwind CSS"],
      imageUrl: PokemonFinder,
      links: {
        github: "https://sangisapusaiteja.github.io/pokemon-finder/",
      },
    },
  ];

  return (
    <section className="flex  h-full  flex-col justify-center items-center text-2xl  md:pt-[70px]  p-5">
      <div className="flex flex-col items-start w-[80%] md:w-full  max-w-6xl  md:px-8">
        <h2 className="text-purple-500 text-xl sm:text-2xl font-none">
          &lt;Projects&gt;
        </h2>
        <section className="p-2 flex flex-col gap-6 w-full mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center border border-purple-500  shadow-lg p-3 md:p-6  ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative group w-full md:w-1/2 lg:w-2/3">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.links.github}
                    target={
                      project.title === "Portfolio Website" ? "_self" : "_blank"
                    }
                    rel={
                      project.title === "Portfolio Website"
                        ? ""
                        : "noopener noreferrer"
                    }
                  >
                    <button className="border-purple-500 border-2 px-4 py-1 rounded text-sm text-white">
                      Visit Website
                    </button>
                  </a>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl text-purple-500 font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-sm md:text-xl mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="border border-purple-500 px-2 py-0.5 rounded text-sm text-purple-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>
        <h2 className="text-purple-500 text-xl sm:text-2xl font-none ">
          &lt;/Projects&gt;
        </h2>
      </div>
    </section>
  );
}
