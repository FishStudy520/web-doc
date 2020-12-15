<template>
	<div>使用count 这个状态{{this.$store.state.count}}</div>	
	<a-button @click="add" type="primary">点击状态加一</a-button>
</template>

<script>
	export default {
		methods: {
			add() {
				this.$store.commit('increment')
			}
		}
	}
</script>