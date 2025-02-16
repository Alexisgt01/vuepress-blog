---
sticky: true
---

# Un mot sur ce site

## Avant propos

[La page d'accueil](/#developpeur-php-javascript-👨🏻%E2%80%8D💻) offrant déjà une présentation claire à mon sujet,
j'utiliserai donc cette introduction au blog pour expliquer mon choix techniques dans la réalisation
de ce projet.

## Pourquoi Vuepress ?

Pour sa simplicité, rien de plus. Fin, merci.

Bon, tâchons d'être plus précis.

#### Tout d'abord c'est quoi Vuepress ?

[VuePress](https://vuepress.vuejs.org/) est un générateur de sites statiques conçu pour être simple à utiliser et
efficace, en particulier pour les
développeurs qui souhaitent créer de la documentation ou des blogs techniques. Basé sur Vue.js, VuePress permet de
rédiger du contenu en [Markdown](https://fr.wikipedia.org/wiki/Markdown), ce qui le rend particulièrement attrayant pour
les développeurs familiers avec cet
écosystème. Les pages sont initialement générées en HTML statique, mais dès qu'elles sont chargées, elles deviennent des
Single Page Applications (SPA) alimentées par Vue.js, offrant ainsi une expérience utilisateur fluide et interactive.

En d'autres termes, vous rédigez un contenu structuré en Markdown et obtenez un site web statique, rapide à déployer.
Bien que VuePress soit modulable et personnalisable, il reste avant tout axé sur la rédaction. Les options en matière de
design et de fonctionnalités sont limitées. C'est une solution simple et efficace pour créer un site statique, comme une
documentation ou un blog, sans se perdre dans les détails. Idéal pour un développeur back-end pressé.

Pourquoi j’ai choisi d’utiliser VuePress comme site professionnel
Lorsque j'ai décidé de créer mon site professionnel, j'ai opté pour VuePress. Ce choix n'est pas anodin et reflète une
démarche bien réfléchie pour répondre à mes besoins en tant que développeur. Dans cet article, je vais vous expliquer ce
qu'est VuePress, ses avantages et inconvénients, ainsi que les raisons qui m'ont poussé à le choisir pour mon site.

Qu'est-ce que VuePress ?
VuePress est un générateur de sites statiques conçu pour être simple à utiliser et efficace, en particulier pour les
développeurs qui souhaitent créer de la documentation ou des blogs techniques. Basé sur Vue.js, VuePress permet de
rédiger du contenu en Markdown, ce qui le rend particulièrement attrayant pour les développeurs familiers avec cet
écosystème. Les pages sont initialement générées en HTML statique, mais dès qu'elles sont chargées, elles deviennent des
Single Page Applications (SPA) alimentées par Vue.js, offrant ainsi une expérience utilisateur fluide et interactive.

Les avantages et les inconvénients de VuePress
Avantages :

Simplicité et efficacité : VuePress permet de créer rapidement des sites statiques sans avoir besoin d'une
infrastructure complexe. Il suffit d'écrire en Markdown, et VuePress se charge du reste, rendant le processus très
intuitif pour les développeurs.

Performance : En générant des pages statiques, VuePress assure un temps de chargement rapide et une excellente
performance, ce qui est essentiel pour l'expérience utilisateur. Cependant, il est important de noter que les
performances peuvent varier si beaucoup de fonctionnalités dynamiques sont ajoutées via Vue.js, car cela peut alourdir
le chargement en JavaScript.

Personnalisation via Vue.js : VuePress offre une grande flexibilité pour personnaliser son site grâce à Vue.js. Les
développeurs peuvent facilement ajouter des composants Vue pour enrichir leur contenu.

Riche écosystème : VuePress bénéficie d'une communauté active et de nombreux plugins, ce qui facilite l'extension des
fonctionnalités de base.

Inconvénients :

Limité aux sites statiques : VuePress est parfait pour des sites de documentation ou des blogs simples, mais il n'est
pas conçu pour des sites dynamiques nécessitant une interaction serveur complexe.

SEO limité par défaut : VuePress n’est pas le meilleur choix pour ceux qui veulent exceller en SEO, surtout si le SSR (
Server-Side Rendering) n'est pas activé. Cependant, il prend en charge le SEO de base avec une bonne configuration des
balises meta et des plugins pour l'améliorer.

Exige des connaissances techniques : Pour les non-développeurs, VuePress peut sembler intimidant en raison de la
nécessité de manipuler des configurations et des fichiers Markdown.

Pourquoi avoir fait ce choix ?

1. Simplification :

L'une des principales raisons de mon choix est la simplicité qu'offre VuePress. J'utilise Docker pour exécuter VuePress,
ce qui permet de déployer facilement l'application sans se soucier des bases de données ou des backups complexes. Le
code étant statique et stocké sur GitLab, il n'y a pas besoin d'un environnement complexe, ce qui permet d'avoir un site
rapide à mettre en place et à exécuter.

2. Une façon de bloguer façon dev :

VuePress offre une approche de blogging adaptée aux développeurs. En intégrant un pipeline CI/CD sur GitLab, je peux
simplement écrire mes articles en Markdown, pousser les changements avec Git, et l'article est publié automatiquement.
Cette méthode s'éloigne des outils WYSIWYG ou des plateformes comme WordPress. Bien qu'elle requière quelques
compétences techniques, notamment pour la configuration initiale du pipeline CI/CD et de Docker, elle est extrêmement
rapide et efficace à mettre en place par la suite.

3. SEO pas nécessaire :

Étant donné que je ne cherche pas à me positionner en tête des moteurs de recherche, VuePress me convient parfaitement.
Mon site, étant principalement une page unique (SPA), n'est pas optimisé pour le SEO avancé ou le SSR. Je compte
davantage sur le partage de liens, que ce soit dans le pied de page de mes e-mails, sur LinkedIn, ou d'autres réseaux
sociaux, pour que mes articles atteignent leur public. VuePress permet toutefois d'ajouter des balises SEO via sa
configuration et des plugins si besoin.

4. Écosystème VuePress :

L'écosystème de VuePress est riche et en constante évolution. Avec une communauté active et de nombreux packages
disponibles, il est facile d'étendre les fonctionnalités de base de VuePress pour l'adapter à mes besoins spécifiques.
Grâce aux plugins, aux thèmes personnalisables, et à la possibilité d'intégrer facilement des composants Vue.js,
VuePress offre une grande flexibilité.

5. La cible :

Mon site s'adresse principalement aux professionnels de l'IT, en particulier ceux travaillant avec des technologies web
et spécialisés en backend. Je préfère donc me concentrer sur le contenu technique pertinent plutôt que sur un design
trop sophistiqué, qui ne serait pas en phase avec mon public cible.

Présentation technique
Mon serveur est configuré avec un Docker Nginx en tant que reverse proxy, qui redirige les requêtes HTTP vers les
différentes applications hébergées dans des containers Docker. Chaque application ou service est isolé dans son propre
container, ce qui permet une gestion efficace et une bonne sécurité de l'infrastructure. Les applications communiquent
entre elles via le réseau Docker ou la boucle locale, assurant une modularité et une robustesse accrues de l'ensemble du
système. Pour les connexions sécurisées, Nginx gère les certificats SSL et assure une configuration HTTPS optimale.

En conclusion, VuePress s'est avéré être le choix idéal pour mes besoins spécifiques de blogging en tant que
développeur. Sa simplicité, son efficacité, et la façon dont il s'intègre dans un workflow de développement moderne en
font un outil incontournable pour ceux qui, comme moi, cherchent une manière technique et directe de partager leurs
connaissances en ligne.

s
