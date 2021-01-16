<template>
	<FlexboxLayout>
		<Label :text="myUser"></Label>
        <Image :src="myPic" stretch="aspectFill" width="40rem" height="40rem">
        </Image>
	</FlexboxLayout>
</template>

<script>
export default {
	props: {
        myUser: String,
        myPic: String,
	}
};
</script>

<style scoped lang="scss">

	
</style>