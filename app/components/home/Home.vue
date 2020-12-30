<script src="http://192.168.1.98:8098"></script>
<template>
	<Page>
		<ActionBar title="Home">
			<Label text="Home"/>
		</ActionBar>

		<ScrollView>
			<StackLayout>
				<Label class="info">
					<FormattedString>
						<Span class="fas" text.decode="&#xf135; "/>
						<Span :text="message"/>
					</FormattedString>
				</Label>
				<Image src="~/assets/images/RippedGuy.jpg"/>
				<Button class="my-button" text="Login" @tap="login"></Button>
			</StackLayout>
		</ScrollView>
	</Page>
</template>

<script>
import LoginPage from "./Login"
export default {
	computed: {
		message() {
			return "Lift App";
		}
	},
	methods: {
		login() {
			console.log("Login");
			this.$navigateTo(LoginPage)
		}
	}
};
</script>

<style scoped lang="scss">
	@import '~@nativescript/theme/scss/variables/blue';

	// Custom styles
	.fas {
		@include colorize($color: accent);
	}

	.info {
		font-size: 20;
		horizontal-align: center;
		vertical-align: center;
	}

	.my-button {
		android-elevation: 4;
		background-color: lightseagreen;
		border-color: darkolivegreen;
		border-radius: 20;
		border-width: 1;
		color: whitesmoke;
		font-size: 18;
		font-weight: bold;
	}

	.my-button:active {
		android-elevation: 8;
		background-color: whitesmoke;
		border-color: darkolivegreen;
		border-radius: 20;
		border-width: 1;
		color: lightseagreen;
		font-size: 18;
		font-weight: bold;
	}
</style>
