import { BsFillPhoneVibrateFill} from 'react-icons/bs'
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";

function ContactOptions() {
    return (
      <div className="flex flex-col md:flex-row ml-2 items-center space-x-2 md:my-10 md:ml-10">
        <div
          className="contact-options"
        onClick={()=> window.open("tel:07510374652")}
          >
          <BsFillPhoneVibrateFill className="text-4xl text-orange-500" />
          <p className="text-orange-200 font-semibold text-xs">07510374652</p>
        </div>
        <div
          className="contact-options"
          onClick={()=> window.open("mailto:gsais.sohail9@gmail.com")}
          >
          <MdEmail className="text-4xl text-orange-500" />
          <p className="text-orange-200 font-semibold text-xs">
            gsais.sohail9@gmail.com
          </p>
        </div>
        <div className="contact-options">
          <GoLocation className="text-4xl text-orange-500" />
          <p className="text-orange-200 font-semibold text-xs">
            Harrow,London United Kingdom
          </p>
        </div>
      </div>
    );
}

export default ContactOptions
