import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { getToKnow } from '../constants';
import { GetToKnowCard } from '../components';

const GetToKnow = () => {
	const [active, setActive] = useState('pic-2');
	return (
		<section className="learn-container" id="get-to-know">
			<motion.div
				variants={staggerContainer}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0.25 }}
				className="w-full mx-auto flex flex-col"
			>
				<div className="flex flex-col w-full justify-start items-center">
					<div>
						<p className="font-montserrat text-moss">| Poznaj</p>
						<h1 className="mt-2 text-6xl font-teko text-white">
							Flora i Fauna Tatr
						</h1>
					</div>
				</div>

				<div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
					{getToKnow.map((pic, i) => (
						<GetToKnowCard
							key={pic.id}
							id={pic.id}
							img={pic.img}
							title={pic.title}
							subtitle={pic.subtitle}
							index={i}
							active={active}
							handleClick={setActive}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default GetToKnow;
