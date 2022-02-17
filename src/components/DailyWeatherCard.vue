<script>
export default {
	props: {
		timestamp: Number,
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
		this.newDate = new Date(this.timestamp * 1000);
		this.url = `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
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
		<img width="150" :src="url" alt="" />
		<div class="weatherContainerInfos">
			<p>{{ description }}</p>
			<div>Temp min : {{ temp.min }}°C</div>
			<div>Temp max : {{ temp.max }}°C</div>
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
