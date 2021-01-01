<template>
	<StackLayout>
		<Label :text="`yes  ${user}`"></Label>
        <Image :src="`${pic}`" stretch="aspectFill" width="20rem" height="20rem">
        </Image>
	</StackLayout>
</template>

<script>
export default {
	props: {
        user: String,
        pic: String,
	}
};
</script>

<style scoped lang="scss">

	
</style>