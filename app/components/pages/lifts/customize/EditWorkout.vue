<template>
	<Page @loaded="prepLifts">
		<ActionBar><Label :text="`Editting ${workout.title}`"/></ActionBar>
		<StackLayout>
			<!-- List of lifts to edit or delete -->
			<EditLift v-for="(lift, index) in workout.lifts" :key="'EditLift ' + lift.id + lift.title + index"
				:lift="lift" @remove-lift="removeLift"/>
		</StackLayout>
	</Page>
</template>

<script>
import EditLift from "./EditLift";
export default {
	components: {
		EditLift: EditLift,
	},
	props: {
		workout: {
			type: Object,
			default: () => ({
				id: "000001",
				title: "Workout1",
				lifts: [
					{
						id: "000001",
						title: "Bench Press",
						sets: [
							{
								id: "00001",
								previousString: "5 X 95lbs",
								reps: "",
								weight: "",
							},
							{
								id: "00002",
								previousString: "7 X 85lbs",
								reps: "",
								weight: "",
							}
						],
					},
					{
						id: "000002",
						title: "Back Squat",
						sets: [],
					}
				]
			})
		}
	},
	methods: {
		prepLifts: function() {
			this.workout.lifts.map(lift => this.$set(lift, "editMode", false));
		},
		removeLift: function(liftID) {
			this.workout.lifts = this.workout.lifts.filter(lift => lift.id != liftID);
		},
	}
}
</script>

<style scoped>
.mr-2 {
	margin-right: 2;
}
.text-med {
	font-size: 22rem;
}
.text-large {
	font-size: 28rem;
}
.buttonPadding {
	padding-left: 10rem;
	padding-top: 10rem;
}
</style>