"use client";

import { motion } from 'framer-motion';
import {TypingText} from "../components"
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
const About = () => <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10"  >
    <div className="gradient-01 z-0"/>
  <motion.div variants={staggerContainer} initial="hidden" whileInView="show" vireport={{once:false, amount:0.25}} className="lg:w-[80%] w-[100%] mx-auto flex justify-center items-center flex-col">
<TypingText title="| About Metaversus" textStyles = "text-center"/>

    </motion.div></section>;

export default About;
