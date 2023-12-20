import { MdEmail, MdLocationOn } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { BsStackOverflow } from "react-icons/bs";
import nodeRed from "../public/projects/node-red.png";
import weather from "../public/projects/weather.png";
import patientor from "../public/projects/patientor.png";
import { useTranslation, Trans } from "react-i18next";

export const useData = () => {
  const { t } = useTranslation();
  const navigation = [
    { name: t("navItems.home"), to: "hero" },
    { name: t("navItems.about"), to: "about" },
    { name: t("navItems.projects"), to: "projects" },
    { name: t("navItems.contact"), to: "contact" },
    { name: t("navItems.resume"), to: "#" }
  ];

  const mainTech = ["CSS3", "HTML5", "javaScript", "TypeScript"];

  const technologies = [
    { name: "JavaScript (ES6+)" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Tailwind" },
    { name: "Node.js" },
    { name: "React Native" },
    { name: "GraphQl" },
    { name: "Vue.js" },
    { name: "Next.js" },
    { name: "Github" },
    { name: "CSS" },
    { name: "Jest" }
  ];

  const socialsDetails = [
    {
      type: "facebook",
      src: "https://www.facebook.com/manu.zewdie",
      icon: (style) => <FaFacebookSquare className={style} />
    },
    {
      type: "linkedin",
      src: "https://www.linkedin.com/in/amanuel-ayezabu-86271a1a0",
      icon: (style) => <FaLinkedin className={style} />
    },
    {
      type: "twitter",
      src: "https://twitter.com/professor_xv",
      icon: (style) => <FaTwitterSquare className={style} />
    },
    {
      type: "github",
      src: "https://github.com/amanuela97",
      icon: (style) => <FaGithubSquare className={style} />
    },
    {
      type: "stackoverflow",
      src: "https://stackoverflow.com/users/15756133/amanuela97?tab=profile",
      icon: (style) => <BsStackOverflow className={style} />
    }
  ];

  const contactDetails = [
    {
      type: "phoneNumber",
      value: "+358407778093",
      icon: <AiFillPhone className="h-5 w-5" />
    },
    {
      type: "email",
      value: "babyzewdie@gmail.com",
      icon: <MdEmail className="h-5 w-5" />
    },
    {
      type: "location",
      value: t("location"),
      icon: <MdLocationOn className="h-5 w-5" />
    }
  ];

  const projects = {
    sectionTitle: t("projects.sectionTitle"),
    sectionSubTitle: t("projects.sectionSubTitle"),
    listOfProjects: [
      {
        projectTitle: t("projects.one.title"),
        projectName: t("projects.one.name"),
        description: () => <>{t("projects.one.description")}</>,
        technologies: ["Next.js", "Tailwind CSS", "Firebase", "TailwindUI"],
        image: {
          src: weather,
          alt: t("projects.one.alt")
        },
        github: "https://github.com/amanuela97/weather-app",
        websiteLink: "https://weather-app-76d35.web.app/login"
      },
      {
        projectTitle: t("projects.two.title"),
        projectName: t("projects.two.name"),
        description: () => (
          <>
            <Trans i18nKey="projects.two.description">
              A gimbal and camera control system built using the{" "}
              <a
                href="http://levitezer.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline dark:text-cyan-700 text-slate-400">
                LeViteZer protocol/box
              </a>
              . The software is a web-based version of the LeViteZer user interface used for camera,
              lens and gimbal control.
            </Trans>
          </>
        ),
        technologies: ["Node Red", "JavaScript", "TCP", "UDP"],
        image: {
          src: nodeRed,
          alt: t("projects.two.alt")
        },
        github: "https://github.com/amanuela97/LVZ-node-red"
      },
      {
        projectTitle: t("projects.three.title"),
        projectName: t("projects.three.name"),
        description: () => (
          <>
            <Trans i18nKey="projects.three.description">
              This project was done as part of the
              {
                <a
                  href="https://fullstackopen.com/en/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline dark:text-cyan-700 text-slate-400">
                  {" "}
                  fullstack open 2022 course
                </a>
              }{" "}
              provided by the University of Helsinki. Patientor is a simple medical record
              application for doctors who handle diagnoses and basic health information of their
              patients. The website allows you to add and monitor patients and their diagnoses
            </Trans>
          </>
        ),
        technologies: ["TypeScript", "React.js", "Formik", "Material-UI", "express"],
        image: {
          src: patientor,
          alt: t("projects.three.alt")
        },
        github: "https://github.com/amanuela97/FullStack2021/tree/master/part9/patientor"
      }
    ]
  };

  return {
    navigation,
    mainTech,
    technologies,
    socialsDetails,
    contactDetails,
    projects
  };
};

export const sendMessage = async (question) => {
  try {
    const res = await fetch(
      `https://email-gpt-seven.vercel.app/api/chatbot?question=${JSON.stringify(question)}`
    );

    if (!res.ok) {
      return {
        error: res.statusText
      };
    }

    const result = await res.json();
    return result;
  } catch (error) {
    return {
      error: "something went wrong"
    };
  }
};
