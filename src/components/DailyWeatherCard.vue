<script>
export default {
	props: {
		date: Number,
		icon: String,
		temp: Object,
		description: String,
	},
	data() {
		return {
			url: "",
			newDate: "",
		};
	},
	created() {
		this.newDate = new Date(this.date * 1000);
	},
	mounted() {
		this.url = `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
	},
	computed: {
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
	<div class="weatherContainer">
		<h2>{{ date }}</h2>
		<p>{{ description }}</p>
		<img :src="url" alt="" />
		<span>Temp min : {{ temp.min }}°C</span><br />
		<span>Temp max : {{ temp.max }}°C</span>
	</div>
</template>

<style>
.weatherContainer {
	width: 25%;
	margin: 3vw;
	border: 2px solid black;
	border-radius: 10px;
	background-color: lightcyan;
}
</style>
