<template>
	<section class="Showcase">
		<div
			class="Showcase__image"
			:style="{ 'background-image': `url(${item.image})` }"
			:alt="`Image of ${item.name}`"
		/>
		<div class="Showcase__stats">
			<h3 class="Showcase__title" v-text="item.name" />
			<ul>
				<li><b>Distance:</b> {{ item.range }} miles</li>

				<li v-if="item.topSpeed.max === item.topSpeed.min">
					<b>Top Speed:</b> {{ item.topSpeed.max }} MPH
				</li>
				<li v-else>
					<b>Top Speed:</b> {{ item.topSpeed.min }} -
					{{ item.topSpeed.max }} MPH
				</li>

				<li><b>Foot Pad Width:</b> {{ item.footpad }}"</li>

				<li v-if="item.price.max === item.price.min">
					<b>Price:</b> £{{ item.price.max }}
				</li>
				<li v-else>
					<b>Price:</b> £{{ item.price.min }} - £{{ item.price.max }}
				</li>

				<li><b>Availability:</b> {{ item.availability }}</li>

				<li><b>Recharge Time:</b> {{ item.rechargeTime }}</li>

				<li><b>Weight:</b> {{ item.weight }}lb</li>

				<li><b>Motor:</b> {{ item.motor }}</li>
			</ul>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true
		}
	}
};
</script>

<style lang="scss">
.Showcase {
	display: flex;
	flex-direction: row;
	white-space: nowrap;

	&__image {
		width: 50%;
		border-radius: 2px;
		background-size: contain;
		background-repeat: no-repeat;
	}

	&__stats {
		width: 50%;
		padding-left: 5%;
	}

	&__title {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		letter-spacing: 0.5px;
	}
}
</style>
