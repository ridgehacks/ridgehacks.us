module.exports = {
	siteMetadata: {
		siteUrl: "https://ridgehacks.us",
		title: "ridgehacks",
	},
	plugins: [
		"gatsby-plugin-sass",
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
		'gatsby-plugin-netlify'
	],
};
