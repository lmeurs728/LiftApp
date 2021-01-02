<template>
	<Label :text="workout.title"></Label>
</template>

<script>
export default {
	props: {
		workout: Object
	}
}
</script>