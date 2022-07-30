import React from "react";
import { useData } from "../utils/data";
import { FiGithub, FiExternalLink } from "react-icons/fi";
function Projects() {
  const { projects } = useData();
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-6 w-full min-h-full border-b gap-12 dark:text-white dark:bg-gray-900 text-black">
      <h2 className="text-4xl mb-[calc(2.5rem*1)] font-semibold">{projects.sectionTitle}</h2>
      {projects.listOfProjects.map((project, index) => (
        <article
          key={index}
          className={`grid grid-cols-1 md:grid-cols-5 p-2 gap-4 max-w-6xl rounded-md bg-gradient-to-r from-white to-slate-400 dark:bg-gradient-to-r dark:from-[#0c3543] dark:to-[#017582] ${
            index % 2 === 0 && "md:text-right"
          }`}>
          <div
            className={`my-auto md:row-start-1 md:row-end-2 z-20 ${
              index % 2 === 0
                ? "md:order-2 md:col-start-3 md:col-end-7 "
                : "md:col-start-1 md:col-end-4 z-10"
            }`}>
            <h4 className="text-2xl">{project.projectTitle}</h4>
            <h3 className="text-xl font-bold">{project.projectName}</h3>
            <p className="dark:bg-gray-700 bg-slate-400 p-4 rounded-md my-4">
              {project.description()}
            </p>
            <h4 className="">{projects.sectionSubTitle}</h4>
            <ul
              className={`flex flex-wrap gap-4 mb-4 text-sm ${
                index % 2 === 0 && "md:justify-end"
              }`}>
              {project.technologies &&
                project.technologies.map((tech, index) => <li key={index}>{tech}</li>)}
            </ul>
            <ul className={`flex flex-wrap gap-4  ${index % 2 === 0 && "md:justify-end"}`}>
              <a href={project.github} target="_blank" rel="noreferrer">
                <FiGithub className="h-5 w-5 hover:text-white dark:hover:text-gray-900" />
              </a>
              {project.websiteLink && (
                <a href={project.websiteLink} target="_blank" rel="noreferrer">
                  <FiExternalLink className="h-5 w-5 hover:text-white dark:hover:text-gray-900" />
                </a>
              )}
            </ul>
          </div>
          <img
            src={project.image.src}
            alt={project.image.alt}
            className={`max-h-96 w-full md:w-fit md:row-start-1 md:row-end-2 z-0 cursor-pointer grayscale hover:grayscale-0 object-cover  ${
              index % 2 === 0 ? "md:col-start-1 md:col-end-4" : "md:col-start-3 md:col-end-7"
            }`}
          />
        </article>
      ))}
    </section>
  );
}
export default Projects;
