<template>
	<Page @loaded="prepLifts">
		<ActionBar><Label :text="`Editting ${workout.title}`"/></ActionBar>
		<StackLayout>
			<!-- One single lift to edit or delete -->
			<StackLayout v-for="lift in workout.lifts" :key="lift.id" class="text-med">
				<FlexboxLayout>
					<Label :text="lift.title" class="text-large" />
					<Label v-if="!lift.editMode" class="fas buttonPadding" :text="String.fromCharCode(0xf056)" @tap="removeLift(lift.id)" />
					<Label v-if="!lift.editMode" class="far buttonPadding" :text="String.fromCharCode(0xf044)" @tap="editLift(lift.id)" />
					<Label v-else class="far buttonPadding" :text="String.fromCharCode(0xf0c7)" @tap="saveChanges(lift.id)" />
				</FlexboxLayout>
				<StackLayout v-if="lift.editMode">
					<FlexboxLayout>
						<Label class="fas mr-2" @tap="isFixed = !isFixed" :text="fixedOrVariable"/>
						<Label text="Fixed Number of Reps"/>
					</FlexboxLayout>
					
					<WrapLayout v-if="!isFixed" orientation="horizantal">
						<Label text="Sets:"/>
						<TextField v-for="(setNumber, index) in setNumbers" :key="lift.id + index" :text="setNumber"/>
						<Label class="fas buttonPadding" @tap="setNumbers.push(5)" :text="String.fromCharCode(0xf0fe)"/>
					</WrapLayout>
					<FlexboxLayout v-else>
						<TextField v-model="numSets" />
						<Label text="X"/>
						<TextField v-model="numReps" />
					</FlexboxLayout>
				</StackLayout>
			</StackLayout>
		</StackLayout>
	</Page>
</template>

<script>
import LiftDetails from "~/components/pages/lifts/presaved/LiftDetails";
export default {
	components: {
		LiftDetails: LiftDetails
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
	data: function() {
		return {
			isFixed: false,
			setNumbers: [7, 5, 3, 7, 5, 3],
			numSets: "0",
			numReps: "0",
		}
	},
	computed: {
		fixedOrVariable: function() {
			return this.isFixed ? String.fromCharCode(0xf205) : String.fromCharCode(0xf204);
		}
	},
	methods: {
		prepLifts: function() {
			this.workout.lifts.map(lift => this.$set(lift, "editMode", false));
		},
		removeLift: function(liftID) {
			this.workout.lifts = this.workout.lifts.filter(lift => lift.id != liftID);
		},
		editLift: function(liftID) {
			let liftToEdit = this.workout.lifts.find(lift => lift.id === liftID);
			this.$set(liftToEdit, "editMode", true);
		},
		saveChanges: function(liftID) {
			let liftToEdit = this.workout.lifts.find(lift => lift.id === liftID);
			this.$set(liftToEdit, "editMode", false);
		}
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