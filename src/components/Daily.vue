<script>
import DailyWeatherCard from "./DailyWeatherCard.vue";
export default {
	props: {
		dailyWeather: Object,
	},
	data() {
		return {};
	},
	components: { DailyWeatherCard },
};
</script>

<template>
	<div>
		<h2>Prévision 7 jours</h2>
		<div class="dailyWeatherContainer">
			<DailyWeatherCard
				v-for="day in dailyWeather"
				:date="day.dt"
				:temp="day.temp"
				:icon="day.weather[0].icon"
				:description="day.weather[0].description"
			/>
		</div>
	</div>
</template>

<style>
.dailyWeatherContainer {
	display: flex;
	flex-wrap: wrap;
}
</style>
