import React from "react";

import Project from "./Project";

import projects from "./projectData.json";

const Projects = () => {
  return (
    <div className="w-full md:px-10 px-5 py-10 lg:py-20">
      {/* title */}
      <div>
        <h1 className="py-4 text-2xl ">پروژه ها</h1>
      </div>

      {/* Cards */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:gap-x-10 md:gap-y-10 gap-5">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
