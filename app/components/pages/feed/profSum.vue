<template>
	<StackLayout>
		<Label :text="`yes  ${user}`"></Label>
        <Image :src="`${pic}`" class="profSize">
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
.profSize {
		width: "20";
        height: "20";
	}
	
</style>