import React, { useRef } from "react";
import "./Contact.css";

export const Contact = () => {
  const emailRef = useRef();
  const messageRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    
    
  };

  return (
    <div
      id="contact"
      className="contact-section w-full flex flex-col items-center py-6 md:py-10 bg-slate-700"
    >
      <div className="w-full md:w-8/12 flex flex-col items-center">
        <h2 className="section-title contact-title text-slate-200 text-5xl pb-10 pl-4 self-start relative">
          CONTACT
        </h2>
        <form className="flex flex-col w-11/12 md:w-8/12 xl:w-6/12">
          <label className="text-xl text-left text-slate-200" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            ref={emailRef}
            className="mb-2 p-2 shadow-inner"
          />
          <label className="text-xl text-left text-slate-200" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            ref={messageRef}
            className="mb-2 p-2 shadow-inner"
          ></textarea>
          <button
            onClick={handleFormSubmit}
            className="details-button border-2 leading-5 text-slate-200 py-2 border-slate-200 w-full mt-2 text-xl hover:text-black hover:bg-slate-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
