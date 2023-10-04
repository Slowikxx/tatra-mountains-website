import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';
import { footerLogo } from '../assets/images';
import { footerLinks } from '../constants';
import { AiOutlineCopyright } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import {
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
	return (
		<motion.footer
			variants={footerVariants}
			initial="hidden"
			whileInView="show"
			className="learn-container"
		>
			<div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
				<div className="flex flex-1 justify-around lg:gap-10 gap-20 flex-wrap">
					{footerLinks.map((section) => (
						<div key={section}>
							<h4 className="text-black font-montserrat text-2xl leeading-normal font-medium mb-6">
								{section.title}
							</h4>
							<ul>
								{section.links.map((link) => (
									<li
										key={link.name}
										className="mt-3 text-stone font-montserrat text-base leading-normal cursor-pointer hover:text-black"
									>
										<a href="#">{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className="flex flex-col items-center lg:self-start self-center">
					<a href="/">
						<img src={footerLogo} alt="footer logo" width={300} height={60} />
					</a>
					<div className="flex items-center gap-5 mt-8">
						<div className="flex justify-center items-center w-12 h-12 bg-black rounded-full cursor-pointer">
							<BiLogoFacebook className="w-6 h-6 text-white hover:text-blue-600" />
						</div>
						<div className="flex justify-center items-center w-12 h-12 bg-black rounded-full cursor-pointer">
							<AiOutlineInstagram className="w-6 h-6 text-white hover:text-pink-500" />
						</div>
						<div className="flex justify-center items-center w-12 h-12 bg-black rounded-full cursor-pointer">
							<AiOutlineTwitter className="w-6 h-6 text-white hover:text-blue-500" />
						</div>
						<div className="flex justify-center items-center w-12 h-12 bg-black rounded-full cursor-pointer">
							<AiOutlineYoutube className="w-6 h-6 text-white hover:text-red-500" />
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-between text-black-400 mt-24 max-sm:flex-col max-sm:items-center">
				<div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
					<AiOutlineCopyright className="m-0 w-5 h-5" />
					<p>Copyright. Wszystkie prawa zastrzeżone.</p>
				</div>
				<p className="font-montserrat cursor-pointer">Regulamin</p>
			</div>
		</motion.footer>
	);
};

export default Footer;
