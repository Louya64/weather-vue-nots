<script>
export default {
	props: {
		timestamp: Number,
		icon: String,
		temp: Number,
		description: String,
		humidity: Number,
	},
	data() {
		return {
			url: "",
			newDate: "",
		};
	},
	created() {
		this.newDate = new Date(this.timestamp * 1000);
		console.log(this.url);
		this.url = `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
	},
	mounted() {
		this.url = `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
		console.log(this.url);
	},
	computed: {
		date() {
			return this.newDate.toLocaleString("fr-FR", {
				weekday: "long",
				hour: "2-digit",
				minute: "2-digit",
			});
		},
	},
};
</script>

<template>
	<div class="weatherContainer">
		<h2>{{ date }}</h2>
		<img width="250" :src="url" alt="" />
		<div class="weatherContainerInfos">
			<p>{{ description }}</p>
			<div>Température : {{ temp }}°C</div>
			<div>Humidité : {{ humidity }}%</div>
		</div>
	</div>
</template>

<style>
.weatherContainer {
	text-align: center;
	width: 25vw;
	margin: 3vw auto;
	border: 2px solid black;
	border-radius: 10px;
	background-color: lightcyan;
}
.weatherContainer img {
	float: left;
}
.weatherContainerInfos {
	height: 70%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
</style>
