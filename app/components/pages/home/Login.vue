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
			<Button text="Get to work!" @tap="$navigateTo(MainPageRouter);" />
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
			MainPageRouter: MainPageRouter,
		}
	}
};
</script>

<style scoped lang="scss">
	
</style>
