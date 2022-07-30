import React from "react";
import Profile from "../public/profile.jpg";
import Typewriter from "typewriter-effect";
import { useData } from "../utils/data";
import { Trans, useTranslation } from "react-i18next";

function Home() {
  const { mainTech, socialsDetails } = useData();
  const { t } = useTranslation();
  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-4 justify-items-center relative top-[74px] md:py-24 border-b dark:text-white dark:bg-gray-900 text-black">
      {/*Hero Text*/}
      <div className="flex flex-col justify-center w-fit md:w-full md:col-start-1 md:col-end-4 p-8 pb-2 md:pb-8 space-y-4 max-w-7xl">
        <p className="text-xl font-Oxygen-Mono">
          <Trans i18nKey="hero.name">
            Hi, my name is{" "}
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl pt-2 font-semibold dark:text-cyan-700 text-slate-400 block font-Oxygen">
              Amanuel Zewdie.
            </span>{" "}
          </Trans>
        </p>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
          {t("hero.expertise")}
        </h2>
        <span className="text-lg md:text-lx">
          {t("hero.experience")}{" "}
          <div className="inline-block dark:text-cyan-700 text-slate-400 font-bold">
            <Typewriter
              options={{
                strings: mainTech,
                autoStart: true,
                loop: true
              }}
            />
          </div>
        </span>
        <p className="text-lg md:text-xl">
          <Trans i18nKey="hero.currently">
            Currently, I&apos;m taking a course at{" "}
            <a
              href="https://www.integrify.io/"
              target="_blank"
              rel="noreferrer"
              className="dark:text-cyan-700 text-slate-400 hover:underline">
              Integrify
            </a>
            .
          </Trans>
        </p>
        <div className="flex space-x-6 w-fit p-2">
          {socialsDetails.map((socail, index) => (
            <a
              href={socail.src}
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white hover:-translate-y-2 focus:-translate-y-2 relative top-0 transition-transform duration-300"
              key={index}
              rel="noreferrer">
              {socail.icon("h-8 w-8 hover:text-cyan-500")}
              <span className="sr-only">{socail.type}</span>
            </a>
          ))}
        </div>
      </div>
      {/*Hero Image*/}
      <div className="flex justify-center items-center basis-1/2 md:col-start-4 md:col-end-5  max-w-7xl">
        <img
          src={Profile}
          alt="profile picture"
          className="w-full h-full max-w-lg max-h-lg object-contain rounded-2xl cursor-pointer scale-75 hover:scale-90 ease-in duration-500"
        />
      </div>
    </section>
  );
}

export default Home;
