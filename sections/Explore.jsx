'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';
import { staggerContainer } from '../utils/motion';
const Explore = () => {
	const [active, setActive] = useState('world-2');
	return (
		<section
			className="sm:p-16 xs:p-8 px-6 py-12"
			id="explore">
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: 'false', amount: 0.5 }}
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
				<div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
					{exploreWorlds.map((world, index) => (
						<ExploreCard
							key={world.id}
							{...world}
							index={index}
							active={active}
							handleClick={setActive}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Explore;
