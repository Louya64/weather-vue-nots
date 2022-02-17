<script>
export default {
	props: {
		currentWeather: Object,
	},
	data() {
		return {
			newDate: "",
		};
	},
	created() {
		this.newDate = new Date(this.currentWeather.dt * 1000);
	},
	computed: {
		url() {
			if (this.currentWeather?.weather?.[0]) {
				return `http://openweathermap.org/img/wn/${this.currentWeather.weather?.[0]?.icon}@2x.png`;
			}
		},
		date() {
			return this.newDate.toLocaleString("fr-FR", {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
			});
		},
	},
};
</script>

<template>
	<div>
		<h2>Aujourd'hui {{ date }}</h2>
		<div class="todayWeatherInfos">
			<p>
				{{ currentWeather?.weather?.[0].description }}
			</p>
			<img :src="url" width="250" alt="what the sky likes like now" />
		</div>
	</div>
</template>

<style>
.todayWeatherInfos {
	padding: 20px;
	text-align: center;
	width: 50vw;
	margin: auto;
	border: 2px solid black;
	border-radius: 10px;
	background-color: lightcyan;
}
</style>
