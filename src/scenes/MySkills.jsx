import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import cat from '../assets/comcat.jpeg';


const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  return (
    <section id="skills" className=''>
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-yellow">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className=" tracking-wide mt-10 mb-7">
            I come from working many years in pysical therapy, so I know about
            hard work and patience. Now transitioning to the code life, I'm
            excited to dive into something new. Whether it's building my own projects, or building a website for a business. I continue learning daily. 
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0 ">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:rounded-lg before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="skills" className="z-10 rounded-lg" src="assets/comcat.jpeg" />
            </div>
          ) : (
            <img alt="skills" className="z-10 rounded-lg" src={cat} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl">Coding</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 rounded-lg  bg-purple absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="tracking-wide mt-5">
            I completed Nucamp Full Stack Coding Bootcamp at the end of 2021 and have been immersed in coding ever since. 
          </p>
        </motion.div>

        {/* TOOLKIT */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl">My</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Tool Kit
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 rounded-lg bg-purple absolute right-0 top-0 z-[-1]" />
          </div>
          <p className=" font-semibold mt-5">
            
          HTML5, CSS3, Tailwind CSS, BootStrap, GitHub, JavaScrpit, React, React Native, Framer Motion              
              
              
          </p>
        </motion.div>
        {/* WHAT I BRING */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl">What Extra</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                I Bring
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 rounded-lg bg-purple absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            <lu>
              <li>Communication Skills</li>
              <li>Time Management</li>
              <li>Enthusiasm for Coding</li>
              <li>Dynamic Personality </li>
            </lu>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
