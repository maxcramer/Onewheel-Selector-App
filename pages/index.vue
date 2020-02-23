<template>
	<div class="Page">
		<top-bar />

		<selector class="Page__questions" @input="onSelection" @reset="reset" />

		<showcase v-if="selection" class="Page__showcase" :item="selection" />

		<bottom-bar />
	</div>
</template>

<script>
import TopBar from '../components/TopBar.vue';
import Selector from '../components/Selector.vue';
import Showcase from '../components/Showcase.vue';
import BottomBar from '../components/BottomBar.vue';

export default {
	name: 'Page',
	components: {
		TopBar,
		Selector,
		Showcase,
		BottomBar
	},
	data() {
		return {
			selection: null
		};
	},
	methods: {
		onSelection(result) {
			this.selection = result;
		},
		reset() {
			this.selection = null;
		}
	}
};
</script>

<style lang="scss">
$width: 50%;
$marginBelowPageItem: 3rem;

.Page {
	color: #363636;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 48px; // to account for bottom-bar

	&__questions {
		width: $width;
		margin-bottom: $marginBelowPageItem !important;
	}

	&__showcase {
		width: $width;
		margin-bottom: $marginBelowPageItem;
	}
}
</style>
