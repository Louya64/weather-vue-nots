<script>
import axios from "axios";
import Today from "../components/Today.vue";
import Hourly from "../components/Hourly.vue";
import Daily from "../components/Daily.vue";
export default {
	data() {
		return {
			zip: 13000,
			city: "",
			currentWeather: {},
			hourlyWeather: [],
			dailyWeather: [],
			todayDisplay: true,
			hourlyDisplay: false,
			dailyDisplay: false,
		};
	},
	mounted() {
		axios
			.get(
				`http://api.openweathermap.org/geo/1.0/zip?zip=${this.zip},fr&appid=4e574fa005b98baeaa15f3346ec9fb64`
			)
			.then((res) => {
				(this.city = res.data.name),
					axios
						.get(
							`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.lat}&lon=${res.data.lon}&units=metric&lang=fr&APPID=4e574fa005b98baeaa15f3346ec9fb64`
						)
						.then((res) => {
							(this.currentWeather = res.data.current),
								(this.hourlyWeather = res.data.hourly),
								(this.dailyWeather = res.data.daily);
						});
			});
	},
	methods: {
		updateAxios() {
			axios
				.get(
					`http://api.openweathermap.org/geo/1.0/zip?zip=${this.zip},fr&appid=4e574fa005b98baeaa15f3346ec9fb64`
				)
				.then((res) => {
					(this.city = res.data.name), console.log(res.data.name);
					axios
						.get(
							`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.lat}&lon=${res.data.lon}&units=metric&lang=fr&APPID=4e574fa005b98baeaa15f3346ec9fb64`
						)
						.then((res) => {
							(this.currentWeather = res.data.current),
								(this.hourlyWeather = res.data.hourly),
								(this.dailyWeather = res.data.daily),
								(this.zip = null);
						});
				});
		},
		displayComponent(target) {
			if (target === "today") {
				this.hourlyDisplay = this.dailyDisplay = false;
				this.todayDisplay = true;
			}
			if (target === "hourly") {
				this.todayDisplay = this.dailyDisplay = false;
				this.hourlyDisplay = true;
			}
			if (target === "daily") {
				this.todayDisplay = this.hourlyDisplay = false;
				this.dailyDisplay = true;
			}
		},
	},
	components: { Today, Hourly, Daily },
};
</script>

<template>
	<header>
		<ul class="nav">
			<li @click="displayComponent('today')">Aujourd'hui</li>
			<li @click="displayComponent('hourly')">Heure par heure (48h)</li>
			<li @click="displayComponent('daily')">Prévisions sur 7 jours</li>
		</ul>
		<form action="" @submit.prevent="updateAxios">
			<label for="zip">Code postal</label>
			<input v-model="zip" type="text" id="zip" />
		</form>
	</header>
	<main>
		<h1>{{ city }}</h1>
		<Today v-if="todayDisplay" :currentWeather="currentWeather" />
		<Hourly v-else-if="hourlyDisplay" :hourlyWeather="hourlyWeather" />
		<Daily v-else-if="dailyDisplay" :dailyWeather="dailyWeather" />
	</main>
</template>

<style>
* {
	margin: 0;
	padding: 0;
}
li {
	list-style: none;
	padding: 20px;
	background-color: lightblue;
}
li:hover {
	cursor: pointer;
}
header {
	margin: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.nav {
	flex: 1;
	display: flex;
	justify-content: space-evenly;
}
h1,
h2 {
	text-align: center;
	margin: 10px;
}
</style>
