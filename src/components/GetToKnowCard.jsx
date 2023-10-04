import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const GetToKnowCard = ({
	index,
	active,
	handleClick,
	id,
	img,
	title,
	subtitle,
}) => {
	return (
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.3, 0.5)}
			onClick={() => handleClick(id)}
			className={`relative ${
				active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
			} flex items-center justify-center min-w-[170px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
		>
			<img
				src={img}
				at={title}
				className="absolute w-full h-full object-cover rounded-[24px]"
			/>
			{active !== id ? (
				<h3 className="font-semibold sm:text-[26px] text-[18px] text-white font-teko tracking-widest absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
					{title}
				</h3>
			) : (
				<div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
					<h2 className="mt-[24px] font-semibold font-teko tracking-wider sm:text-[32px] text-[24px] text-white">
						{title}
					</h2>
					<p className="font-normal text-[16px] leading-[20px] text-white font-montserrat">
						{subtitle}
					</p>
				</div>
			)}
		</motion.div>
	);
};

export default GetToKnowCard;
