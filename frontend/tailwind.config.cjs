const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['"Lato"']
		},
		extend: {
			height: {
				'80vh': '80vh',
				'min-content': 'min-content'
			}
		}
	},
	plugins: []
};

module.exports = config;
