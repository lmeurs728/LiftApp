<template>
	<Page>
		<ActionBar><Label text="Presaved"/></ActionBar>
		<StackLayout>
			<FlexboxLayout justifyContent="flex-end">
				<Button :text="editMode ? 'Save' : 'Edit'" @tap="editMode = !editMode"/>
			</FlexboxLayout>
			
			<ScrollView>
				<!-- Presaved Workout List -->
				<StackLayout v-if="!editMode">
					<PresavedWorkout v-for="workout in workouts" :key="workout.id" 
						:workout="workout" />
				</StackLayout>
				<!-- Editable Workout List -->
				<StackLayout v-else>
					<EditableWorkout v-for="workout in workouts" :key="workout.id"
					:workout="workout" />
				</StackLayout>
			</ScrollView>
		</StackLayout>
	</Page>
</template>

<script>
import EditableWorkout from "./EditableWorkout";
import PresavedWorkout from "./PresavedWorkout";
export default {
	components: {
		EditableWorkout: EditableWorkout,
		PresavedWorkout: PresavedWorkout,
	},
	data: function() {
		return {
			editMode: false,
			workouts: [
				{
					id: "000001",
					title: "Workout1",
					lifts: [
						{
							title: "Bench Press",
							sets: 5,
							reps: 5,
							weight: 225
						}
					]
				},
				{
					id: "000002",
					title: "Workout2",
					lifts: [
						{
							title: "Squat",
							sets: 5,
							reps: 5,
							weight: 225
						}
					]
				},
				{
					id: "000003",
					title: "Workout3",
					lifts: [
						{
							title: "Dead Lift",
							sets: 5,
							reps: 5,
							weight: 225
						}
					]
				},
			]
		}
	},
};
</script>

<style scoped lang="scss">
	
</style>