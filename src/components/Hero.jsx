import heroImg from "../assets/hero.svg";
import { FaFacebook, FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">It`s Ashutosh</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            Converting ideas into reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/ashuza09">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-slate-600 duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/ashutosh-bhardwaj-8342a397/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-slate-600 duration-300" />
            </a>
            <a href="https://twitter.com/ashuza09">
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-slate-600 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
            <img src={heroImg} alt="" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  );
};
export default Hero;
