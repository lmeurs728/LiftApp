<template>
<ScrollView orientation="Vertical">
	<StackLayout>
		<LiftSummary v-for="(liftSummary, index) in liftSummaries" :key="index"
		:time="liftSummary.time"
		:sets="liftSummary.sets"
		:volume="liftSummary.volume"
		:highlights="liftSummary.highlights"
		:profSum="liftSummary.profSum" />
	</StackLayout>
</ScrollView>
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
					highlights: {
						lift: "Bench Press",
						reps: 10,
						weight: 200,
					},
					profSum: {
						pic: "~/assets/images/calebProf.jpg",
						user: "cpjohnston7",
					},
				},
				{
					time: "1:00",
					sets: 4,
					volume: 240,
					highlights: {
						lift: "Bench Press",
						reps: 10,
						weight: 200,
					},
					profSum: {
						pic: "~/assets/images/lanceProf.jpg",
						user: "lancem",
					},
				},
				{
					time: "1:00",
					sets: 4,
					volume: 240,
					highlights: {
						lift: "Bench Press",
						reps: 10,
						weight: 200,
					},
					profSum: {
						pic: "~/assets/images/samProf.jpg",
						user: "samm",
					},
				},
				
			]
		}
	}
};
</script>

<style scoped lang="scss">
	
</style>
