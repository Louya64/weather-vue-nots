<script>
import HourlyWeatherCard from "./HourlyWeatherCard.vue";
export default {
	props: {
		hourlyWeather: Array,
	},
	data() {
		return {};
	},
	components: { HourlyWeatherCard },
};
</script>

<template>
	<div>
		<h2>Heure par heure</h2>
		<div class="hourlyWeatherContainer">
			<HourlyWeatherCard
				v-for="hour in hourlyWeather"
				:timestamp="hour.dt"
				:icon="hour.weather[0].icon"
				:temp="hour.temp"
				:description="hour.weather[0].description"
				:humidity="hour.humidity"
			/>
		</div>
	</div>
</template>

<style>
.hourlyWeatherContainer {
	display: flex;
	flex-wrap: wrap;
}
</style>
