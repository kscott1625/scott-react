import useMediaQuery from '../hooks/useMediaQuery';
import SocailMediaIcons from '../components/SocialMediaIcons';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Kat from '../assets/katherine.jpg';
import Kas from "../assets/kas.jpg";
import resume from "../assets/KscottResume.pdf";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* Image */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px] before:w-full before:max-w-[800px] md:before:max-w-[600px]  before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              alt="profile"
              className="rounded-t-[400px] hover:filter hover:saturate-200 transition duration-500 z-10 h-full w-full max-w-[400px] md:max-w-[800px]"
              src={Kas}
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="rounded-t-[400px] hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] "
            src={Kat}
          />
        )}
      </div>
      {/* main section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className="text-6xl font-palyfair z-10 text-center md:text-start">
            Katherine {''}
            <span className="sx:relative sx:text-deep-blue sx:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]">
              {' '}
              Scott
            </span>
          </p>
          <p className="tracking-wide mt-14 mb-7 text-md text-center md:text-start">
            Hi! I'm Katherine, a Front-End Developer based in Seattle, Wa. From
            working in Heathcare for many years, to writing lines of clean code.
            I'm ecxited to leap into new projects and continue refining my
            skills. 
          </p>
        </motion.div>

        {/* Actions */}

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <AnchorLink
            className="bg-yellow text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage('contact')}
            href="#contact"
          >
            {' '}
            Contact Me
          </AnchorLink>

            <div className="rounded-r-sm bg-blue py-0.5 pr-0.5">
            <div className="bg-deep-blue hover:text-yellow transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              {' '}
              <a href={resume} download> Resume</a>

              </div>
            </div>

        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <SocailMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
