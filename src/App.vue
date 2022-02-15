<script>
import axios from "axios";
export default {
	data() {
		return {
			zip: 64600,
			city: "",
			current: {},
			hourly: [],
			daily: [],
		};
	},
	mounted() {
		axios
			.get(
				`http://api.openweathermap.org/geo/1.0/zip?zip=${this.zip},fr&appid=4e574fa005b98baeaa15f3346ec9fb64`
			)
			.then((res) => {
				console.log(res.data),
					(this.city = res.data.name),
					axios
						.get(
							`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.lat}&lon=${res.data.lon}&APPID=4e574fa005b98baeaa15f3346ec9fb64`
						)
						.then(
							(res) => console.log(res),
							(this.current = res.data.current),
							(this.hourly = res.data.hourly),
							(this.daily = res.data.daily)
						);
			});
	},
	methods: {
		updateAxios() {
			axios
				.get(
					`http://api.openweathermap.org/geo/1.0/zip?zip=${this.zip},fr&appid=4e574fa005b98baeaa15f3346ec9fb64`
				)
				.then((res) => {
					(this.city = res.data.name),
						axios
							.get(
								`https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.lat}&lon=${res.data.lon}&units=metric&lang=fr&APPID=4e574fa005b98baeaa15f3346ec9fb64`
							)
							.then(
								(res) => console.log(res),
								(this.current = res.data.current),
								(this.hourly = res.data.hourly),
								(this.daily = res.data.daily),
								(this.zip = null)
							);
				});
		},
	},
};
</script>

<template>
	<header>
		<nav>
			<router-link to="/">Aujourd'hui</router-link>
			<router-link to="/hourly">Heure par heure (48h)</router-link>
			<router-link to="/daily">Prévisions sur 7 jours</router-link>
		</nav>
		<h1>{{ city }}</h1>
		<form action="" @submit.prevent="updateAxios">
			<label for="zip">Code postal</label>
			<input v-model="zip" type="text" id="zip" />
		</form>
	</header>

	<router-view></router-view>
</template>

<style>
header {
	display: flex;
	justify-content: space-between;
}
nav {
	flex: 1;
	display: flex;
	justify-content: space-evenly;
}
nav a {
	display: block;
}
</style>
