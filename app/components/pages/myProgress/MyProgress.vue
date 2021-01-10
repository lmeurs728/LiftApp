<template>
	<StackLayout>
		<Button text="Summary" @tap="navigateToSummary" />
		<Button text="Individual Lift" @tap="navigateToIndividualLifts" />
	</StackLayout>
</template>

<script>
import Summary from "./Summary"
import IndividualLifts from "./IndividualLifts"
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
