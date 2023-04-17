import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { fadeIn, slideIn, textVariant } from '../utils/motion';
import { githubicon } from '../assets';
import { linkedinicon } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;

  setForm({ ...form, [name]: value });
}

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs.send(
    'service_yv5hux2', 
    'template_1rdil7e',
    {
      from_name: form.name,
      to_name: 'Chris',
      from_email: form.email,
      to_email: 'csouthon44@gmail.com',
      message: form.message,
    },
    '4Hn0paM_YrmJPyEI4'
    )
    .then(() => {
      setLoading(false);
      alert('Thank you for contacting me. I will be in touch as soon as possible.');

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error);
      alert('Something went wrong!')
    })
}

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact info</h2>
      </motion.div>

      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondarytext-[17px] max-w-3xl leading-[30px]">
        {/* revise this text */}
        Feel free to get in touch, either via the contact form below or via the following icons

      </motion.p> 
   
    <div className={`xl:mt-12 flex xl:flex-row flex-row-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
                <div className="flex justify-center items-center">
        <div
              onClick={() => window.open
              ("https://github.com/Chriscds/")}
              className="w-16 h-16 flex justify-center items-center cursor-pointer"
              >
                <img
                  src={githubicon}
                  alt="githubicon"
                  className="w-16 h-16 object-contain"
                />
              </div>
        <div
              onClick={() => window.open
              ("https://www.linkedin.com/in/chris-southon-320a25258/")}
              className="m-2 w-16 h-16 flex justify-center items-center cursor-pointer"
              >
                <img
                  src={linkedinicon}
                  alt="linkedinicon"
                  className="w-16 h-16 object-contain"
                />
              </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
              <span className="text-white font-medium mb-4 ">Name :</span>
              <input 
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white first
                rounded-lg outline-none border-none font-medium"
              />
          </label>
          <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Email :</span>
              <input 
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white first
                rounded-lg outline-none border-none font-medium"
              />
          </label>
          <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Message :</span>
              <textarea 
                row="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Enter your message"
                className="bg-tertiary py-4 px-4 placeholder:text-secondary text-white first
                rounded-lg outline-none border-none font-medium"
              />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold 
            shadow-md shadow-primary rounded-xl"
          >
              {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
     </>
  )
}

export default SectionWrapper(Contact, "contact");