

import Image from "next/image"
import MediaLinksSvg from "./MediaLinksSvg"

function RightHero() {
    return (
      <div className="hidden md:inline-flex ml-40 animate__animated animate__fadeInRight animate__slow">
        <MediaLinksSvg />
      </div>
    );
}

export default RightHero
