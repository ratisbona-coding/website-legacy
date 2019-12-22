module.exports = {
  siteMetadata: {
    title: "ratisbona coding e.V.",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-no-javascript",
  ],
};
