<template>
	<div style="padding : 20px">
		<button
			@click="mark()"
		>
			mark
		</button>
		<button @click="path()">path</button>
		<GmapMap
			map-type-id="roadmap"
			:position="
				google &&
					new google.maps.LatLng(
						1.38,
						103.8
					)
			"
			:center="{
				lat: 33.569345,
				lng: -7.587248,
			}"
			:zoom="8"
			style="width: 100%; height: 600px"
		>
			<GmapMarker
				:key="index"
				v-for="(m, index) in markers"
				:position="m.position"
				:clickable="true"
				:draggable="true"
				@click="center = m.position"
			/>
			<gmap-polygon
				:options="flightPath"
			></gmap-polygon>
		</GmapMap>
	</div>
</template>

<script>
	import { gmapApi } from 'vue2-google-maps';
	// import DirectionsRenderer from './DirectionsRenderer.js';
	export default {
		computed: {
			google: gmapApi,
		},
		// components: {
		// 	DirectionsRenderer,
		// },
		data() {
			return {
				markers: [],
				paths: [],
				flightPath: {},
			};
		},

		methods: {
			mark() {
				this.markers = [
					{
						//casa
						position: {
							lat: 33.594509,
							lng: -7.601826,
						},
					},
					{
						//rabat
						position: {
							lat: 33.972331,
							lng: -6.851429,
						},
					},
					{
						//dakhla
						position: {
							lat: 23.70783,
							lng: -15.91598,
						},
					},
					// {
					// 	//khribga
					// 	position: {
					// 		lat: 32.92773,
					// 		lng: -6.87229,
					// 	},
					// },
					// {
					// 	//jdida
					// 	position: {
					// 		lat: 33.17636,
					// 		lng: -8.49827,
					// 	},
					// },
					// {
					// 	//assfi
					// 	position: {
					// 		lat: 32.27837,
					// 		lng: -9.21417,
					// 	},
					// },
					// {
					// 	//essaouira
					// 	position: {
					// 		lat: 31.54184,
					// 		lng: -9.70115,
					// 	},
					// },
					// {
					// 	//tantan
					// 	position: {
					// 		lat: 28.44226,
					// 		lng: -11.05356,
					// 	},
					// },
				];
			},
			path() {
				const tempPaths = [
					//casa
					{
						lat: 33.594509,
						lng: -7.601826,
					},
					// jdida
					{
						lat: 33.17636,
						lng: -8.49827,
					},
					//rabat
					{
						lat: 33.972331,
						lng: -6.851429,
					},
					//khribga
					// {
					// 	lat: 32.92773,
					// 	lng: -6.87229,
					// },

					// //assfi
					// {
					// 	lat: 32.27837,
					// 	lng: -9.21417,
					// },
					//fes
					{
						lat: 34.01626,
						lng: -5.006206,
					},
					// //berrchid
					// {
					// 	lat: 33.269291,
					// 	lng: -7.583378,
					// },
				];
				this.flightPath = {
					path: tempPaths,
					geodesic: true,
					strokeColor: '#FF0000',
					strokeOpacity: 3,
					strokeWeight: 3,
					fillOpacity: 0,
				};
			},
		},
	};
</script>

<style></style>
