import Head from "next/head";
import Sidebar from "../components/Sidebar";
import { ResumeData } from "../resume-data";
function Resume() {
  return (
    <div
      className="min-h-screen flex items-start "
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
      <main className="flex items-start flex-col py-10 ">
        {/* Top box - about */}
        <div style={{width: "78%",}} className="bg-blue-200 m-4 shadow-md rounded-md px-10 py-4">
          <h3 className="text-xl font-bold text-orange-600">About </h3>
          <h3 className="text-xl font-semibold text-gray-600">
            Graduate Fullstack developer
          </h3>
          <p
            className="text-md text-justify pt-2 "
            style={{ fontFamily: "poppins" }}
          >
            {ResumeData.aboutme}
          </p>
        </div>
        {/* middle box*/}
        <div className="flex items-start">
          <div className="bg-blue-200 w-96 m-4 shadow-md rounded-md px-10 py-4">
            <h3 className="text-xl font-bold text-orange-600 mb-10">
              Professional skills
            </h3>
            <div className="grid grid-cols-3 gap-4 border-l-4 border-orange-500">
              {ResumeData.skills.map(({ id, name, icon }) => (
                <span className="flex flex-col items-center text-center">
                  <i className={icon + " text-5xl"}></i>
                  <small className="text-xs">{name}</small>
                </span>
              ))}
            </div>
          </div>
          <div class=" bg-blue-200 flex flex-col rounded-md shadow-md justify-center relative overflow-hidden m-4">
              
            <h3 className="text-xl font-bold text-orange-600 p-4 px-6">
              Education
            </h3>
            <div class="w-full px-8 py-4 mx-aut text-gray-600 rounded-lg shadow-md dark:bg-gray-800">
              <ul class="w-full max-w-lg">
                {ResumeData.schools.map(
                  ({ name, type, from, to, topics }, index) => (
                    <li
                      aria-expanded="true"
                      class="border-b border-gray-200 group "
                    >
                      <button class="flex w-full rounded-md mb-2 mt-2 justify-between py-2 px-2 bg-gray-100 hover:bg-gray-200">
                        <span className="text-gray-800 font-semibold flex flex-col items-start">
                          <p>
                            {name} | {type}{" "}
                          </p>
                          <p className="text-gray-400 text-xs">
                            {index === 0
                              ? "2022 / Now"
                              : `From - ${from} to ${to}`}
                          </p>
                        </span>
                        <span>
                          <svg
                            class="h-6 fill-current text-gray-500 transform -rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            role="img"
                            aria-hidden="true"
                            class="v-icon__svg"
                          >
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                          </svg>
                        </span>
                      </button>
                      <div class="px-2 bg-gray-50 rounded-md h-0  overflow-hidden group-hover:h-full transition-height">
                        {topics.map(({ topic }) => (
                          <li>{topic}</li>
                        ))}
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        {/* skills box*/}
        {/* education box*/}
      </main>
    </div>
  );
}

export default Resume;
