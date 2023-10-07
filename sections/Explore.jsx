'use client';

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ImageCarousel from '../components/Carousel';

import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const images = [
  '/random-1.jpg',
  '/random-2.jpg',
  '/random-3.jpg',
];

const Explore = () => (
  <section className={`${styles.paddings} mb-30`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| Gallery" textStyles="text-center" />
      <TitleText title={<>View our work </>} textStyles="text-center" />
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        initial="hidden"
        whileInView="show"
        className="relative w-full md:mt-6 mt-4 justify-center flex"
      >
        <ImageCarousel images={images} />
      </motion.div>
    </motion.div>
  </section>
);

export default Explore;
