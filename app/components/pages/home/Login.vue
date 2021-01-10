<template>
	<Page>
		<ActionBar title="Login">
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label text="Login" />
		</ActionBar>
		<StackLayout>
			<Label text="Username" />
			<TextField v-model="username" autocorrect="false" keyboardType="email" returnKeyType="next" />
			<Label text="Password" />
			<TextField v-model="password" secure="true" autocorrect="false" returnKeyType="go" @returnPress="navigateToFeed" />
			<Button text="Get to work!" @tap="navigateToFeed" />
		</StackLayout>
	</Page>
</template>

<script>
import MainPageRouter from "~/components/mainPageRouter/MainPageRouter"
export default {
	data: function() {
		return {
			username: "",
			password: "",
		}
	},
	methods: {
		navigateToFeed: function() {
			this.$navigateTo(MainPageRouter);
		}
	}
};
</script>

<style scoped lang="scss">
	
</style>
