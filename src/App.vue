<template>
	<div id="app">
		<div id="nav">
			<NavigationMenu class="px-10 py-3" />
		</div>
		<router-view />
	</div>
</template>

<script>
	import NavigationMenu from './components/NavigationMenu.vue';
	export default {
		components: {
			NavigationMenu,
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial,
			sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
