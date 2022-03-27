import { CgLivePhoto } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";
import { GoPrimitiveDot, GoDeviceCameraVideo } from "react-icons/go";
import { IoVideocam } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import VideoModal from "./VideoModal";

function ProjectCard({ project }) {
  const [techId, settechId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const displayText = (id) => {
    settechId(id);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div class="flex justify-between m-6">
      <div class="flex flex-col h-full max-w-lg mx-auto bg-gray-800 rounded-lg">
        <img
          class="rounded-lg rounded-b-none"
          src={project?.image}
          alt="thumbnail"
          loading="lazy"
        />
        <VideoModal
          setIsOpen={setIsOpen}
          openModal={isOpen}
          url={project.demo}
        />
        <div class="flex justify-between -mt-4 px-4">
          {project.livesite ? (
            <button
              onClick={() => window.open(project.livesite)}
              className="flex  ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5"
            >
              <GoPrimitiveDot className="text-lg text-green-400 animate-ping" />
              Live Site
            </button>
          ) : (
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center  ring-4 bg-green-200 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-800 px-3 pt-0.5"
            >
              <GoDeviceCameraVideo className="text-lg mr-1 text-gray-800 " />
              Watch Demo
            </button>
          )}
          <button
            onClick={() => window.open(project.githubRepo)}
            className="flex hover:bg-gray-100 h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium"
          >
            <AiFillGithub className="text-lg text-gray-200 hover:text-gray-800 mr-2" />
            View Code
          </button>
        </div>
        <div class="py-2 px-4">
          <h1 class="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer">
            <a href="blog/detail">{project.name}</a>
          </h1>
        </div>
        <div class="px-4 space-y-2">
          <p class="text-gray-400 font-normal leading-5 tracking-wide">
            {project.description}
          </p>
        </div>
        <div class="flex flex-row items-end h-full w-full px-4 mt-4">
          <div class="flex flex-col border-t border-gray-700 w-full py-4">
            <h3 className="text-gray-300 text-xl">Tech Stack</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
