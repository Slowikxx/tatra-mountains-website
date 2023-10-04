import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
	tatry,
	tatryTop,
	tatryMid,
	tatryMid2,
	tatryFront,
} from '../assets/images/';

const Hero = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start start', 'end start'],
	});
	const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
	const background2Y = useTransform(scrollYProgress, [0, 1], ['0%', '300%']);
	const background3Y = useTransform(scrollYProgress, [0, 1], ['0%', '110%']);
	const textY = useTransform(scrollYProgress, [0, 1], ['0%', '400%']);

	return (
		<div
			ref={ref}
			className="w-full h-screen overflow-hidden relative grid place-items-center"
		>
			<motion.h1
				style={{ y: textY }}
				className="mb-52 text-white text-14xl font-bebas font-extrabold tracking-widest md:text-9xl relative z-10"
			>
				TATRY
			</motion.h1>

			<motion.div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage: `url(${tatry})`,
					backgroundPosition: 'bottom',
					backgroundSize: 'cover',
					y: backgroundY,
				}}
			/>
			<motion.div
				className="absolute inset-0 z-10"
				style={{
					backgroundImage: `url(${tatryMid})`,
					backgroundPosition: 'bottom',
					backgroundSize: 'cover',
					y: background2Y,
				}}
			/>
			<motion.div
				className="absolute inset-0 z-20"
				style={{
					backgroundImage: `url(${tatryMid2})`,
					backgroundPosition: 'bottom',
					backgroundSize: 'cover',
					y: background3Y,
				}}
			/>
			<div
				className="absolute inset-0 z-30"
				style={{
					backgroundImage: `url(${tatryFront})`,
					backgroundPosition: 'bottom',
					backgroundSize: 'cover',
				}}
			/>
		</div>
	);
};

export default Hero;
