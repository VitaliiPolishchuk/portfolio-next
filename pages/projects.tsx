import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectNavbar from "../components/ProjectsNavbar";
import { motion } from "framer-motion";
import { stagger, fadeInUp, routeAnimation } from "../animation";
import { GetServerSidePropsContext } from "next";
import ProjectDetails from "../components/ProjectDetails";
import SkeletonProjectCard from "../components/SkeletonProjectCard";
import SkeletonProjectNavbar from "../components/SkeletonProjectsNavbar";

const Projects = ({ apiURL }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [projectsData, setProjectsData] = useState([])
  const [categories, setCategories] = useState([])

  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState("all");

  const [showDetail, setShowDetail] = useState<number | null>(null);

  useEffect(() => {
    async function fetchData() {
      
      await fetch(`${apiURL}api/v1/project/`)
        .then((res) => res.json())
        .then((data) => {
          setProjectsData(data)
          setProjects(data)
        }).catch((error) => {
          console.log(error)
        });
      
      
      await fetch(`${apiURL}api/v1/project/category/`)
        .then((res) => res.json())
        .then((data) => {
          setCategories(data)
        }).catch((error) => {
          console.log(error)
        });

      setTimeout(() => {}, 3000);
      setIsLoading(false);
    }

    setIsLoading(true);
    fetchData()

  }, [])

  const handleFilterCategory = (category: string | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter((project) =>
      project.categories.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };
  return (
    <motion.div
      className="px-5 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {isLoading ? (
        <SkeletonProjectNavbar />
      ): (
        <ProjectNavbar
          handleFilterCategory={handleFilterCategory}
          active={active}
          categories={categories}
        />
        
      )}
      {isLoading ? (
        <div
          className="relative grid grid-cols-12 gap-4 my-3"
          
        >
          {new Array<number>(9).fill(9).map((project) => (
            <div
              className="relative col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              
            >
              <SkeletonProjectCard
              />
              <div className="absolute top-0 left-0 z-10 w-full h-full animate-pulse" >
                <div className="w-full h-full bg-white rounded-lg dark:bg-gray-600 opacity-70"></div>
              </div>
            </div>
          ))}
        </div>
      ) : <>
        {!showDetail ? (
          <motion.div
            className="relative grid grid-cols-12 gap-4 my-3"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {projects.map((project) => (
              <motion.div
                className="relative col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                variants={fadeInUp}
              >
                <ProjectCard
                  project={project}
                  key={project.name}
                  showDetail={showDetail}
                  setShowDetail={setShowDetail}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <ProjectDetails
            project={projects.find((project) => project.id === showDetail)}
            setShowDetail={setShowDetail}
          />
      )}
      </>}
      
    </motion.div>
  );
};

export default Projects;

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const apiURL = process.env.API;
  return {
    props: {
      apiURL: apiURL,
    },
  };
};
