import { CgLivePhoto } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Image from "next/image";
function ProjectCard({ project }) {
  const [techId, settechId] = useState(null);
  const displayText = (id) => {
    settechId(id);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="animate__animated animate__fadeInUp flex items-start flex-col md:flex-row space-x-4 space-y-4 justify-between   m-4 p-4 py-12 bg-[#213364] shadow-lg rounded-md"
    >
      {/* Left card */}
      <div className="animate__animated animate__fadeInUp flex flex-col md:w-80 space-y-4">
        <h1 className="animate__animated animate__fadeInUp text-3xl text-orange-200">
          {project.name}
        </h1>
        <p className="animate__animated animate__fadeInUp text-xs md:text-lg text-gray-400 text-justify">
          {project.description}
        </p>
        <h3 className="animate__animated animate__fadeInUp text-lg text-orange-200">
          Tech Stack
        </h3>
        <div className="flex gap-2  mt-4 flex-wrap  md:space-y-0">
          {project.techStack.map(({ name, Icon }, index) => (
            <div className="relative">
              <Icon
                key={index}
                onMouseLeave={() => settechId(null)}
                onMouseOver={() => displayText(index)}
                className="text-gray-800 cursor-pointer bg-green-200 p-1 font-semibold rounded-lg  text-3xl"
              />
              {index == techId && (
                <span className="absolute text-gray-200">{name}</span>
              )}
            </div>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {project.livesite && (
            <button
              onClick={() => window.open(project.livesite)}
              className="project-btns"
            >
              <GoPrimitiveDot className="text-lg text-green-400 mr-2 animate-ping" />
              Live Site
            </button>
          )}
          <button
            onClick={() => window.open(project.githubRepo)}
            className="project-btns"
          >
            <AiFillGithub className="text-lg text-gray-800 mr-2" />
            Code
          </button>
        </div>
      </div>
      {/* right card */}
      <div className="animate__animated animate__fadeInUp">
        {project.demo ? (
          <video src={project.demo} width={500} height={500} controls></video>
        ) : (
          <Image
            src={project.image}
            objectFit="contain"
            width={500}
            height={400}
          />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
