import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const AboutPart = ({ subtitle, title, paragraph, image, textFirst, index }) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="show"
			className="max-container flex lg:flex-row flex-col justify-between items-center mb-20"
		>
			{textFirst ? (
				<>
					<motion.div
						variants={fadeIn('right', 'tween', 0.2, 0.5)}
						className="flex flex-col justify-center items-start sm:text-center lg:w-[50%] lg:mb-0 mb-10"
					>
						<p className="text-moss font-montserrat">| {subtitle}</p>
						<h1 className="mt-2 text-4xl font-teko font-semibold text-white">
							{title}
						</h1>
						<p className="sm:text-lg text-md mt-6 text-stone font-montserrat text-justify tracking-wide leading-7">
							{paragraph}
						</p>
					</motion.div>
					<motion.div
						variants={fadeIn('down', 'tween', 0.2, 0.5)}
						className="rounded-full sm:h-[400px] h-[200px] sm:w-[400px] w-[200px] object-contain overflow-hidden flex justify-center items-center"
					>
						<img src={image} alt={title} />
					</motion.div>{' '}
				</>
			) : (
				<>
					<motion.div
						variants={fadeIn('up', 'tween', 0.2, 0.5)}
						className="rounded-full sm:h-[400px] h-[200px] sm:w-[400px] w-[200px] object-contain overflow-hidden flex justify-center items-center lg:mb-0 mb-10"
					>
						<img src={image} alt={title} />
					</motion.div>
					<motion.div
						variants={fadeIn('left', 'tween', 0.2, 0.5)}
						className="flex flex-col justify-center items-start text-center lg:w-[50%]"
					>
						<p className="text-moss font-montserrat">| {subtitle}</p>
						<h1 className="mt-2 text-4xl font-teko font-semibold text-white">
							{title}
						</h1>
						<p className="sm:text-lg text-md mt-6 text-stone font-montserrat text-justify tracking-wide leading-7">
							{paragraph}
						</p>
					</motion.div>
				</>
			)}
		</motion.div>
	);
};

export default AboutPart;
