<template>
	<Page>
		<ActionBar><Label text="Presaved"/></ActionBar>
		<StackLayout>
			<FlexboxLayout justifyContent="flex-end">
				<Button :text="editMode ? 'Save' : 'Edit'" @tap="editMode = !editMode"/>
			</FlexboxLayout>
			
			<ScrollView height="300em">
				<!-- Presaved Workout List -->
				<StackLayout v-if="!editMode">
					<Button v-for="workout in workouts" :key="workout.id" :text="workout.title" @tap="$navigateTo(StartWorkout, {props: {workout: workout}})"/>
				</StackLayout>
				<!-- Editable Workout List -->
				<StackLayout v-else>
					<Button v-for="workout in workouts" :key="workout.id" :text="`Edit ${workout.title}`" @tap="$navigateTo(EditWorkout, {props: {workout: workout}})"/>
				</StackLayout>
			</ScrollView>
		</StackLayout>
	</Page>
</template>

<script>
import EditWorkout from "~/components/pages/lifts/customize/EditWorkout";
import StartWorkout from "./StartWorkout";
import Workouts from "./Workouts";
export default {
	data: function() {
		return {
			StartWorkout,
			EditWorkout,
			editMode: false,
			workouts: Workouts.workouts,
		}
	},
};
</script>

<style scoped lang="scss">
	
</style>