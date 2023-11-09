'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />

    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Just Fix It of SWFL</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 Just Fix It of SWFL. All rights reserved. Developed by <a href="https://github.com/banderson0827">Brett Anderson</a>.
          </p>
          <div className="flex gap-4">
            <a href="https://www.bbb.org/us/fl/fort-myers/profile/floor-installation/just-fix-it-of-swfl-inc-0653-90201343">
              <img
                src="/bbb.png"
                alt="Better Business Bureau"
                className="w-[50px] h-[50px] object-contain cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
