import {defineUserConfig} from "vuepress";
import svgLoader from 'vite-svg-loader'

import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";


export default defineUserConfig({
    base: "/",

    lang: "fr-FR",
    title: "Alexis Gatuingt",
    description: "A blog demo for vuepress-theme-hope",


    theme,
    alias: {
        "@Components": path.resolve(__dirname, "components"),
        "@Composables": path.resolve(__dirname, "composables"),
    }
    // Enable it with pwa
    // shouldPrefetch: false,
});
