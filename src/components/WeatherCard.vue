<script>
export default {
	props: ["title", "icon"],
	data() {
		return {
			url: "",
		};
	},
	mounted() {
		this.url = "http://openweathermap.org/img/wn/" + props.icon + "@2x.png";
		console.log(this.url);
	},
};
</script>

<template>
	<div class="weatherContainer">
		<h2>{{ title }}</h2>
		<img src="url" alt="" />
		<div class=""></div>
	</div>
</template>

<style>
.weatherContainer {
	border: 2px solid black;
	border-radius: 10px;
	background-color: lightcyan;
}
</style>
