import {navbar} from "vuepress-theme-hope";

export default navbar([
    {
        text: "Articles",
        icon: "book",
        link: "/",
    },
    {
        text: "Catégories",
        icon: "table-cells-large",
        link: "/category/",
        children: [
            {
                text: 'Laravel',
                link: "/category/laravel/"
            },
            {
              text: 'Hors contexte',
              link: '/category/hors-contexte'
            }
        ]
    },
    {
        text: "Chronologie",
        link: "/timeline/",
        icon: "clock"
    }
]);
