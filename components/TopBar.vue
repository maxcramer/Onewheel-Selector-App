<template>
	<section class="TopBar">
		<img
			class="TopBar__logo"
			src="~/assets/images/logo-onewheel.png"
			alt="onewheel graphic"
		/>
		<h1 class="TopBar__title">
			Which Onewheel is right for you?
		</h1>
	</section>
</template>

<style lang="scss">
.TopBar {
	margin: 4% 3% -5% 8.5%;
	display: flex;
	flex-direction: row;

	&__logo {
		width: 23%;
		margin-right: 3%;
		max-height: 145px;
	}

	&__title {
		font-size: 2rem;
		font-weight: 600;
		line-height: 1.125;
		text-align: left;
	}
}
</style>
