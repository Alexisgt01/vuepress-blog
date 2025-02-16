import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/": [
        "",
        "intro",
        {
            text: "Le blog",
            icon: "book",
            prefix: "posts/",
            link: "posts/",
            children: "structure",
        },
    ],
});
