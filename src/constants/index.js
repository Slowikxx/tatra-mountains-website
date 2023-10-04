import {
	hiking2,
	hiking3,
	landscape,
	kosodrzewina,
	kozica,
	tojad,
	swistak,
	bear,
} from '../assets/images';

export const navLinks = [
	{ href: '#about', label: 'Dowiedz się więcej' },
	{ href: '#subscribe', label: 'Kontakt' },
	{ href: '#get-to-know', label: 'Nauka' },
];

export const aboutContents = [
	{
		subtitle: 'Odkryj',
		title: 'Szczyty Marzeń',
		paragraph: `Zielone doliny, turkusowe jeziora, wysokie szczyty i majestatyczne
    lodowce – to właśnie malowniczy krajobraz Tatr, który zapiera dech w
    piersiach. Bez względu na to, czy jesteś zapalonym wędrowcem,
    miłośnikiem przyrody czy poszukiwaczem ekstremalnych doznań, w Tatrach
    znajdziesz coś dla siebie.`,
		image: hiking3,
		textFirst: true,
	},
	{
		subtitle: 'Podróżuj',
		title: 'Tak jak lubisz',
		paragraph:
			'Bez względu na to, czy jesteś doświadczonym wędrowcem, czy dopiero rozpoczynasz swoją przygodę z górami, w Tatrach znajdziesz trasy dla siebie. Od łagodnych ścieżek prowadzących przez lasy i pastwiska, po trudniejsze trasy wiodące na szczyty, które wynagrodzą Cię spektakularnymi panoramami.',
		image: hiking2,
		textFirst: false,
	},
	{
		subtitle: 'Podziwiaj',
		title: 'Najpiękniejsze widoki',
		paragraph:
			'Szczyty tego majestatycznego łańcucha górskiego zdobią niebiańsko błękitne jeziora oraz srebrzyste potoki, a ich kontury mistycznie wtopione są w chmury. Te dziewicze krajobrazy skrywają w sobie dziką naturę i piękno, które gwarantuje Cię zachwycić. Każdy krok w Tatrach jest jak spotkanie z harmonią alpejskiej przygody.',
		image: landscape,
		textFirst: true,
	},
];

export const getToKnow = [
	{
		id: 'pic-1',
		img: tojad,
		title: 'Tojad',
		subtitle:
			'Piękności tej rośliny dorównuje toksyczność. Należy podziwiać ją z daleka zachowująć ostrożność.',
	},
	{
		id: 'pic-2',
		img: bear,
		title: 'Niedźwiedź',
		subtitle:
			'Osiąga niewielkie rozmiary w stosunku do innych podgatunków niedźwiedzi brunatnych. Ich środowiska naturalne podlegają ochronie, z uwagi na wysokie narażenie na mnogość zagrożeń',
	},
	{
		id: 'pic-3',
		img: kozica,
		title: 'Kozica',
		subtitle:
			'Najbardziej znana mieszkanka Tatr. Jej podobizna została uwieczniona w logu TPN. Jest zwierzęciem roślinożernym, bardzo dobrze przystosowanym do wysokogórskich warunków',
	},
	{
		id: 'pic-4',
		img: kosodrzewina,
		title: 'Kosodrzewina',
		subtitle:
			'Znajduje się między halami a reglem górnym na wysokości 1400 - 2500 metrów n.p.m. Stanowi ważną rolę w gospodarce wodnej gór, przeciwdziała erozji oraz obsuwaniu się kamieni i mas śniegu. Znajduje się pod częściową ochroną. ',
	},
	{
		id: 'pic-5',
		img: swistak,
		title: 'Świstak',
		subtitle:
			'Te duże gryzonie w Polsce można spotkać tylko w Tatrach. Charakteryzuje je doskonały wzrok oraz charakterystyczny gwizd, jaki wydają w czasie zagrożenia. W okresie jesienno-zimowym zapadają w sen zimowy na okres aż 7 miesięcy.',
	},
];

export const footerLinks = [
	{
		title: 'Poznaj',
		links: [
			{ name: 'Wystawy', link: '/' },
			{ name: 'Przyroda', link: '/' },
			{ name: 'Zwierzęta', link: '/' },
			{ name: 'Natura 2000', link: '/' },
			{ name: 'Edukacja', link: '/' },
			{ name: 'Biblioteka', link: '/' },
		],
	},
	{
		title: 'Pomoc',
		links: [
			{ name: 'O nas', link: '/' },
			{ name: 'FAQs', link: '/' },
			{ name: 'Wolontariat', link: '/' },
			{ name: 'Polityka prywatności', link: '/' },
		],
	},
	{
		title: 'Kontakt',
		links: [
			{ name: 'pomoc@tpn.pl', link: 'mailto:pomoc@tpn.pl' },
			{ name: '+92554862354', link: 'tel:+92554862354' },
		],
	},
];
