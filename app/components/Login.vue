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
			<Button text="Get to work!" @tap="login" />
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
		login() {
			console.log("Login");
		}
	}
};
</script>

<style scoped lang="scss">
	
</style>
