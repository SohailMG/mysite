const skills = [
  { id: 11, skill: "Git", icon: "devicon-git-plain-wordmark colored" },
  {
    id: 22,
    skill: "Firebase",
    icon: "devicon-firebase-plain-wordmark colored",
  },
  { id: 33, skill: "Nextjs", icon: "devicon-nextjs-original colored" },
  {
    id: 44,
    skill: "Reactjs",
    icon: "devicon-react-original-wordmark colored",
  },
  { id: 55, skill: "Redux", icon: "devicon-redux-original colored" },
  { id: 166, skill: "JavaScript", icon: "devicon-javascript-plain colored" },
  { id: 177, skill: "Java", icon: "devicon-java-plain-wordmark colored" },
  { id: 188, skill: "Spring", icon: "devicon-spring-plain-wordmark colored" },
  { id: 199, skill: "MySQL", icon: "devicon-mysql-plain-wordmark colored" },
  { id: 100, skill: "Vue", icon: "devicon-vuejs-plain-wordmark colored" },
  { id: 112, skill: "HTML", icon: "devicon-html5-plain colored" },
  { id: 121, skill: "CSS", icon: "devicon-css3-plain colored" },
  {
    id: 154,
    skill: "Tailwindcss",
    icon: "devicon-tailwindcss-original-wordmark colored",
  },
];

function LeftHero() {
  return (
    <div className=" p-10 mt-36 flex flex-col items-start">
      {/* Top section of hero */}
      <div className="flex flex-col items-start">
        <h1 className="animate__animated animate__fadeInUp  text-8xl font-semibold text-orange-100">
          Sohail Gsais
        </h1>
        <small className="animate__animated animate__fadeInUp animate__delay-1s text-xs text-orange-300 px-4">
          A computer science student
        </small>
        <button className="animate__animated animate__fadeInUp mt-6 ml-4 bg-orange-500 text-white px-4 p-2 shadow-lg rounded-full text-xs hover:scale-95 transition duration-100 ease-in-out">
          See Projects
        </button>
      </div>
      {/* bottom section of hero */}
      <div className="mt-10">
        <h1 className="animate__animated animate__fadeInUp text-md p-4 text-orange-500">
          Skills -{" "}
        </h1>
        <div className="animate__animated animate__fadeInUp grid grid-cols-4 md:grid-cols-6 md:text-3xl gap-6 ml-16">
          {skills.map((skill) => (
            <i
              key={skill.id}
              className={skill.icon + " text-3xl md:text-6xl"}
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftHero;
