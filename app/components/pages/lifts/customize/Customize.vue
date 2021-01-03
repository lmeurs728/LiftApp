<template>
	<Page>
		<ActionBar text="Customize"></ActionBar>
		<StackLayout>
			<Label text="customize"/>
			<Button @tap="editWorkout" :text="String.fromCharCode(0xf1e2)" class="fas" />
		</StackLayout>
	</Page>
</template>

<script>
import EditWorkout from "./EditWorkout";
export default {
	methods: {
		editWorkout: function() {
			this.$navigateTo(EditWorkout);
		}
	}
};
</script>

<style scoped lang="scss">
	
</style>
