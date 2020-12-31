<template>
	<StackLayout>
		<LiftSummary v-for="liftSummary in liftSummaries" :key="liftSummary.summary"
		:time="liftSummary.time"
		:sets="liftSummary.sets"
		:volume="liftSummary.volume"
		:summary="liftSummary.summary" />
	</StackLayout>
</template>

<script>
import LiftSummary from "~/components/pages/feed/LiftSummary";
export default {
	components: {
		LiftSummary: LiftSummary
	},
	data: function() {
		return {
			liftSummaries: [
				{
					time: "1:00",
					sets: 4,
					volume: 240,
					summary: "Nice0"
				},
				{
					time: "2:00",
					sets: 5,
					volume: 345,
					summary: "Nice1"
				},
				{
					time: "3:00",
					sets: 6,
					volume: 1233,
					summary: "Nice2"
				},
				{
					time: "4:00",
					sets: 7,
					volume: 979,
					summary: "Nice3"
				},
			]
		}
	}
};
</script>

<style scoped lang="scss">
	
</style>
