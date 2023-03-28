'use client';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import { insights } from '../constants';
const Insights = () => (
	<section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: 'false', amount: 0.25 }}
			className="2xl:max-w-[1280px] w-full mx-auto flex flex-col items-center">
			<TypingText
				title="| Insight"
				textStyles="text-center"
			/>
			<TitleText
				title="Insight about metaverse"
				textStyles="text-center"
			/>
			<div className="mt-[50px] flex flex-col gap-[30px]">
				{insights.map((insight, index) => (
					<InsightCard
						key={`insight-${index}`}
						index={index + 1}
						{...insight}
					/>
				))}
			</div>
		</motion.div>
	</section>
);

export default Insights;
