<template>
	<StackLayout class="medFont">
		<!--<FlexboxLayout>
			<Image src="~/assets/images/calebProf.jpg" height="100px" width="100px"/>
			<Label text="cpjohnston7"/>
		</FlexboxLayout>-->
		<ProfileSum :pic="profileSum.pic"
				 :user="profileSum.user"
					>
		</ProfileSum>
		
		<Label :text="`Time: ${time}, Sets: ${sets}, Volume: ${volume}`"></Label>
		<Label text="Highlights:"></Label>
		<Highlights :lift="highlights.lift"
					:reps="highlights.reps"
					:weight="highlights.weight">
		</Highlights>
		<FlexboxLayout>
			
		</FlexboxLayout>
	</StackLayout>
</template>

<script>
import Highlights from "~/components/pages/feed/Highlights";
import ProfileSum from "~/components/pages/feed/ProfileSum";
export default {
	props: {
		time: String,
		sets: Number,
		volume: Number,
		highlights: Object,
		profileSum: Object,
	},
	components: {
		Highlights: Highlights,
		ProfileSum: ProfileSum
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
