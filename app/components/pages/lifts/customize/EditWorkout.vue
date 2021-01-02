<template>
	<Page>
		<Label :text="`Editting ${workout.title}`"/>
	</Page>
</template>

<script>
export default {
	props: {
		workout: Object
	}
}
</script>