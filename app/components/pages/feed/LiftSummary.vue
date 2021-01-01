<template>
	<StackLayout class="medFont">
		<!--<FlexboxLayout>
			<Image src="~/assets/images/calebProf.jpg" height="100px" width="100px"/>
			<Label text="cpjohnston7"/>
		</FlexboxLayout>-->
		<profSum :pic="profSum.pic"
				 :user="profSum.user"
					>
		</profSum>
		
		<Label :text="`Time: ${time}, Sets: ${sets}, Volume: ${volume}`"></Label>
		<Label text="Highlights:"></Label>
		<Highlights :lift="highlights.lift"
					:reps="highlights.reps"
					:weight="highlights.weight">
		</Highlights>
	</StackLayout>
</template>

<script>
import Highlights from "~/components/pages/feed/Highlights";
import profSum from "~/components/pages/feed/profSum";
export default {
	props: {
		time: String,
		sets: Number,
		volume: Number,
		highlights: Object,
		profSum: Object,
	},
	components: {
		Highlights: Highlights,
		profSum: profSum
	}
};
</script>

<style scoped lang="scss">
	.largeFont{
		font-size: 22rem;
	}
	.medFont{
		font-size: 16rem;
	}
</style>
