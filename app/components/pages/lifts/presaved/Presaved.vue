<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label text="Start Workout"/>
		</ActionBar>
		<StackLayout>
			<FlexboxLayout justifyContent="flex-end">
				<Button :text="editMode ? 'Save' : 'Edit'" @tap="editMode = !editMode"/>
			</FlexboxLayout>
			
			<ScrollView height="300em">
				<!-- Presaved Workout List -->
				<StackLayout v-if="!editMode">
					<Button v-for="workout in workouts" :key="workout.id" :text="workout.title" @tap="startWorkout(workout)"/>
				</StackLayout>
				<!-- Editable Workout List -->
				<StackLayout v-else>
					<Button v-for="workout in workouts" :key="workout.id" :text="`Edit ${workout.title}`" @tap="editWorkout(workout)"/>
				</StackLayout>
			</ScrollView>
		</StackLayout>
	</Page>
</template>

<script>
import EditWorkout from "~/components/pages/lifts/customize/EditWorkout";
import StartWorkout from "./StartWorkout";
import Datastore from "~/components/shared/Datastore";
export default {
	data: function() {
		return {
			editMode: false,
			workouts: Datastore.users[0].workoutTemplates,
		}
	},
	methods: {
		startWorkout: function(workout) {
			this.$navigateTo(StartWorkout, {props: {workout: workout}});
		},
		editWorkout: function(workout) {
			this.$navigateTo(EditWorkout, {props: {initWorkout: workout}});
		}
	}
};
</script>

<style scoped lang="scss">
	
</style>