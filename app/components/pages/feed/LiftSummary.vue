<template>
	<StackLayout>
		<Label text="Time:"></Label>
		<Label :text="time"></Label>
		<Label text="Sets:"></Label>
		<Label :text="sets"></Label>
		<Label text="Volume:"></Label>
		<Label :text="volume"></Label>
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
	
</style>
