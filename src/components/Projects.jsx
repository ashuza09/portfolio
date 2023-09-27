import { projects } from "../data";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

const Projects = () => {
  return (
    <section className="py-20 align-element " id="projects">
      <SectionTitle text="React Projects" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          const { id, img, url, github, title, text } = project;
          return <ProjectCard key={id} {...project} />
        })}
      </div>
    </section>
  );
};
export default Projects;
