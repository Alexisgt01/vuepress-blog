---
title: "Qui suis-je ?"
date: 2024-09-14
sticky: true
order: 1
category:
  - Hors contexte
tag:
  - State pattern
  - Clean code
  - Bonnes pratiques
---


<script setup>
import {useDarkOrLight} from '@Composables/darkOrLight';

const {isDark} = useDarkOrLight({dark: '', light: ''});
import {
    LaravelIcon,
    EsLintIcon,
    CypressIcon,
    VueDotjsIcon,
    PhpIcon,
    AxiosIcon,
    LodashIcon,
    JavaScriptIcon,
    MySqlIcon,
    DockerIcon,
    GitLabIcon,
    UbuntuIcon,
    NginxIcon,
    ApacheIcon,
    DebianIcon,
    MariaDbIcon,
    PrettierIcon,
    Html5Icon,
    LaravelNovaIcon,
    InertiaIcon,
    ComposerIcon,
    VuetifyIcon,
    TypeScriptIcon,
    NuxtDotjsIcon,
    ViteIcon,
    JestIcon,
    GraphQlIcon,
    AnsibleIcon,
    RedisIcon,
    NpmIcon,
    VitePressIcon,
    WebpackIcon,
    SassIcon,
    TailwindCssIcon,
    PhpStormIcon,
    LinuxIcon,
    GoogleIcon,
    JiraIcon,
    JetBrainsIcon,
    TrelloIcon,
    DBeaverIcon,
    InsomniaIcon,
    AdobePhotoshopIcon,
    SentryIcon,
    ElasticIcon,
    SonarIcon
} from 'vue3-simple-icons';

import LaravelCashierIcon from '@Components/icon/laravel-cashier.vue';
import LaravelBreezeIcon from '@Components/icon/laravel-breeze.vue';
import LaravelEchoIcon from '@Components/icon/laravel-echo.vue';
import LivewireIcon from '@Components/icon/livewire.vue';
import LaravelSanctumIcon from '@Components/icon/laravel-sanctum.vue';
import LaravelScoutIcon from '@Components/icon/laravel-scout.vue';
import LaravelSparkIcon from '@Components/icon/laravel-spark.vue';
import LaravelSocialiteIcon from '@Components/icon/laravel-socialite.vue';
import PiniaIcon from '@Components/icon/pinia.vue';
import VueUseIcon from '@Components/icon/vue-use.vue';
import VueRouterIcon from '@Components/icon/vue-router.vue';
import BootstrapVueIcon from '@Components/icon/bootstrap-vue.vue';
import LaravelPintIcon from '@Components/icon/laravel-pint.vue';
import LarastanIcon from '@Components/icon/larastan.vue';
import PhpFpmIcon from '@Components/icon/php-fpm.vue';
import FrankenPhpIcon from '@Components/icon/frankenphp.vue';
import DeployerPhpIcon from '@Components/icon/php-deployer.vue';
import SpatieIcon from '@Components/icon/spatie.vue';
import PestIcon from '@Components/icon/pest.vue';
import PsrIcon from '@Components/icon/psr.vue';
import VuexIcon from '@Components/icon/vuex.vue';
import AgileIcon from '@Components/icon/agile.vue';
import ScrumIcon from '@Components/icon/scrum.vue';
import KanbanIcon from '@Components/icon/kanban.vue';
import DatabaseIcon from '@Components/icon/database.vue';
import PuzzleIcon from '@Components/icon/puzzle.vue';
import EnglishIcon from '@Components/icon/english.vue';
import RepositoryIcon from '@Components/icon/repository.vue';
import EyeIcon from '@Components/icon/eye.vue';
import UsersIcon from '@Components/icon/users.vue';
import SecurityIcon from '@Components/icon/security.vue';
import WriteIcon from '@Components/icon/write.vue';
import MindIcon from '@Components/icon/mind.vue';
import MicrosoftIcon from '@Components/icon/microsoft.vue';
import 'animate.css'; 
import {ref, watch} from "vue"; 

const iconsPrimaryStack = [
    { component: LaravelIcon, fill: '#FF2D20', name: 'Laravel' },
    { component: VueDotjsIcon, fill: '#4FC08D', name: 'Vue.js' },
    { component: PhpIcon, fill: '#777BB4', name: 'PHP' },
    { component: JavaScriptIcon, fill: '#F7DF1E', name: 'Javascript' },
    { component: MySqlIcon, fill: '#4479A1', name: 'MySQL' },
    { component: DockerIcon, fill: '#2496ED', name: 'Docker' },
    { component: GitLabIcon, fill: '#FC6D26', name: 'Gitlab' },
    { component: NginxIcon, fill: '#009639', name: 'Nginx' },
    { component: UbuntuIcon, fill: '#E95420', name: 'Ubuntu' },
    { component: ApacheIcon, fill: '#D22128', name: 'Apache2' },
    { component: MariaDbIcon, fill: '#003545', name: 'MariaDB' },
    { component: DebianIcon, fill: '#A81D33', name: 'Debian' },
];

