'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} mt-24 px-10`} id="home">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="justify-start flex-col gap-4 flex">
        <div className="flex-row items-center relative rounded-lg bg-gray-400 w-52 h-16 object-contain">
          <p className="text-white text-[14px] font-bold ml-2 mt-[10px]">
            Licensed General Contractor
          </p>
          <p className="text-white text-[14px] font-bold ml-2">
            CGC 1534566
          </p>
        </div>
        <div className="flex items-center relative object-contain z-20">
          <a href="https://www.bbb.org/us/fl/fort-myers/profile/floor-installation/just-fix-it-of-swfl-inc-0653-90201343/#sealclick" target="_blank" rel="nofollow">
            <img
            src="https://seal-westflorida.bbb.org/seals/gray-seal-250-52-whitetxt-bbb-90201343.png"
            className="border-0"
            alt="Just Fix It of SWFL, Inc. BBB Business Review"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col relative -mt-60 md:-mt-40 lg:-mt-48 z-10">
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex justify-center items-center"
        >
          <Image
            src="/title-logo.png"
            alt="logo"
            width={800}
            height={800}
            quality={100}
            className="sm:w-[600px] w-[800px] sm:h-[600px] h-[800px] -mb-60 md:-mb-32 object-contain"
          />
        </motion.div>
        <motion.h2
          variants={textVariant(1.4)}
          className="font-extrabold text-[32px] text-white text-center mb-10"
        >
          We do it all!
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
