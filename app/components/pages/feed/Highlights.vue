<template>
	<StackLayout>
		<Label :text="`${lift}: ${reps} of ${weight} pounds.`"></Label>
	</StackLayout>
</template>

<script>
export default {
	props: {
		lift: String,
		reps: Number,
		weight: Number,
	}
};
</script>

<style scoped lang="scss">
	
</style>