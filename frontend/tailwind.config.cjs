const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
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
	plugins: []
};

module.exports = config;
