<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label text="Customize"/>
		</ActionBar>
		<ScrollView height="300em">
			<!-- Editable Workout List -->
			<StackLayout>
				<Button v-for="workout in workouts" :key="workout.id" :text="`Edit ${workout.title}`" @tap="editWorkout(workout)"/>
				<Button text="Create New Workout" @tap="createWorkout" />
			</StackLayout>
		</ScrollView>
	</Page>
</template>

<script>
import EditWorkout from "./EditWorkout";
import Datastore from "~/components/shared/Datastore";
export default {
	data: function() {
		return {
			workouts: Datastore.users[0].workoutTemplates,
		}
	},
	methods: {
		editWorkout: function(workout) {
			this.$navigateTo(EditWorkout, {props: {initWorkout: workout}});
		},
		createWorkout: function() {
			this.$navigateTo(EditWorkout);
		}
	}
};
</script>

<style scoped lang="scss">
	
</style>
