<template>
	<Page >
		<ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label text="Summary" />
		</ActionBar>
		<StackLayout>
			<SegmentedBar v-model="selectedItem">
				<SegmentedBarItem title="Week" />
				<SegmentedBarItem title="Month" />
				<SegmentedBarItem title="Year" />
				<SegmentedBarItem title="All Time" />
			</SegmentedBar>
			<StackLayout>
				<Label :text="'Days Lifted: ' + text" />
				<Label text="Volume" />
				<Label text="Improvement" />
				<Label text="Charts" />
			</StackLayout>
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
			selectedItem: 0,
		}
	},
	computed: {
		text: function() {
			switch(this.selectedItem) {
				case 0:
					return "1";
				case 1:
					return "2";
				case 2:
					return "3";
				case 3:
				default:
					return "4";
			}
		}
	},
};
</script>

<style scoped lang="scss">
	
</style>
