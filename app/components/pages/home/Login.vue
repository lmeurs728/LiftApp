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
			<Button text="Get to work!" @tap="getToWork" />
		</StackLayout>
	</Page>
</template>

<script>
import Feed from "~/components/pages/feed/Feed"
export default {
	data: function() {
		return {
			username: "",
			password: "",
		}
	},
	methods: {
		getToWork() {
			this.$navigateTo(Feed);
		}
	}
};
</script>

<style scoped lang="scss">
	
</style>
