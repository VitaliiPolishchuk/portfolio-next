import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import { fadeInUp, stagger, routeAnimation } from "../animation";
import { motion } from "framer-motion";

const index = () => {
  // console.log(services);
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        I am B.Tech Degree in Computer Science Engineering from Taras Shevchenko
        National University. I have 1+ years of experience in Web Development
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6>What I Offer</h6>
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={service.title}
              variants={fadeInUp}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;
