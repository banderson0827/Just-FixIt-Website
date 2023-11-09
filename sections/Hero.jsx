'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:p1-16 p1-6 mt-48 px-10`} id="home">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-end items-center relative object-contain">
        <a href="https://www.bbb.org/us/fl/fort-myers/profile/floor-installation/just-fix-it-of-swfl-inc-0653-90201343/#sealclick" target="_blank" rel="nofollow">
          <img
            src="https://seal-westflorida.bbb.org/seals/gray-seal-250-52-whitetxt-bbb-90201343.png"
            className="border-0"
            alt="Just Fix It of SWFL, Inc. BBB Business Review"
          />
        </a>
      </div>
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1
          variants={textVariant(1.1)}
          className="font-extrabold text-[72px] leading-[60px] text-white text-center"
        >
          Just Fix It of SWFL
        </motion.h1>
        <motion.h2
          variants={textVariant(1.4)}
          className="font-extrabold text-[32px] leading-[50px] text-white text-center mb-10"
        >
          We fix it all!
        </motion.h2>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:mt-6 mt-4"
      >
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
        <img
          src="/hero-temp.jpeg"
          alt="hero cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[40px] pr-[40px] relative z-10">
            <img
              src="/explore-stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain rounded-full"
            />
          </div>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
