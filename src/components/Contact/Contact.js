import React, { useRef } from "react";
import "./Contact.css";
//import emailjs from "@emailjs/browser";
//import { serviceKey, publicKey } from "../../keys";
export const Contact = () => {
  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(serviceKey, "template_upsya8q", form.current, publicKey)
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div
      id="contact"
      className="contact-section py-6 md:py-10 flex-1 bg-slate-700"
    >
      <div className="w-full md:w-8/12 flex flex-col items-center">
        <h2 className="section-title contact-title text-slate-200 text-5xl pb-10 mt-4 pl-4 self-start relative">
          CONTACT
        </h2>
        <form
          onSubmit={handleFormSubmit}
          ref={form}
          className="flex flex-col w-11/12 md:w-8/12 xl:w-6/12"
        >
          <label className="text-xl text-left text-slate-200" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="mb-2 p-2 shadow-inner"
          />
          <label className="text-xl text-left text-slate-200" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            name="message"
            className="mb-2 p-2 shadow-inner"
          ></textarea>
          <button
            type="submit"
            className="details-button border-2 leading-5 text-slate-200 py-2 border-slate-200 w-full mt-2 text-xl hover:text-black hover:bg-slate-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
