<template>
	<Page>
		<ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label text="Summary" />
		</ActionBar>
		<StackLayout>
			<Label text="yolo" />
		</StackLayout>
	</Page>
</template>

<script>

export default {
	methods: {
		navigateToSummary: function() {
			this.$navigateTo(Summary);
		},
		navigateToIndividualLifts: function() {
			this.$navigateTo(IndividualLifts);
		},
	}
};
</script>

<style scoped lang="scss">
	
</style>
