import React, { useState, useRef } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [result, setResult] = useState({
    success: "",
    error: ""
  });
  const { t } = useTranslation();
  const form = useRef(null);

  const handleResponse = (type) => {
    type === "success"
      ? setResult({ success: t("contact.successMessage"), error: "" })
      : setResult({ success: "", error: t("contact.errorMessage") });
    setTimeout(() => {
      setResult({ success: "", result: "" });
    }, 4000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        console.log("SUCCESS", result.status, result.text);
        handleResponse("success");
      })
      .catch((error) => {
        console.log("FAILED...", error);
        handleResponse("error");
      })
      .finally(() => {
        e.target.reset();
      });
  };

  return (
    <section id="contact" className="flex flex-col justify-center items-center w-full h-full">
      <form
        ref={form}
        className="py-40 px-[5vw] flex flex-col justify-center h-full w-full max-w-4xl"
        onSubmit={sendEmail}
        autoComplete="off">
        <div className="flex flex-col p-2 justify-center items-center mb-12">
          <div className="space-y-4">
            <p className="text-4xl text-center font-semibold">{t("contact.title")}</p>
            <p className="text-xl text-center">{t("contact.subTitle")}</p>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {t("contact.name.title")}
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <BsFillPersonFill className="text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              className=" autofill:bg-yellow-200 bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#017582] dark:focus:border-[#017582]"
              placeholder={t("contact.name.placeholder")}
              required
              minLength={2}
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {t("contact.email.title")}
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <MdEmail className="text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#017582] dark:focus:border-[#017582]"
              placeholder={t("contact.email.placeholder")}
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            {t("contact.subject.title")}
          </label>

          <input
            type="text"
            id="subject"
            name="subject"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#017582] dark:focus:border-[#017582]"
            placeholder={t("contact.subject.placeholder")}
            required
            minLength={2}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            {t("contact.message.title")}
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#017582] dark:focus:border-[#017582]"
            placeholder={t("contact.message.placeholder")}
            required
            minLength={2}></textarea>
        </div>
        <button
          type="submit"
          className="bg-slate-400 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#017582] dark:hover:bg-[#0c3543] dark:focus:ring-[#0c3543]">
          {t("contact.button")}
        </button>
        <div className="mt-6">
          {result.success && (
            <div
              className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
              role="alert">
              <span className="font-medium">{t("contact.success")}</span>
              {result.success}
            </div>
          )}
          {result.error && (
            <div
              className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
              role="alert">
              <span className="font-medium">{t("contact.error")}</span> {result.error}
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;
