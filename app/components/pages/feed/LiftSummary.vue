<template>
	<StackLayout>
		<Label text="Time:"></Label>
		<Label :text="time"></Label>
		<Label text="Sets:"></Label>
		<Label :text="sets"></Label>
		<Label text="Volume:"></Label>
		<Label :text="volume"></Label>
		<Label text="Summary:"></Label>
		<Label :text="summary"></Label>
	</StackLayout>
</template>

<script>
import LiftSummary from "~/components/pages/feed/LiftSummary";
export default {
	props: {
		time: String,
		sets: Number,
		volume: Number,
		summary: String,
	},
	components: {
		LiftSummary: LiftSummary
	}
};
</script>

<style scoped lang="scss">
	
</style>
