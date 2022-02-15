<script>
import WeatherCardVue from "../components/WeatherCard.vue";
import WeatherCard from "../components/WeatherCard.vue";
export default {
	data() {
		return {};
	},
	components: { WeatherCard },
};
</script>

<template>
	<div>
		<h1>Heure par heure</h1>
		<WeatherCard title="toto" icon="04d" />
	</div>
</template>
