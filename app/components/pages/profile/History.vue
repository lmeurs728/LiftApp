
<template>
<Page>  
    <ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label text="History"/>
	</ActionBar> 
    <ScrollView orientation="Vertical">
        <TabView id="tabViewContainer">
			<TabViewItem title="Week">
				<StackLayout>
					<Label text="Week" textWrap="true" class="m-15 h2 text-left" color="black" />
				</StackLayout>
			</TabViewItem>
			<TabViewItem title="Month">
				<StackLayout>
					<Label text="Month" textWrap="true" class="m-15 h2 text-left" color="blue" />
				</StackLayout>
			</TabViewItem>
			<TabViewItem title="Year">
				<StackLayout>
					<Label text="Year" textWrap="true" class="m-15 h2 text-left" color="blue" />
				</StackLayout>
			</TabViewItem>
			<TabViewItem title="All">
				<StackLayout>
					<Label text="All" textWrap="true" class="m-15 h2 text-left" color="blue" />
				</StackLayout>
			</TabViewItem>
		
		</TabView>
		<StackLayout>
				<Label :text="'Days Lifted: ' + text" />
				<Label text="Volume" />
				<Label text="Improvement" />
				<Label text="Charts" />
		</StackLayout>
		
    </ScrollView>
	
</Page>
</template>

<script>

export default {
	components: {
		
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