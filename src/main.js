import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Today from "@/views/Today.vue";
import Hourly from "@/views/Hourly.vue";
import Daily from "@/views/Daily.vue";

const routes = [
	{ path: "/", component: Today },
	{ path: "/hourly", component: Hourly },
	{ path: "/daily", component: Daily },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

createApp(App).use(router).mount("#app");
