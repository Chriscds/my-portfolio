import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1] rounded-[20px] shadow-card">

      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondarytext-[17px] max-w-3xl leading-[30px]">
        {/* revise this text */}
        I'm a Front End Web Developer Student based in the Isle of Wight, UK.
        Before becoming a student, I was a chef for 20 years until 
        I decided to swap my knives for a keyboard and dive into code. Up to now, 
        I'm self taught, and have focused mostly working with bootstrap, 
        until I became a Front-end Development student. 
        I'm enthusiastic when it comes to learning something new and I love a challenge and problem solving, 
        I don't give up (unless there's no more coffee!).
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {/* services for card found in index.js */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About;