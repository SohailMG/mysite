import Sidebar from "../components/Sidebar";
import projectsList from "../components/Projects.js";
import ProjectCard from "../components/ProjectCard";
import VideoModal from "../components/VideoModal";
const projects = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url(" + `${require("../assets/home-bg.svg")}` + ")",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="Projects main-container">
        <Sidebar />
        <main className="p-2 md:p-10">
          <h1 className="text-6xl font-semibold text-orange-200  p-10">
            Projects
          </h1>
          <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
            <div class="container">
              <div class="flex flex-wrap justify-center -mx-4">
                {projectsList.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default projects;
