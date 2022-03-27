import Head from "next/head";
import homeSvg from "../assets/home-bg.svg";
import LeftHero from "../components/LeftHero";
import RightHero from "../components/RightHero";
import Sidebar from "../components/Sidebar";

export default function Home() {
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
      <Head>
        <title>Sohail Gsais</title>
        <meta
          http-equiv="content-language"
          name="description"
          content="A computer science student with keen interest in mobile and web development"
        ></meta>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="favicon" href="/public/favicon.ico" />
        <link rel="manifest" href="manifest.json" />
        <script src="service-registery.js"></script>
      </Head>

      <div className="Home main-container">
        {/* Sidebar */}
        <Sidebar />
        {/* Main content */}
        <main className="flex items-center">
          {/* Left hero */}
          <LeftHero />
          {/* right hero */}
          <RightHero />
        </main>
      </div>
    </div>
  );
}