const iconsPrimaryEcosystem = [
    { component: LaravelCashierIcon, fill: null, name: "Laravel Cashier" },
    { component: LaravelNovaIcon, fill: "#57a5e2", name: "Laravel Nova" },
    { component: LaravelBreezeIcon, fill: null, name: "Laravel Breeze" },
    { component: LaravelEchoIcon, fill: null, name: "Laravel Echo" },
    { component: LivewireIcon, fill: null, name: "Laravel Livewire" },
    { component: LaravelSanctumIcon, fill: null, name: "Laravel Sanctum" },
    { component: LaravelScoutIcon, fill: null, name: "Laravel Scout" },
    { component: LaravelSparkIcon, fill: null, name: "Laravel Spark" },
    { component: LaravelSocialiteIcon, fill: null, name: "Laravel Socialite" },
    { component: InertiaIcon, fill: "#9553E9", name: "Inertia" },
    { component: ComposerIcon, fill: "#885630", name: "Composer" },
    { component: SpatieIcon, fill: null, name: "Spatie" },
    { component: PestIcon, fill: null, name: "Pest" },
    { component: LarastanIcon, fill: null, name: "Larastan" },
    { component: FrankenPhpIcon, fill: null, name: "FrankenPHP" },
    { component: GraphQlIcon, fill: "#E10098", name: "GraphQL" },
    { component: RedisIcon, fill: "#FF4438", name: "Redis" },
    { component: DeployerPhpIcon, fill: null, name: "PHP deployer" },
    { component: AnsibleIcon, fill: "#EE0000", name: "Ansible" },
    { component: PsrIcon, fill: null, name: "PSR" },
    { component: TypeScriptIcon, fill: "#3178C6", name: "Typescript" },
    { component: NpmIcon, fill: "#CB3837", name: "Npm" },
    { component: ViteIcon, fill: "#646CFF", name: "Vite" },
    { component: NuxtDotjsIcon, fill: "#00DC82", name: "Nuxt.js" },
    { component: VuetifyIcon, fill: "#1867C0", name: "Vuetify" },
    { component: VueUseIcon, fill: null, name: "Vue Use" },
    { component: PiniaIcon, fill: null, name: "Pinia" },
    { component: VueRouterIcon, fill: null, name: "Vue router" },
    { component: BootstrapVueIcon, fill: null, name: "BootstrapVue" },
    { component: JestIcon, fill: "#C21325", name: "Jest" },
    { component: VuexIcon, fill: null, name: "Vuex" },
    { component: VitePressIcon, fill: "#5C73E7", name: "Vitepress" },
    { component: WebpackIcon, fill: "#8DD6F9", name: "Webpack" },
    { component: SassIcon, fill: "#CC6699", name: "Sass" },
    { component: TailwindCssIcon, fill: "#06B6D4", name: "TailwindCSS" },
    { component: AxiosIcon, fill: "#5A29E4", name: "Axios" },
    { component: CypressIcon, fill: "#69D3A7", name: "Cypress" },
    { component: EsLintIcon, fill: "#4B32C3", name: "ESLint" },
    { component: PrettierIcon, fill: "#F7B93E", name: "Prettier" },
    { component: LodashIcon, fill: "#3492FF", name: "Lodash" }
];

const iconsSecondary = [
   { component: AgileIcon, fill: null, name: "Agile" },
   { component: ScrumIcon, fill: null, name: "Scrum" },
   { component: KanbanIcon, fill: null, name: "Kanban" },
   { component: DatabaseIcon, fill: null, name: "Architecture données" },
   { component: PuzzleIcon, fill: null, name: "Design pattern" },
   { component: RepositoryIcon, fill: null, name: "Architecture de code" },
   { component: EyeIcon, fill: null, name: "Minutie" },
   { component: UsersIcon, fill: null, name: "Travail d'équipe" },
   { component: SecurityIcon, fill: null, name: "Sécurité" },
   { component: WriteIcon, fill: null, name: "Rédaction technique" },
   { component: MindIcon, fill: null, name: "Créativité" },
   { component: EnglishIcon, fill: null, name: "Anglais technique" },
];

