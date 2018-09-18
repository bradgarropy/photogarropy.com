module.exports = {
    siteMetadata: {
        title: "photogarropy",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-react-helmet",
        },
        {
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: process.env.TRACKING_ID,
                head: true,
                anonymize: true,
                respectDNT: false,
            },
        },
        {
            resolve: "gatsby-plugin-google-fonts",
            options: {
                fonts: [
                    "josefin slab",
                    "sacramento",
                ],
            },
        },
        {
            resolve: "gatsby-plugin-sass",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "content",
                path: `${__dirname}/src/pages/`,
            },
        },
    ],
}
