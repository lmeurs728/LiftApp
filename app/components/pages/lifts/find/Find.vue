<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label text="Find a Workout" />
		</ActionBar>
		<StackLayout>
			<Button text="See What Your Friends Are Doing" @tap="navigateToFriends"/>
			<Button text="Search Public Workouts" @tap="navigateToPublic"/>
		</StackLayout>
	</Page>
</template>

<script>
import FriendsWorkoutsList from "./FriendsWorkoutsList"
import PublicWorkouts from "./PublicWorkouts"
export default {
	methods: {
		navigateToFriends: function() {
			this.$navigateTo(FriendsWorkoutsList);
		},
		navigateToPublic: function() {
			this.$navigateTo(PublicWorkouts);
		},
	}
};
</script>

<style scoped lang="scss">
	
</style>