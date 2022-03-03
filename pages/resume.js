import EduBox from "../components/EduBox";
import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { ResumeData } from "../resume-data";
import { IoIosSchool } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import SkillBox from "../components/SkillBox";
import { useState } from "react";
import ExpBox from "../components/ExpBox";

function Resume() {
  const [activeTab, setActiveTab] = useState("edu");

  return (
    <div
      className="min-h-screen flex items-center justify-center "
      style={{
        backgroundImage: "url(" + `${require("../assets/home-bg.svg")}` + ")",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Head>
        <title>Sohail::Resume</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        ></link>
      </Head>
      <Sidebar />
      <main className="flex flex-col items-center justify-center main-container">
        {/* Top box - about */}
        <div className="">
          <div className="md:w-[600px] m-4 shadow-md px-10 py-4 ">
            <h3 className="text-xl font-bold text-orange-600">About </h3>
            <h3 className="text-xl font-semibold text-gray-600">
              Graduate Software developer
            </h3>
            <p
              className="text-lg text-justify pt-2 text-orange-100 "
              style={{ fontFamily: "poppins" }}
            >
              {ResumeData.aboutme}
            </p>
          </div>
          {/* middle box*/}
          <div className="w-full m-4 shadow-md px-10 py-4  ">
            <h3 className="text-xl flex items-center font-bold text-orange-600 mb-10">
              Professional skills <GiSkills className="ml-2 text-orange-200" />
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {ResumeData.skills.map(({ id, name, icon, level }) => (
                <SkillBox id={id} name={name} Icon={icon} level={level} />
              ))}
            </div>
          </div>
        </div>
        {/* experience / education container */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setActiveTab("edu")}
            className={`${
              activeTab === "edu" && "border-b-2 border-orange-600 text-white "
            } font-semibold p-2 `}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab("exp")}
            className={`${
              activeTab === "exp" && "border-b-2 border-orange-600 text-white "
            } font-semibold p-2 `}
          >
            Experience
          </button>
        </div>

        <div class="md:w-2/3 flex flex-col mt-10">
          <h1 class="font-bold italic mb-10 text-orange-600 self-center">
            {activeTab === "exp" ? "General Experience" : "Education History"}
          </h1>
          {/* education box*/}
          <div class="relative mt-5 text-left self-start">
            {activeTab === "edu"
              ? ResumeData.schools.map((data) => <EduBox {...data} />)
              : ResumeData.companies.map((data) => <ExpBox {...data} />)}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Resume;
