<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label text="Public Workouts" />
		</ActionBar>
		<StackLayout>
			<ExpandableWorkout v-for="workout in publicWorkoutTemplates" :key="workout.id" :workout="workout"/>
		</StackLayout>
	</Page>
</template>

<script>
import Datastore from "~/components/shared/Datastore"
import ExpandableWorkout from "./ExpandableWorkout"
export default {
	components: {
		ExpandableWorkout
	},
	data: function() {
		return {
			publicWorkoutTemplates: Datastore.publicWorkoutTemplates,
		}
	},
};
</script>

<style scoped lang="scss">
	
</style>