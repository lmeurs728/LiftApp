import VueDevtools from 'nativescript-vue-devtools'
import Vue from "nativescript-vue";
import RadChart from 'nativescript-ui-chart/vue';

import Home from "./components/pages/home/Home";
import MainPageRouter from "./components/mainPageRouter/MainPageRouter";
import StartWorkout from "./components/pages/lifts/presaved/StartWorkout";
import EditWorkout from "./components/pages/lifts/customize/EditWorkout";

Vue.use(VueDevtools);
Vue.use(RadChart);

Vue.config.silent = false;

new Vue({
    render: h => h('frame', [h(MainPageRouter)]),
}).$start();
