
<template>
<Page>  
	<ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label text="Friends"/>
		</ActionBar>
    <ScrollView orientation="Vertical">
        <StackLayout>
            <Textfield hint="Search for friends..." returnType="done"></Textfield>
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