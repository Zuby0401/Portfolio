import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import handWave from "../assets/waving.png";
import { Link } from "react-router-dom";
import { SiLinkedin, SiGithub } from "react-icons/si";
import cv from "../assets/Zubiya-CV.pdf";
import { MdDownload } from "react-icons/md";
import me from "../assets/zuby.jpeg";
// import { main } from "../assets";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import CanvasLoader from "./Loader";
import { Suspense } from "react";
// import { Download } from "lucide";
// import { hole } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-[100vh] mx-auto`}>
      {/* Video Background */}
      {/* <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-429px] h-full w-full left-0 z-[-1] object-cover hidden sm:block"
      >
        <source src={hole} type="video/webm" />
      </video> */}

      {/* Content */}
      <div
        className={`absolute inset-0 top-[50px] md:top-[60px] sm:top-[110px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex sm:justify-between sm:flex-row xl:flex-row flex-col-reverse gap-10 items-center'>
          <div>
            <span className={`${styles.heroHeadText} text-white`}>
              <img src={handWave} alt='wave' className='w-[60px]' />
              <span className='text-[#56ccf2] text-shadow-lg'>
                Software <br className='sm:block hidden' /> Developer
              </span>
            </span>
            <div className='text-3xl mt-3 flex gap-3'>
              <Link
                to={"https://www.linkedin.com/in/zubiya-ansari-91574a25b"}
                className='hover:scale-105 hover:translate-y-[-4px] transition-all duration-300 text-[#56ccf2] text-shadow-lg'>
                <SiLinkedin />
              </Link>
              <Link
                to={"https://github.com/Zuby0401"}
                className='hover:scale-105 hover:translate-y-[-4px] transition-all duration-300 text-[#56ccf2] text-shadow-lg'>
                <SiGithub />
              </Link>
              <span className='px-[.3px] py-[.5px] rounded-md flex bg-[#56ccf2] shadow-current'>
                <span className='flex font-semibold items-center text-base text-[#000] sm:text-xl px-1'>
                  Download
                  <a
                    href={cv}
                    download={"Zubiya-Ansari_CV"}
                    title='DOWNLOAD THE CV'>
                    <span>
                      <MdDownload className='h-10 sm:text-2xl text-2xl text-[#000] duration-300 transition-all hover:translate-y-2' />
                    </span>
                  </a>
                </span>
              </span>
            </div>
            <p className={`${styles.heroSubText} mt-2 text-[#915EFF]`}>
              Hi, I'm
              <span className='font-extrabold tracking-wider bg-subHero'>
                <br className='md:block' />
                Zubiya Maqsood Ansari
              </span>
              <br className='sm:block hidden' />
              <p>
                A passionate software developer based in Pune,Maharashtra,
                <span className='font-bold'>INDIA ️</span>
              </p>
            </p>
          </div>
          <Suspense fallback={<CanvasLoader />}>
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className=''>
              <img src={me} alt='me' className='bg-cover w-[90%] order-1 ani' />
            </motion.div>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "/");
