import VueDevtools from 'nativescript-vue-devtools'
import Vue from "nativescript-vue";

import Home from "./components/pages/home/Home";
import Feed from "./components/pages/feed/Feed";

Vue.use(VueDevtools);

new Vue({
    render: h => h('frame', [h(Home)]),
}).$start();
