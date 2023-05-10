import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Languages, tools & Frameworks</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        {/* revise this text */}
        Here are the languages, tools and frameworks I have learnt so far in my development journey,
      </motion.p>

    <div className="mt-20 flex flex-row flex-wrap justify-center gap-10"> 
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Tech, "skills");