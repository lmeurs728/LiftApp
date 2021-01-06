<template>
	<Page >
		<ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label :text="`${individualLiftHistory[0].title} History`" />
		</ActionBar>
		<StackLayout>
			<Label text="Chart Here" />
		</StackLayout>
	</Page>
	
</template>

<script>
export default {
	props: {
		individualLiftHistory: Array
	},
	data: function(){
		return {
			
		}
	},
	
};
</script>

<style scoped lang="scss">
	
</style>
