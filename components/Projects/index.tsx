import Card from "./Card";
import { projects } from "../../data";

function Projects() {
  return (
    <div className="">
      {projects.map((project) => (
        <Card project={project} key={project.id} />
      ))}
    </div>
  );
}

export default Projects;
