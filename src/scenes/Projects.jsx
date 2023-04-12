import LineGradient from '../components/LineGradient';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

const Project = ({ title, subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-pale z-30 flex-col flex justify-center items-center text-center p-16 text-deep-blue font-bold`;
  const projectTitle = title.split(' ').join('-').toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-shantell">{title}</p>
        <p className="mt-7 font-shantell">{subtitle}</p>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className=" md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-20 mb-20"> </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="sm:grid sm:grid-cols-1 ">
        <motion.div
          className="mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
    
          <Project
            title="Website"
            subtitle="A medical billing website designed with Bootstrap and made with Javascrpit. Made for a company based in Kirkland, WA. "
          />
          
          <Project
            title="Menu"
            subtitle="A sushi menu made with React with the ability to seperate items between rolls, soup, and sashimi"
          />

          {/* ROW 2 */}
          <Project
            title="Books"
            subtitle="Bestseller Book App using React, New York Times API, and Buy Now buttons taking to different market places to purchase. "
          />
          <Project
            title="Weather"
            subtitle="Weather App created in React, using OpenWeatherMap API to catch current weather data. Using different backgrounds for diffrent weather conditions in different locations."
          />
           <Project
            title="Turtlepage"
            subtitle="This informative webpage was created with html, CSS, and Javascript. It was designed to inform individuals of the importance of sea turtles with information guided by the Sea Turtle Conservatory."
          />
        </motion.div>
        </div>
      
    </section>
  );
};

export default Projects;
