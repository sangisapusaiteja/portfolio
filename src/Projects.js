import React from "react";
import tictactoe from "./assets/images/tictactoe.png";
import hotstar from "./assets/images/hotstar.png";
import PokemonFinder from "./assets/images/PokemonFinder.png";
import Portfolio from "./assets/images/Portfolio.png";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "I built a modern, responsive portfolio website using React, Tailwind CSS, and minimal backend integration. The site showcases my experience, skills, and projects with a sleek, user-friendly design. It includes a contact form that allows visitors to submit inquiries, which I receive via email. Additionally, I implemented a smooth color theme toggle, enabling users to switch between light and dark modes for an enhanced viewing experience.",
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
    <section className="flex h-full flex-col justify-center items-center text-2xl pt-[50px] md:pt-[70px]">
      <div className="flex flex-col items-start w-[80%] max-w-6xl px-4 md:px-8">
      <h2 className="text-purple-600 text-2xl sm:text-3xl font-semibold pl-14 ">
          &lt;Projects&gt;
        </h2>
        <section className="p-2 flex flex-col gap-6 w-full mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center border border-purple-500 shadow-lg p-3 md:p-6 rounded-lg ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="relative group w-full md:w-1/2 lg:w-2/3">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-lg"
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
                <p className="text-base md:text-lg mb-3">{project.description}</p>
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
        <h2 className="text-purple-600 text-2xl sm:text-3xl font-semibold pl-14 ">
          &lt;/ Projects&gt;
        </h2>
      </div>
    </section>
  );
}