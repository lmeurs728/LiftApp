<template>
	<Page>
		<ActionBar title="Login">
			<FlexboxLayout>
				<Button text="Back" @tap="$navigateBack()" />
				<Label text="Login" />
			</FlexboxLayout>
		</ActionBar>
		<StackLayout>
			<Label text="Username" />
			<TextField v-model="username" />
			<Label text="Password" />
			<TextField v-model="password" />
			<Button text="Get to work!" @tap="go" />
		</StackLayout>
	</Page>
</template>

<script>
export default {
	data: function() {
		return {
			username: "",
			password: "",
		}
	},
	methods: {
		go() {
			console.log("Login");
			this.$navigateTo(Feed)
		}
	}
};
</script>

<style scoped lang="scss">
	
</style>
