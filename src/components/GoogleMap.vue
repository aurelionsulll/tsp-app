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
	export default {

		mounted () {
			this.data = this.$store.bestChemin,
			console.log(this.data);
		},
		computed: {
			google: gmapApi,
		},
		data() {
			return {
				data: {},
				markers: [],
				paths: [],
				flightPath: {},
			};
		},

		methods: {
			mark() {
				this.markers = [
					{position: {lat: 33.594509,lng: -7.601826}}
				];
			},
			path() {
				const tempPaths = this.data;
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
