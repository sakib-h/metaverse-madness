'use client';
import { motion } from 'framer-motion';
import { TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';

const Explore = () => (
	<section
		className="sm:p-16 xs:p-8 px-6 py-12"
		id="explore">
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.5 }}
			className="2xl:max-w-[1280px] w-full mx-auto flex flex-col">
			<TypingText
				title="| The World"
				textStyles="text-center"
			/>
			<TitleText
				title={
					<>
						Choose the World you want{' '}
						<br className="md:block hidden" /> to explore
					</>
				}
				textStyles="text-center"
			/>
		</motion.div>
	</section>
);

export default Explore;
