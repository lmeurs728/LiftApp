<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label :text="`${user.firstName}'s Workouts`" />
		</ActionBar>
		<StackLayout>
			<ExpandableWorkout v-for="workout in user.workoutTemplates" :key="workout.id" :workout="workout"/>
		</StackLayout>
	</Page>
</template>

<script>
import ExpandableWorkout from "./ExpandableWorkout"
export default {
	components: {
		ExpandableWorkout
	},
	props: {
		user: Object
	},
};
</script>

<style scoped lang="scss">
	
</style>