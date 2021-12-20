import { useState } from "react";
import { FaShieldAlt } from "react-icons/fa";
import CheckMark from "./CheckMark";

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setResponseMsg("Sending message....")
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.status === 200) {
        setTimeout(() => {
          setResponseMsg("Message sent successfully!");
          setIsLoading(false);
          e.target.reset();
        }, 2000);
      } else {
        setResponseMsg("Message failed!");
      }
    });
  };

  return (
    <div className="mx-auto md:mx-0 md:ml-10">
      <form method="post" onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="label-text" htmlFor="grid-first-name">
              First Name
            </label>
            <input
              name="firstname"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="label-text" htmlFor="grid-last-name">
              Last Name
            </label>
            <input
              name="lastname"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder=""
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="label-text" htmlFor="grid-password">
              E-mail
            </label>
            <input
              name="email"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="label-text" htmlFor="grid-password">
              Message
            </label>
            <textarea
              name="message"
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
            ></textarea>
          </div>
        </div>
        <p className="text-green-500">{responseMsg}</p>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            {!isLoading ? (
              <button
                className="shadow bg-orange-500 hover:bg-gray-200 hover:text-gray-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Send
              </button>
            ) : (
              <CheckMark />
            )}
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
