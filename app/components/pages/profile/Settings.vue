
<template>
<Page>  
    <ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label text="Settings"/>
	</ActionBar> 
    <ScrollView orientation="Vertical">
        <StackLayout>
            <Label text="Edit your settings"></Label>
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
	
</style>