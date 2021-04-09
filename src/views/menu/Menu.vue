<template>
	<h1>Menu</h1>
	<button class="fixedbutton" v-on:click="makeChildMode()">Child Mode</button>
	<div class="container">
		<div v-if="this.$store.state.userMode == 0" class="row">
			<div v-for="item in itemTypes" :key="item.name" class="col-4">
				<ItemType :image="item.image" :foodType="item.name" />
			</div>
		</div>
		<div v-else>
			<br />
			<br />
			<font size="+10">CHILD MODE</font>
		</div>
	</div>

	<br />
	<br />
	<br />
	<br />
</template>

<script>
import { itemTypes } from "@/assets/data/itemTypes.js";
import ItemType from "@/components/ItemType.vue";

export default {
	name: "Menu",
	components: { ItemType },
	data() {
		return {
			itemTypes,
		};
	},
	methods: {
		makeChildMode() {
			if (this.$store.state.isFirstTimeChildMode == true) {
				this.$store.state.isFirstTimeChildMode = false;
				this.$router.push("/childModeCode");
				this.$store.state.userMode = 1;
			} else {
				if (this.$store.state.userMode == 1) {
					this.$router.push("/checkChildModePassWord");
				} else {
					this.$store.state.userMode = 1;
				}
			}
		},
	},
};
</script>

<style>
.fixedbutton {
	position: fixed;
	bottom: 90%;
	right: 81%;
	background-color: #1f7bc7;
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
}
.fixedbutton:hover {
	position: fixed;
	bottom: 87%;
	right: 87%;
	background-color: #1f7bc7;
	border: none;
	color: rgb(0, 119, 255);
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	cursor: pointer;
}
</style>
