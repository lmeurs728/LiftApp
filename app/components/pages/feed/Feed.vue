<template>
<ScrollView orientation="Vertical">
	<StackLayout>
		<FlexboxLayout>
			<Image src="~/assets/images/calebProf.jpg" height="100px" width="100px"/>
			<Label text="cpjohnston7"/>
				
		
		</FlexboxLayout>
		<LiftSummary v-for="(liftSummary, index) in liftSummaries" :key="index"
		:time="liftSummary.time"
		:sets="liftSummary.sets"
		:volume="liftSummary.volume"
		:highlights="liftSummary.highlights" />
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
					}
				},
				{
					time: "2:00",
					sets: 5,
					volume: 345,
					highlights: {
						lift: "Bench Press",
						reps: 10,
						weight: 200,
					}
				},
				{
					time: "3:00",
					sets: 6,
					volume: 1233,
					highlights: {
						lift: "Bench Press",
						reps: 10,
						weight: 200,
					}
				},
				{
					time: "4:00",
					sets: 7,
					volume: 979,
					highlights: {
						lift: "Bench Press",
						reps: 12,
						weight: 200,
					}
				},
				{
					time: "4:00",
					sets: 7,
					volume: 979,
					highlights: {
						lift: "Bench Press",
						reps: 12,
						weight: 200,
					}
				},
{
					time: "4:00",
					sets: 7,
					volume: 979,
					highlights: {
						lift: "Bench Press",
						reps: 12,
						weight: 200,
					}
				},
			]
		}
	}
};
</script>

<style scoped lang="scss">
	
</style>
