import React, { useRef, useState } from "react";
import { BsChatRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaRobot } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { sendMessage } from "utils/data";

export default function ChatBot() {
  const [isVisible, setIsVisible] = useState(false);
  const [question, setQuestion] = useState("");
  const chatBox = useRef(null);

  const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chatbot__chat", className);
    let chatContent =
      className === "outgoing"
        ? "<p></p>"
        : `
          <span className="inset-0 rounded-[50%] flex justify-center items-center material-symbols-outlined">
              <span class="material-symbols-outlined">smart_toy</span>
          </span>
          <p></p>
        `;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
  };

  const send = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    //send outgoing
    chatBox.current.appendChild(createChatLi(question, "outgoing"));
    chatBox.current.scrollTo(0, chatBox.current.scrollHeight);
    setQuestion("");

    //loading
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatBox.current.appendChild(incomingChatLi);
    chatBox.current.scrollTo(0, chatBox.current.scrollHeight);

    //get incoming
    const messageElement = incomingChatLi.querySelector("p");
    const result = await sendMessage(question);
    if (result && result.error) {
      // Handle error
      messageElement.classList.add("error");
      messageElement.textContent = "Oops! Please try again!";
    } else if (result && result.data) {
      // handle success
      messageElement.textContent = result.data;
      console.log(result.source);
    }
    setQuestion("");
    chatBox.current.scrollTo(0, chatBox.current.scrollHeight);
  };

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      send(e);
    }
  };

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
        <ul
          ref={chatBox}
          className="sm:h-[450px] h-[90%] overflow-y-auto pt-[30px] px-5 pb-[100px] bg-white">
          <li className="chatbot__chat incoming">
            <span className="inset-0 rounded-[50%] flex justify-center items-center">
              <FaRobot size={25} />
            </span>
            <p>Hi there. How can I help you today?</p>
          </li>
        </ul>
        <form className="chatbot__input-box" onSubmit={send}>
          <textarea
            className="chatbot__textarea"
            placeholder="Enter a message..."
            value={question}
            onKeyDown={onEnterPress}
            onChange={(e) => setQuestion(e.target.value)}
            required></textarea>
          <span className="flex justify-center items-center p-2">
            <button type="submit">
              <IoMdSend size={25} />
            </button>
          </span>
        </form>
      </div>
    </>
  );
}
