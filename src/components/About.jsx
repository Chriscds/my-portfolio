import React from 'react';
// import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}>
        {/* revise this text */}
        I'm a Front End Web Developer Student based in the Isle of Wight, UK.
        Before becoming a student, I was a chef for 20 years until 
        I decided to swap my knives for a keyboard and dive into code. Up to now, 
        I'm self taught, and have focused mostly working with bootstrap, 
        until I became a Front-end Development student. 
        I'm enthusiastic when it comes to learning something new and I love a challenge and problem solving, 
        I don't give up (unless there's no more coffee!).
      </motion.p>
    </>
  )
}

export default About;