<template>
	<StackLayout>
		<Label :text="`${username}`"></Label>
	</StackLayout>
</template>

<script>
export default {
	props: {
        username: String,
        ccomment: String
	}
};
</script>

<style scoped lang="scss">
	
</style>
<!--${comment.text}-->