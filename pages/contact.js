import ContactForm from "../components/ContactForm";
import ContactOptions from "../components/ContactOptions";
import Sidebar from "../components/Sidebar";
import Head from "next/head";
import { RiChatSmile2Fill } from "react-icons/ri";

function Contact() {
  return (
    <div
      className="min-h-screen flex justify-center"
      style={{
        backgroundImage: "url(" + `${require("../assets/home-bg.svg")}` + ")",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Head>
        <title>Sohail::Contact</title>
      </Head>
      <Sidebar />
      <main className="flex py-10 ">
        <div className="flex flex-col md:mx-auto items-center justify-center">
          <h3 className="text-3xl font-bold text-orange-500 flex space-x-2 self-center">
            Get in touch!
            <RiChatSmile2Fill />
          </h3>
          <ContactOptions />
          <ContactForm />
        </div>
      </main>
    </div>
  );
}

export default Contact;
