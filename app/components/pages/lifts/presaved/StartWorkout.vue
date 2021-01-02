<template>
	<Page>
		<ActionBar><Label :text="workout.title" /></ActionBar>
		<ScrollView>
			<StackLayout>
				<Lift v-for="lift in workout.lifts" :key="lift.id" :lift="lift" />
				<Button class="my-button" text="Save" @tap="saveWorkout" />
			</StackLayout>
		</ScrollView>
	</Page>
</template>

<script>
import Lift from "./Lift"
import MainPageRouter from "~/components/mainPageRouter/MainPageRouter"
import Workouts from "./Workouts"
export default {
	components: {
		Lift: Lift
	},
	props: {
		workout: {
			type: Object,
			default: Workouts.workouts[0] 
		}
	},
	methods: {
		saveWorkout: function() {
			this.$navigateTo(MainPageRouter);
		}
	}
}
</script>
<style scoped>
.my-button {
	android-elevation: 4;
	background-color: lightseagreen;
	border-color: darkolivegreen;
	border-radius: 20;
	border-width: 1;
	color: whitesmoke;
	font-size: 18;
	font-weight: bold;
}

.my-button:active {
	android-elevation: 8;
	background-color: whitesmoke;
	border-color: darkolivegreen;
	border-radius: 20;
	border-width: 1;
	color: lightseagreen;
	font-size: 18;
	font-weight: bold;
}
</style>