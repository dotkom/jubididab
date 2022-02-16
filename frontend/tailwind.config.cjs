const daisyui = require('daisyui');
const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['"Lato"']
		},
		extend: {
			height: {
				'80vh': '80vh'
			}
		}
	},

	plugins: [daisyui]
};

module.exports = config;
