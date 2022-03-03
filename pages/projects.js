import Sidebar from "../components/Sidebar";
import projectsList from "../components/Projects.js";
import ProjectCard from "../components/ProjectCard";
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
        <h1 className="text-6xl font-semibold text-orange-200  p-10">Projects</h1>
          <div className="grid  xl:grid-cols-2">
            {projectsList.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default projects;
