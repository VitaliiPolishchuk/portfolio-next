import { languages, tools } from "../data";
import Bar from "../components/Bar";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../animation";

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2 "
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 ">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 font-bold text-x1">
              Computer Science & Cybernetics
            </h5>
            <p className="font-semibold">
              Taras Shevchenko National University of Kyiv(2016-2020)
            </p>
            <p className="my-3">
              I am B tech in Cimputer Science from Taras Shevchenko National
              University
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 font-bold text-x1">Web Developer</h5>
            <p className="font-semibold">
              Limestone Digital (2020 Feb - 2020 June)
            </p>
            <p className="my-3">
              As Web Developer built a beautiful and scalable SPA using HTML,CSS
              and React.js. Handled databases, servers, apis using Django and
              Spring.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 ">
        <div>
          <h5 className="my-3 font-bold text-2x1">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 font-bold text-2x1">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => (
              <Bar data={tool} key={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
