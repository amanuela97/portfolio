import React, { useState } from "react";
import { BsChatRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaRobot } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

export default function ChatBot() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button className="z-20 fixed bottom-9 right-10 w-12 h-12 flex justify-center items-center bg-cyan-500 text-white border-none rounded-[50%]">
        <span
          onClick={() => setIsVisible(!isVisible)}
          className={`absolute inset-0 rounded-[50%] flex justify-center items-center ${
            isVisible && "opacity-100 pointer-events-auto scale-100"
          }`}>
          {!isVisible ? <BsChatRight size={25} /> : <IoMdClose size={25} />}
        </span>
      </button>
      <div
        className={`sm:bottom-[100px] sm:right-10 sm:w-[420px] sm:h-auto sm:rounded-2xl rounded-none bottom-[100px] right-0 w-[100%] h-[75%] z-20 fixed bg-cyan-500 transition-transform duration-300 overflow-hidden shadow ${
          isVisible
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-50"
        } `}>
        <div className="relative bg-cyan-500 text-center px-4">
          <h3 className="text-[1.4rem] text-white py-2">Chatbot</h3>
        </div>
        <ul className="sm:h-[450px] h-[90%] overflow-y-auto pt-[30px] px-5 pb-[100px] bg-white">
          <li className="chatbot__chat incoming">
            <span className="inset-0 rounded-[50%] flex justify-center items-center">
              <FaRobot size={25} />
            </span>
            <p>Hi there. How can I help you today?</p>
          </li>
          <li className="chatbot__chat outgoing">
            <p>...</p>
          </li>
        </ul>
        <div className="chatbot__input-box">
          <textarea
            className="chatbot__textarea"
            placeholder="Enter a message..."
            required></textarea>
          <span className="flex justify-center items-center p-2">
            <IoMdSend size={25} />
          </span>
        </div>
      </div>
    </>
  );
}
