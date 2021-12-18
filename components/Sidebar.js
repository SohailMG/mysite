import Image from 'next/image'
import AvatarSvg from '../assets/avatar.svg'
import {CgMenuGridR} from 'react-icons/cg'
import { AiTwotoneHome, AiFillProject, AiFillContacts } from "react-icons/ai";
import { IoMdDocument } from "react-icons/io";
import {useState,useEffect} from 'react'
function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(true);

    
    return (
      <div className="animate__animated animate__fadeInLeft relative w-20 md:w-48 h-screen bg-[#10245A] shadow-lg drop-shadow-xl transition duration-2">
        {/* Top avatar */}
        <CgMenuGridR className="text-4xl m-2 mt-4 text-orange-500 cursor-pointer  absolute top-0 right-0" />
        {/* Navigation buttons */}
        <div className="">
          <nav className="mt-40">
            <a
              className="flex items-center py-2 px-8 text-gray-200 border-r-4 border-orange-500"
              href="#"
            >
              <span className="sidebar-text">Home</span>
              {/* <AiTwotoneHome/> */}
              <AiTwotoneHome className="sidebar-icons" />
            </a>

            <a className="sidebar-options" href="#">
              <span className="sidebar-text">Projects</span>
              <AiFillProject className="sidebar-icons" />
            </a>

            <a className="sidebar-options" href="#">
              <span className="sidebar-text">Resume</span>
              <IoMdDocument className="sidebar-icons" />
            </a>

            <a className="sidebar-options" href="#">
              <span className="sidebar-text">Contact</span>
              <AiFillContacts className="sidebar-icons" />
            </a>
          </nav>
        </div>
      </div>
    );
}

export default Sidebar
