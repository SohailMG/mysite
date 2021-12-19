import Sidebar from "../components/Sidebar";
import projectsList from '../components/Projects.js'
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
        <div className="Projects flex items-start">
          <Sidebar />
          <main className="p-2 md:p-10">
            <div className="grid">
            {projectsList.map((project) => (
              <ProjectCard key={project.id} project={project} />
              ))}
              </div>
          </main>
        </div>
      </div>
    );
}

export default projects
