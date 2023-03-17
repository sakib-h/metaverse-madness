"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";

const Hero = () => (
	<section className="sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6">
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInInView="show"
			viewport={{ once: false, amount: 0.25 }}></motion.div>
	</section>
);

export default Hero;
