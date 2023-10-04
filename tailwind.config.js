/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontSize: {
			xs: ['12px', '16px'],
			sm: ['14px', '20px'],
			base: ['16px', '19.5px'],
			lg: ['18px', '21.94px'],
			xl: ['20px', '24.38px'],
			'2xl': ['24px', '29.26px'],
			'3xl': ['28px', '50px'],
			'4xl': ['48px', '58px'],
			'6xl': ['72px', '87px'],
			'8xl': ['96px', '106px'],
			'10xl': ['120px', '132px'],
			'12xl': ['144px', '158px'],
			'14xl': ['168px', '184px'],
			'16xl': ['192px', '210px'],
		},
		extend: {
			fontFamily: {
				sedgwick: ['Sedgwick Ave Display', 'cursive'],
				courgette: ['Courgette', 'cursive'],
				montserrat: ['Montserrat', 'sans-serif'],
				teko: ['Teko', 'sans-serif'],
				bebas: ['Bebas Neue', 'sans-serif'],
			},
			screens: {
				wide: '1000px',
			},
			backgroundImage: {
				tatry: "url('/src/assets/images/tatry.jpg')",
				tatryFront: "url('/src/assets/images/tatry-front.png')",
			},
			colors: {
				moss: '#466d1d',
				stone: '#888c8d',
			},
		},
	},
	plugins: [],
};