const iconsSoft = ref([
   { component: PhpStormIcon, fill: null, name: "PhpStorm" },
   { component: JetBrainsIcon, fill: null, name: "JetBrains" },
   { component: JiraIcon, fill: '#0052CC', name: "Jira" },
   { component: InsomniaIcon, fill: '#4000BF', name: "Insomnia" },
   { component: DBeaverIcon, fill: isDark() ? '#BCAAA6' : '#382923', name: "DBeaver" },
   { component: AdobePhotoshopIcon, fill: '#31A8FF', name: "Adobe Photoshop" },
   { component: SentryIcon, fill: '#362D59', name: "Sentry" },
   { component: SonarIcon, fill: '#FD3456', name: "Sonar" },
   { component: ElasticIcon, fill: '#005571', name: "Elastic" },
   { component: LinuxIcon, fill: '#FCC624', name: "Linux" },
   { component: MicrosoftIcon, fill: null, name: "Microsoft ecosystem" },
   { component: GoogleIcon, fill: '#4285F4', name: "Google ecosystem" },
]);

watch(() => isDark(), (v) => {
    iconsSoft.value[4].fill = v ? '#BCAAA6' : '#382923';
});


const iconsCMS = [];
</script>

<style lang="scss">
    @keyframes in {
        
    }
    .effect-text {
        span {
            opacity: 0;
        }
        &:hover {
            span {
                opacity: 1;
                animation: slideInDown;
                animation-duration: .5s;
            }
        }
    }
</style>

<br>

# Développeur PHP Javascript 👨🏻‍💻

Je suis développeur web **freelance** et spécialisé en **back-end**, avec une expertise en **Laravel**. Je travaille principalement avec la stack
**Laravel/Vue.js** pour divers projets, tels que des applications SPA, microservices, API, architectures monolithiques et
monolithiques modernes avec **Inertia**.

Je maîtrise également de nombreux patterns et différentes approches pour organiser mon code, notamment MVC, Modulaire,
Action, Service-Based, DDD, et API First.

J'ai débuté ma carrière de développeur début **2018** et adopté Laravel dès la version 5.7 à la fin de cette même année. Depuis, j'ai
accumulé plusieurs années d'expérience sur ce framework, me permettant de maîtriser ses subtilités et d'acquérir une
**expertise technique approfondie**. Mon parcours m'a conduit à concevoir des solutions robustes et évolutives, tout en me
tenant constamment à jour avec les nouvelles fonctionnalités introduites jusqu'à la version actuelle de Laravel, la
version 11.

## Stack 🚀

<div class="w-100 flex justify-between-l justify-center flex-wrap">
    <div class="w-33-m w-33 w-25-ns effect-text tc relative mt4" v-for="(icon, index) in iconsPrimaryStack">
      <component
        :is="icon.component"
        :style="{ fill: icon.fill }"
        class="w3 h-auto"
      />
      <span class="db absolute w-100 tc f6">{{ icon.name }}</span>
    </div>
</div>

#### Ecosystem

<div class="w-100 flex justify-between-l justify-center flex-wrap mb4">
<div
  v-for="(icon, index) in iconsPrimaryEcosystem"
  :key="index"
  class="w-20-m w-33 w-10-ns effect-text tc relative mt4"
>
  <component
    :is="icon.component"
    :style="{ fill: icon.fill }"
    class="w2 h-auto"
  ></component>
  <span class="db absolute w-100 tc f6">{{ icon.name }}</span>
</div>
</div>

<!--
### Secondary skills 🥈

<div class="w-100 flex justify-between-l justify-center flex-wrap mb4">
    <div class="w-20-m w-33 w-auto-ns effect-text tc relative mt4" v-for="(icon, index) in iconsSecondary">
      <component
        :is="icon.component"
        :style="{ fill: icon.fill }"
        class="w3 h-auto"
      />
      <span class="db absolute w-100 tc f6">{{ icon.name }}</span>
    </div>
</div>

### Soft & CMS 📱

##### Software

<div class="w-100 flex justify-between-l justify-center flex-wrap mb4">
    <div class="w-20-m w-33 w-auto-ns effect-text tc relative mt4" v-for="(icon, index) in iconsSoft">
      <component
        :is="icon.component"
        :style="{ fill: icon.fill }"
        class="w3 h-auto"
      />
      <span class="db absolute w-100 tc f6">{{ icon.name }}</span>
    </div>
</div>

##### Content management system

<div class="w-100 flex justify-between-l justify-center flex-wrap mb4">
    <div class="w-20-m w-33 w-auto-ns effect-text tc relative mt4" v-for="(icon, index) in iconsCMS">
      <component
        :is="icon.component"
        :style="{ fill: icon.fill }"
        class="w3 h-auto"
      />
      <span class="db absolute w-100 tc">{{ icon.name }}</span>
    </div>
</div>
-->
