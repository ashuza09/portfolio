import { liveProject } from "../data";
import LiveProjectCard from "./LiveProjectCard";
import SectionTitle from "./SectionTitle";

const LiveProject = () => {
  return (
    <section className="py-20 align-element " id="LiveProjects">
      <SectionTitle text="Live Project" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {liveProject.map((item) => {
          const { id, img, url, github, title } = item;
          return <LiveProjectCard key={id} {...item} />;
        })}
      </div>
    </section>
  );
};
export default LiveProject;
