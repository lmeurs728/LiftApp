<template>
	<FlexboxLayout width="full" justifyContent="stretch">
		<Button text="1" backgroundColor="#0A2C47" class="bottom-nav-button"></Button>
		<Button text="2" backgroundColor="#194260" class="bottom-nav-button"></Button>
		<Button text="3" backgroundColor="#E6DAC7" class="bottom-nav-button"></Button>
		<Button text="4" backgroundColor="#64493D" class="bottom-nav-button"></Button>
	</FlexboxLayout>
</template>

<script>
export default {
	
};
</script>

<style scoped lang="scss">
	.bottom-nav-button {
		height: 60;
		width: 25%;
		margin: 0;
		border-color: black;
		border-width: 1;
	}
</style>
