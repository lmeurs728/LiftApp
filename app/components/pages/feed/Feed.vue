<template>
	<Page>
		<ActionBar title="Feed">
			<Label text="Feed" />
		</ActionBar>
		<FlexboxLayout flexDirection="column" justifyContent="flex-end">
			<BottomNavBar/>
		</FlexboxLayout>
	</Page>
</template>

<script>
import BottomNavBar from "~/components/shared/BottomNavBar"
export default {
	components: {
		BottomNavBar: BottomNavBar
	},
	data: function() {
		return {
			
		}
	},
	methods: {
		
	}
};
</script>

<style scoped lang="scss">
	
</style>
