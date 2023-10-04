import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';

const Subscribe = () => {
	return (
		<motion.section
			variants={staggerContainer}
			viewport={{ once: false, amount: 0.25 }}
			initial="hidden"
			whileInView="show"
			id="subscribe"
			className="max-container flex flex-col justify-center items-center"
		>
			<motion.div
				variants={fadeIn('down', 'spring', 0.2, 1)}
				className="flex flex-col justify-center items-center text-center"
			>
				<h1 className="font-teko uppercase font-semibold text-4xl">
					Zanurz się w świat górskich przygód
				</h1>

				<p className="text-lg mt-4 font-montserrat text-stone leading-6">
					Bądź zawsze na czasie z najnowszymi informacjami o trasach oraz
					pogodzie na Tatrzańskich szlakach. Zasubskrybuj newsletter TPN
				</p>
			</motion.div>
			<motion.div
				variants={fadeIn('up', 'spring', 0.2, 1)}
				className="flex w-full justify-center mt-16"
			>
				<div className="flex flex-row justify-between items-center border-2 border-black rounded-xl sm:w-[650px] w-[400px] pr-2">
					<input
						type="text"
						placeholder="name@email.pl"
						className="sm:w-[600px] w-[350px] h-12 p-4 outline-none bg-transparent font-montserrat"
					/>
					<div className="w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer">
						<FaArrowRight className="text-white" />
					</div>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default Subscribe;
