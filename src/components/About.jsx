import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="" className="w-full h-64" />
        <article>
          <SectionTitle text="About journey" />
          <p className="text-slate-600 mt-8 leading-loose">
          Senior UI Designer/Developer specializing in front end Design and Development. Well-versed in numerous programming languages including HTML5, JavaScript, CSS, React.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
