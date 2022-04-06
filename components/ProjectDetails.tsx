import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject, AiFillStar } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Project } from "../type";
import { motion } from "framer-motion";
import Image from "next/image";
import { stagger, fadeInUp } from "../animation";

const ProjectDetails: FunctionComponent<{
  project: Project;
  setShowDetail: (id: null | number) => void;
}> = ({
  project: {
    id,
    name,
    get_image,
    categories,
    deployed_url,
    description,
    github_frontend_url,
    github_backend_url,
    rating,
    key_techs,
  },
  setShowDetail,
}) => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="relative z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100"
    >
      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.div
          variants={fadeInUp}
          className="flex flex-row text-4xl text-green"
        >
          {new Array<number>(rating).fill(rating).map((_, i) => (
            <AiFillStar />
          ))}
        </motion.div>
        <motion.div variants={fadeInUp} className="border-4 border-gray-100">
          <Image
            src={get_image}
            alt={name}
            layout="responsive"
            height="150"
            width="300"
          />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="flex justify-center my-4 space-x-3"
        >
          <a
            href={deployed_url}
            className="flex items-center px-4 py-2 space-x-3 text-sm bg-gray-200 md:text-md lg:text-lg dark:bg-dark-200"
          >
            <AiFillProject /> <span>Project</span>
          </a>
          <a
            href={github_frontend_url}
            className="flex items-center px-4 py-2 space-x-3 text-sm bg-gray-200 md:text-md lg:text-lg dark:bg-dark-200"
          >
            <AiFillGithub /> <span>Frontend</span>
          </a>
        </motion.div>
        {github_backend_url && (
          <motion.div
            variants={fadeInUp}
            className="flex justify-center pt-0 my-4 space-x-3"
          >
            <a
              href={github_backend_url}
              className="flex items-center px-4 py-2 space-x-3 text-sm bg-gray-200 md:text-md lg:text-lg dark:bg-dark-200"
            >
              <AiFillGithub /> <span>Backend</span>
            </a>
          </motion.div>
        )}
      </motion.div>

      <motion.div variants={stagger} initial="initial" animate="animate">
        <motion.h2
          variants={fadeInUp}
          className="mb-3 text-xl font-medium md:text-2xl"
        >
          {name}
        </motion.h2>
        <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
          {description}
        </motion.h3>
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
        >
          {key_techs.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 round"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>
      <button
        onClick={() => setShowDetail(null)}
        className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark"
      >
        <MdClose size={30} />
      </button>
    </motion.div>
  );
};

export default ProjectDetails;
