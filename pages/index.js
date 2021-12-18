import Head from "next/head";
import homeSvg from "../assets/home-bg.svg";
import LeftHero from "../components/LeftHero";
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
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div className="Home flex items-start">
            {/* Sidebar */}
            <Sidebar/>
            {/* Main content */}
            <main>
              {/* Left hero */}
              <LeftHero/>
                {/* Heading */}
                {/* small description */}
                {/* see projects button */}

                {/* skills section */}
                {/* grid of skills icons */}
              {/* right hero */}
            </main>
      </div>
    </div>
  );
}
