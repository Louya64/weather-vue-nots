<script>
import axios from "axios";
import Today from "../components/Today.vue";
import HourlyOrDaily from "../components/HourlyOrDaily.vue";
export default {
	data() {
		return {
			zip: 64600,
			cityInfos: {},
			weatherInfos: {},
			todayDisplay: true,
			hourlyDisplay: false,
			dailyDisplay: false,
		};
	},

	computed: {
		city() {
			return this.cityInfos?.data?.name;
		},
		currentWeather() {
			return this.weatherInfos?.data?.current;
		},
		hourlyWeather() {
			return this.weatherInfos?.data?.hourly;
		},
		dailyWeather() {
			return this.weatherInfos?.data?.daily;
		},
	},

	methods: {
		async getAxios() {
			this.cityInfos = await axios.get(
				`http://api.openweathermap.org/geo/1.0/zip?zip=${this.zip},fr&appid=4e574fa005b98baeaa15f3346ec9fb64`
			);
			this.weatherInfos = await axios.get(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${this.cityInfos.data.lat}&lon=${this.cityInfos.data.lon}&units=metric&lang=fr&APPID=4e574fa005b98baeaa15f3346ec9fb64`
			);
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

	mounted() {
		this.getAxios();
	},

	components: { Today, HourlyOrDaily },
};
</script>

<template>
	<header>
		<ul class="nav">
			<li @click="displayComponent('today')">Aujourd'hui</li>
			<li @click="displayComponent('hourly')">Heure par heure (48h)</li>
			<li @click="displayComponent('daily')">Prévisions sur 7 jours</li>
		</ul>
		<form action="" @submit.prevent="getAxios">
			<label for="zip">Code postal</label>
			<input v-model="zip" type="text" id="zip" />
		</form>
	</header>
	<main v-if="currentWeather">
		<h1>{{ city }}</h1>
		<Today v-if="todayDisplay" :currentWeather="currentWeather" />
		<HourlyOrDaily
			v-else
			:hourlyWeather="hourlyWeather"
			:hourlyDisplay="hourlyDisplay"
			:dailyWeather="dailyWeather"
			:dailyDisplay="dailyDisplay"
		/>
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
h1 {
	margin-top: 25vh;
}
</style>
