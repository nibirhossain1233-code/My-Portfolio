"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Website design",
    "App mobile design",
    "App desktop",
    "Braiding",
  ];

  const projects = [
    { id: 1, image: "project-1.png", category: "Website design" },
    { id: 2, image: "project-2.png", category: "App mobile design" },
    { id: 3, image: "project-3.png", category: "App desktop" },
    { id: 4, image: "project-2.png", category: "Braiding" },
    { id: 5, image: "project-1.png", category: "Website design" },
    { id: 6, image: "project-3.png", category: "App desktop" },
    { id: 7, image: "project-1.png", category: "App mobile design" },
    { id: 8, image: "project-3.png", category: "Braiding" },
    { id: 9, image: "project-2.png", category: "Website design" },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="portfolio"
      className="max-w-[1440px] mx-auto px-5 lg:px-20 py-24"
    >
      <SectionHeading title="Portfolio" />

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-14">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 md:px-10 py-3 md:py-4 rounded-lg text-sm md:text-base font-bold transition ${
              activeCategory === category
                ? "bg-gradient-to-r from-[#fd6f00] to-[#e46400] text-white"
                : "bg-white/[0.08] text-[#c6c6c6] hover:bg-white/[0.15]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden rounded-2xl group"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={`/images/${project.image}`}
                alt={`Project ${project.id}`}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 415px"
                className="object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="bg-white/[0.08] p-4 flex items-center justify-between gap-2">
              <h3 className="text-sm md:text-base font-bold text-[#c6c6c6]">
                Name Project
              </h3>

              <span className="text-xs md:text-sm text-[#959595]">
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;