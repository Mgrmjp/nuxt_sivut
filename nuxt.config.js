const main_base_URL = "https://miikka-m.fi";

export default {
    /*
     ** Headers of the page
     */

    sitemap: {
        hostname: main_base_URL,

        defaults: {
            lastmod: new Date()
        }
    },

    env: {
        main_base_URL
    },

    head: {
        title: process.env.npm_package_name || "",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: process.env.npm_package_description || ""
            }
        ],
        link: [
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
            },
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [
        "@/assets/css/animation.css",
        "@/assets/css/fontello.css",
        "@/assets/css/fontello-ie7.css",
        "@/assets/css/fontello-ie7-codes.css",
        "@/assets/css/normalize.css"
    ],

    styleResources: {
        scss: ["./assets/scss/*.scss"]
    },

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        "@nuxtjs/tailwindcss",
        "@nuxtjs/style-resources",
        "@nuxtjs/google-fonts"
    ],
    /*
     ** Nuxt.js modules
     */
    modules: ["@nuxtjs/sitemap"],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    },
    googleFonts: {
        families: {
            "Hind+Siliguri": {
                wght: [300, 400, 500, 600, 700, 900],
                ital: [300, 400, 500]
            }
        },
        display: "swap"
    }
};
