import VueDevtools from 'nativescript-vue-devtools'
import Vue from "nativescript-vue";

import Home from "./components/pages/home/Home";
import MainPageRouter from "./components/mainPageRouter/MainPageRouter";
import StartWorkout from "./components/pages/lifts/presaved/StartWorkout";
import EditWorkout from "./components/pages/lifts/customize/EditWorkout";

Vue.use(VueDevtools);

Vue.config.silent = false;

new Vue({
    render: h => h('frame', [h(MainPageRouter)]),
}).$start();
