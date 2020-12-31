<template>
	<StackLayout>
		<FormattedString>
            <Span :text="`${lift}: ${reps} of ${weight} pounds.`"></Span>
        </FormattedString>
	</StackLayout>
</template>

<script>
import LiftSummary from "~/components/pages/feed/LiftSummary";
export default {
	props: {
		lift: String,
		reps: Number,
		weight: Number,
		
	},
	components: {
		LiftSummary: LiftSummary
	}
};
</script>

<style scoped lang="scss">
	
</style>