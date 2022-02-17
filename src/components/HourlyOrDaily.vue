<script>
import DailyWeatherCard from "./DailyWeatherCard.vue";
import HourlyWeatherCard from "./HourlyWeatherCard.vue";
export default {
	props: {
		hourlyWeather: Object,
		hourlyDisplay: Boolean,
		dailyWeather: Object,
		dailyDisplay: Boolean,
	},
	data() {
		return {};
	},
	components: { DailyWeatherCard, HourlyWeatherCard },
};
</script>

<template>
	<div>
		<h2 v-if="hourlyDisplay">Heure par heure</h2>
		<h2 v-if="dailyDisplay">Prévision 7 jours</h2>
		<div class="dailyWeatherContainer">
			<HourlyWeatherCard
				v-if="hourlyDisplay"
				v-for="hour in hourlyWeather"
				:timestamp="hour.dt"
				:icon="hour.weather[0].icon"
				:temp="hour.temp"
				:description="hour.weather[0].description"
				:humidity="hour.humidity"
			/>
			<DailyWeatherCard
				v-if="dailyDisplay"
				v-for="day in dailyWeather"
				:timestamp="day.dt"
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
