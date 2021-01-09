<template>
	<FlexboxLayout>
		<Label :text="`${user}`"></Label>
        <Image :src="`${pic}`" stretch="aspectFill" width="20rem" height="20rem">
        </Image>
	</FlexboxLayout>
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