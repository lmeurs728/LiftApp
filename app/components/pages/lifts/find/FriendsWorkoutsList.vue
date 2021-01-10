<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label text="Friends' Workouts" />
		</ActionBar>
		<StackLayout>
			<Label class="text-med" text="Friends:" />
			<Button v-for="user in users" :key="user.id" :text="user.name" @tap="navigateToFriend(user)"/>
		</StackLayout>
	</Page>
</template>

<script>
import OneFriendsWorkouts from "~/components/pages/lifts/find/OneFriendsWorkouts"
import Datastore from "~/components/shared/Datastore"
export default {
	data: function() {
		return {
			users: Datastore.users,
		};
	},
	methods: {
		navigateToFriend: function(user) {
			this.$navigateTo(OneFriendsWorkouts, {props:{user: user}});
		},
	}
};
</script>

<style scoped lang="scss">
.text-med {
	font-size: 22rem;
}
</style>