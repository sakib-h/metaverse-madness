'use client';
import { motion } from 'framer-motion';

import { textContainer } from '../utils/motion';
export const TypingText = ({ title, textStyles }) => (
	<motion.p
		variants={textContainer}
		className={`font-normal text*[14px] text-secondary-white ${textStyles}}`}>
		{Array.from(title).map((letter, index) => (
			<motion.span key={index}></motion.span>
		))}
	</motion.p>
);

export const TitleText = () => <h2>Title Text</h2>;
