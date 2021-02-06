
<template>

<Page>  
    <ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label text="Settings"/>
	</ActionBar> 
    <ScrollView orientation="Vertical">
        <StackLayout>
			<FlexboxLayout>
				<Label text="Name:" class="largeFont"></Label>
            	<TextField text="Name"></TextField>
			</FlexboxLayout>
			<FlexboxLayout>
				<Label text="Username:" class="largeFont"></Label>
            	<TextField text="Username"></TextField>
			</FlexboxLayout>
			<FlexboxLayout>
				<Label text="Password:" class="largeFont"></Label>
            	<TextField hint="Password"></TextField>
			</FlexboxLayout>
			<FlexboxLayout>
				<Label text="Bio:" class="largeFont"></Label>
            	<TextField hint="Bio"></TextField>
			</FlexboxLayout>
			
			<FlexboxLayout>
				<Label text="Weight:" class="largeFont"></Label>
            	<TextField hint="218"></TextField>
			</FlexboxLayout>
			<FlexboxLayout>
				<Label text="Height:" class="largeFont"></Label>
            	<TextField hint="6"></TextField>
				<Label text="feet"></Label>
				<TextField hint="0"></TextField>
				<Label text="inches"></Label>
			</FlexboxLayout>
			<FlexboxLayout>
				<SegmentedBar v-model="selectedItem">
					<SegmentedBarItem title="Pounds" />
					<SegmentedBarItem title="Kilograms" />
				</SegmentedBar>
			</FlexboxLayout>
			<Button text="Save Changes"></Button>
			
        </StackLayout>
    </ScrollView>
</Page>
</template>

<script>



export default {
	components: {
		
	},
	data: function() {
		return {
			
				
			
		}
	}
};
</script>

<style scoped lang="scss">
.largeFont{
		font-size: 30rem;
	}
	
</style>