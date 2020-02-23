<template>
	<section class="BottomBar">
		<span class="BottomBar__logo" />
		<span class="BottomBar__tagline">
			Coded with 💚 by M ROW
		</span>
		<a href="https://www.instagram.com/m__row" target="_blank">
			<lottie-player
				alt="instagram link"
				class="BottomBar__instagram"
				:src="instagramAnimation"
				:options="animationOptions"
			/>
		</a>
	</section>
</template>

<script>
import LottiePlayer from './LottiePlayer.vue';
import instagramAnimation from '../assets/animations/instagram.json';

export default {
	components: {
		LottiePlayer
	},
	data() {
		return {
			instagramAnimation,
			animationOptions: {
				autoplay: true,
				speed: 2.5,
				width: '100px'
			}
		};
	}
};
</script>

<style lang="scss">
.BottomBar {
	background-color: #fafafa;
	height: 48px;
	width: 100%;
	display: flex;
	align-items: center;
	position: fixed;
	bottom: 0;

	&__logo {
		height: 150px;
		width: 95px;
		background-image: url('../assets/images/logo-max.png');
		background-size: contain;
		background-repeat: no-repeat;
		position: absolute;
		bottom: 0;
		left: 2rem;
	}

	&__tagline {
		margin-left: 160px;
	}

	&__instagram {
		position: absolute;
		top: 50%;
		right: 2rem;
		top: -3px;
	}
}
</style>
