import React from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { ComputersCanvas, EarthCanvas } from "./canvas";
import { FaPhoneAlt } from "react-icons/fa";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { CiMap } from "react-icons/ci";
import { MdMail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Dont be shy! Contact me👇</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="flex gap-4 items-center mt-6">
          <div className={`text-xl sm:text-3xl text-black p-1 rounded-full`}>
            <CiMap className="text-white-100" />
          </div>
          <div className={`${styles.sectionSubText}`}>
            Pune, Maharashtra, INDIA
          </div>
        </div>
        <div className="flex gap-4 items-center mt-6">
          <div className={`text-xl sm:text-3xl p-1 text-black rounded-full`}>
            <FaPhoneAlt className="text-white-100" />
          </div>
          <div className={`${styles.sectionSubText}`}>
            <a href="tel:+918421937769">+91 93720 70363</a>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-6">
          <div className={`text-xl sm:text-3xl p-1 text-black rounded-full`}>
            <MdMail className="text-white-100" />
          </div>
          <div className={`${styles.sectionSubText}`}>
            <a href="mailto:zubiyaansari907@gmail.com">zubiyaansari907@gmail.com</a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
        {/* <ComputersCanvas /> */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
