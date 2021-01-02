<template>
	<Label :text="`Edit ${workout.title}`"></Label>
</template>

<script>
export default {
	props: {
		workout: Object
	}
}
</script>