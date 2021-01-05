<template>
	<FlexboxLayout>
		<Label :text="`${comment.username}: ${comment.text}`" color="MidnightBlue"/>
	</FlexboxLayout>
</template>

<script>
export default {
	props: {
		comment: Object
	}
};
</script>

<style scoped lang="scss">
	
</style>
