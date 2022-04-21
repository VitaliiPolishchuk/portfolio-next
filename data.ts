import { Service, Skill, Project } from "./type";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable websites using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Spring </b>, <b> Django </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-framework</b>  & <b>Spring Boot</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>Leet Code</b> and <b>HackerRank</b>",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML & CSS",
    level: "89",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "95",
  },
  
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "SCSS/LESS/SASS",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "97",
  },
  {
    Icon: BsCircleFill,
    name: "Redux",
    level: "93",
  },
  {
    Icon: BsCircleFill,
    name: "Webpack",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Babel",
    level: "70",
  },
];
