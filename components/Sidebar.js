import Image from 'next/image'
import {CgMenuGridR} from 'react-icons/cg'
import { AiTwotoneHome, AiFillProject, AiFillContacts } from "react-icons/ai";
import { IoMdDocument } from "react-icons/io";
import {useState,useEffect} from 'react'
import NavOptions from './NavOptions';

const navigation = [
  { id: 12, href: "/", text: "Home", icon: AiTwotoneHome },
  { id: 13, href: "/projects", text: "Projects", icon: AiFillProject },
  { id: 14, href: "/resume", text: "Resume", icon: IoMdDocument },
  { id: 15, href: "/contact", text: "Contact", icon: AiFillContacts },
];
function Sidebar() {
     
    return (
      <div className="sticky top-0 animate__animated animate__fadeInLeft relative w-20 md:w-48 min-h-screen bg-[#10245A] shadow-lg drop-shadow-xl transition duration-2">
        {/* Top avatar */}
        <CgMenuGridR className="text-4xl m-2 mt-4 text-orange-500 cursor-pointer  absolute top-0 right-0" />
        {/* Navigation buttons */}

        <div className="">
          <nav className="mt-40">
            {navigation.map(({ id, href, text, icon }) => (
              <NavOptions
                key={id}
                href={href}
                text={text}
                Icon={icon}
                id={id}
              />
            ))}
          </nav>
        </div>
      </div>
    );
}

export default Sidebar
