<template>
	<StackLayout>
		<Label :text="username" marginRight="30rem" color="MidnightBlue"> </Label>
		<Label :text="comment"></Label>
        
	</StackLayout>
</template>

<script>
export default {
	props: {
        username: String,
        comment: String
	}
};
</script>

<style scoped lang="scss">
	
</style>
<!--${comment.text}-->