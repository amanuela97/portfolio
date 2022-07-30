import React from "react";
import { useData } from "../utils/data";
import { useTranslation, Trans } from "react-i18next";

function About() {
  const { technologies } = useData();
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="min-h-full w-full py-40  border-b dark:text-white dark:bg-gray-900 text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center content-center gap-16 p-4">
        <div className="flex flex-col items-center justify-center p-4 max-w-2xl space-y-4">
          <h2 className="text-4xl font-semibold">{t("about.me")}</h2>
          <p className="text-lg">{t("about.first")}</p>
          <p className="text-lg">
            <Trans i18nKey="about.second">
              Since then, i have obtained my degree in information technology. I have also had the
              privilige of doing an internship as a frontend developer for a{" "}
              <a
                href="https://wehelp.live/"
                target="_blank"
                className="hover:underline dark:text-cyan-700 text-slate-400"
                rel="noreferrer">
                social media company
              </a>{" "}
              that connects dancers worldwide. I have also done an internship for a non-profit{" "}
              <a
                href="https://wehelp.live/"
                target="_blank"
                className="hover:underline dark:text-cyan-700 text-slate-400"
                rel="noreferrer">
                organization
              </a>{" "}
              that helps refugees find accommodation. Today, my main focus is to further expand my
              knowledge by learning more about the web at{" "}
              <a
                href="https://www.integrify.io/"
                target="_blank"
                className="hover:underline dark:text-cyan-700 text-slate-400"
                rel="noreferrer">
                integrify
              </a>
              .
            </Trans>
          </p>
        </div>

        <div className="flex flex-col items-center p-4 space-y-4 max-w-2xl">
          <h2 className="text-4xl font-semibold">{t("about.techTitle")}</h2>
          <p className="text-center text-lg">{t("about.techSubtitle")}</p>
          <div className="flex flex-row justify-center gap-16">
            <ul className="space-y-2 text-lg">
              {technologies.slice(0, Math.ceil(technologies.length / 2)).map((tech, index) => (
                <li
                  key={index}
                  className="before:content-['*'] before:left-0 dark:before:text-cyan-700 before:text-slate-400 before:text-lg before:pr-2 before:font-bold">
                  {tech.name}
                </li>
              ))}
            </ul>
            <ul className="space-y-2 text-lg">
              {technologies
                .slice(Math.ceil(technologies.length / 2), technologies.length)
                .map((tech, index) => (
                  <li
                    key={index}
                    className="before:content-['*'] before:left-0 dark:before:text-cyan-700 before:text-slate-400 before:text-lg before:pr-2 before:font-bold">
                    {tech.name}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
