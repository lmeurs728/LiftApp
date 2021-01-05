<template>
	<Page>
		<ActionBar><Label :textField="`Editting ${workout.title}`"/></ActionBar>
		<ScrollView>
			<StackLayout>
				<!-- List of lifts to edit or delete -->
				<EditLift v-for="(lift, index) in workout.lifts" :key="'EditLift ' + lift.id + lift.title + index"
					:initLift="lift" @remove-lift="removeLift"/>
				<Button text="Add New Lift" @tap="addLift" />
				<Button text="Save workout" @tap="saveWorkout" />
			</StackLayout>
		</ScrollView>
	</Page>
</template>

<script>
import MainPageRouter from '~/components/mainPageRouter/MainPageRouter';
import EditLift from "./EditLift";
export default {
	components: {
		EditLift: EditLift,
	},
	props: {
		initWorkout: Object,
	},
	data: function() {
		return {
			workout: this.initWorkout || {id: "000001", title: "New Workout", lifts: []}
		}
	},
	methods: {
		removeLift: function(liftID) {
			this.workout.lifts = this.workout.lifts.filter(lift => lift.id != liftID);
		},
		addLift: function() {
			this.workout.lifts.push(this.getNewEmptyLift())
		},
		saveWorkout: function() {
			this.$navigateTo(MainPageRouter);
		},
		getNewEmptyLift: function() {
			return {
				id: this.getNewID(),
				title: "",
				editMode: true,
				numSets: 0,
				numReps: 0,
				setNumbers: []
			}
		},
		getNewID: function() {
			var S4 = function() {
				return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
			};
			return (S4()+S4()+S4()+S4()+S4());
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