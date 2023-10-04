import { Navbar } from './components';
import { Hero, About, Subscribe, GetToKnow, Footer } from './sections';

export default function App() {
	return (
		<main className="relative max-lg:overflow-hidden">
			<Navbar />
			<section>
				<Hero />
			</section>
			<section className="w-full padding bg-[#010d0d]">
				<About />
			</section>
			<section className="w-full padding bg-[#e6e6e6]">
				<Subscribe />
			</section>
			<section className="w-full padding bg-[#010d0d]">
				<GetToKnow />
			</section>
			<section className="padding-x padding-t pb-8 bg-[#e6e6e6]">
				<Footer />
			</section>
		</main>
	);
}
