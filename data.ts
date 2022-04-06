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
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
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
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Spring Boot</b> ",
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
    name: "Python",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "93",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "97",
  },
  {
    Icon: BsCircleFill,
    name: "Spring",
    level: "90",
  },
];
