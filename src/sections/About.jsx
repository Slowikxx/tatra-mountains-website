import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { AboutPart } from '../components';
import { aboutContents } from '../constants';
const About = () => {
	return (
		<motion.section
			variants={staggerContainer}
			viewport={{ once: false, amount: 0.25 }}
			id="about"
		>
			{aboutContents.map((content, i) => (
				<AboutPart
					key={content.title}
					subtitle={content.subtitle}
					title={content.title}
					paragraph={content.paragraph}
					image={content.image}
					textFirst={content.textFirst}
					index={i}
				/>
			))}
		</motion.section>
	);
};

export default About;
