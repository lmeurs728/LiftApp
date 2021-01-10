<template>
	<StackLayout class="text-med">
		<FlexboxLayout>
			<Label :text="workout.title" />
			<Label v-if="!expanded" class="fas buttonPadding mr-4" :text="String.fromCharCode(0xf105)" @tap="expanded = !expanded" /> <!-- Right Caret -->
			<Label v-else class="fas buttonPadding mr-4" :text="String.fromCharCode(0xf107)" @tap="expanded = !expanded" /> <!-- Down Caret -->
			<Button v-if="!alreadyAdded" text="Add to Saved Workouts" @tap="addToSavedWorkouts" />
			<Label v-else text="Added" />
		</FlexboxLayout>
		<StackLayout v-if="expanded">
			<Label v-for="lift in workout.lifts" :key="lift.id" :text="`${lift.title}: ${computedNumSets(lift)} x ${computedNumReps(lift)}`" />
		</StackLayout>
	</StackLayout>
</template>

<script>
export default {
	props: {
		workout: Object
	},
	data: function() {
		return {
			expanded: false,
			alreadyAdded: false,
		}
	},
	methods: {
		addToSavedWorkouts: function() {
			this.alreadyAdded = true;
		},
		computedNumSets: function(lift) {
			return lift.isFixed ? lift.numSets : lift.repNumbers.length;
		},
		computedNumReps: function(lift) {
			return lift.isFixed ? lift.numReps : "varied";
		}
	}
};
</script>

<style scoped lang="scss">
.mr-4 {
	margin-right: 4;
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