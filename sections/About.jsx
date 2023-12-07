'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Just Fix It" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Just Fix It of SWFL </span>
        is a
        <span className="font-extrabold text-white"> family owned</span>
        , licensed and insured General Contractor dedicated to transforming your home or business into the
        <span className="font-extrabold text-white"> space of your dreams</span>
        . Our team of experienced professionals is committed to providing
        <span className="font-extrabold text-white"> high-quality workmanship </span>
        and exceptional customer service to ensure your
        <span className="font-extrabold text-white"> complete satisfaction</span>
        . Whether you're looking to update your kitchen, remodel your bathroom, or create a custom space for your business, our team has the expertise to
        <span className="font-extrabold text-white"> bring your vision to life</span>
        . We understand that every project is unique, and we work closely with our clients to create
        <span className="font-extrabold text-white"> customized solutions </span>
        that meet their specific needs and budget. We pride ourselves on our
        <span className="font-extrabold text-white"> attention to detail </span>
        and commitment to excellence. We use only the
        <span className="font-extrabold text-white"> highest quality materials </span>
        and work with trusted suppliers and contractors to ensure that every project is completed to the highest standards. Thank you for considering Just FixIt of SWFL for your next project. We look forward to working with you and
        <span className="font-extrabold text-white"> making your vision reality</span>
        !
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
