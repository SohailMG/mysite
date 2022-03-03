import Image from "next/image";
import { CgMenuGridR } from "react-icons/cg";
import { AiTwotoneHome, AiFillProject, AiFillContacts } from "react-icons/ai";
import { IoMdDocument } from "react-icons/io";
import { useState, useEffect } from "react";
import NavOptions from "./NavOptions";

const navigation = [
  { id: 12, href: "/", text: "Home", icon: AiTwotoneHome },
  { id: 13, href: "/projects", text: "Projects", icon: AiFillProject },
  { id: 14, href: "/resume", text: "Resume", icon: IoMdDocument },
  { id: 15, href: "/contact", text: "Contact", icon: AiFillContacts },
];
function Sidebar() {
  return (
    <div className=" z-50 flex justify-center items-center fixed bottom-0 rounded-full p-2 flex items-center m-10 animate__animated animate__fadeInUp  bg-[#090e1ade] shadow-lg drop-shadow-xl transition duration-2">
      {/* Top avatar */}
      {/* Navigation buttons */}

      {/* <CgMenuGridR className="text-4xl  text-orange-500 cursor-pointer " /> */}
      <div className="">
        <nav className=" flex">
          {navigation.map(({ id, href, text, icon }) => (
            <NavOptions key={id} href={href} text={text} Icon={icon} id={id} />
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
