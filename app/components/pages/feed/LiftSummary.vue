<template>
	<StackLayout class="medFont">
		<Label :text="`Time: ${time}, Sets: ${sets}, Volume: ${volume}`"></Label>
		<Label text="Highlights:"></Label>
		<Highlights :lift="highlights.lift"
					:reps="highlights.reps"
					:weight="highlights.weight">
		</Highlights>
	</StackLayout>
</template>

<script>
import Highlights from "~/components/pages/feed/Highlights";
export default {
	props: {
		time: String,
		sets: Number,
		volume: Number,
		highlights: Object,
	},
	components: {
		Highlights: Highlights
	}
};
</script>

<style scoped lang="scss">
	.largeFont{
		font-size: 22rem;
	}
	.medFont{
		font-size: 16rem;
	}
</style>
