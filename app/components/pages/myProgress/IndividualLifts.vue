<template>
	<Page @loaded="prepareAllLifts">
		<ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label text="Lift History" />
		</ActionBar>
		<StackLayout>
			<Button v-for="lift in allUniqueLifts" :key="lift.id" :text="lift.title" @tap="navigateToIndividualLift(lift.id)" />
		</StackLayout>
	</Page>
	
</template>

<script>
import Datastore from "~/components/shared/Datastore"
import IndividualLift from "./IndividualLift"
import { isIOS } from "tns-core-modules/platform";
export default {
	data: function(){
		return {
			workoutHistory: Datastore.users[0].workoutHistory,
			allLifts: [],
			allUniqueLifts: [],
		}
	},
	methods: {
		prepareAllLifts: function() {
			this.allLifts = [];
			this.allUniqueLifts = [];
			this.workoutHistory.forEach(workout => {
				workout.lifts.forEach((lift, i, lifts) => {
					lifts[i].dateTime = workout.dateTime;
					this.allLifts.push(lifts[i]);
					// Only add to unique lifts if not already in the array
					if (!this.allUniqueLifts.map(uniqueLift => uniqueLift.id).includes(lift.id)) {
						this.allUniqueLifts.push(lifts[i]);
					}
				})
			})
		},
		navigateToIndividualLift: function(liftID) {
			if (!isIOS) {
				this.$navigateTo(IndividualLift, {props:{individualLiftHistory: this.allLifts.filter(lift => lift.id === liftID)}});
			}
		},
	}
};
</script>

<style scoped lang="scss">
	
</style>
