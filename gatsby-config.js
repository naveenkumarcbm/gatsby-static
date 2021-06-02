module.exports = {
  siteMetadata: {
    title: "dhurga",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: 'gatsby-plugin-load-script',
    //   options: {
    //     src: [
    //       '/bootstrap.all.min.js',
    //       '/front.js',
    //       '/jquery-migrate.min.js',
    //       '/jquery.min.js',
    //       '/script.js'
    //     ]
    //   }
    // },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    }
  ],
};
