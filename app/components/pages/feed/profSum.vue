<template>
	<StackLayout>
		<Label :text="`${pic} ${user}`"></Label>
	</StackLayout>
</template>

<script>
export default {
	props: {
        user: String,
        pic: String
	}
};
</script>

<style scoped lang="scss">
	
</style>