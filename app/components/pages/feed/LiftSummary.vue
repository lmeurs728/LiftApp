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
			<Label :text="`${likes}	likes`"></Label>
			<Label :text="`${comments} comments`"></Label>
		</FlexboxLayout>
		<FlexboxLayout class="borderY fas" justifyContent="center" padding="10rem" backgroundColor="lightBlue">
			<Button :text="String.fromCharCode(0xf164)" fontSize="30rem" marginRight="100rem" @tap="likes++"/>
			<Button :text="String.fromCharCode(0xf27a)" fontSize="30rem" @tap="comments++"/>
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
	data: function(){
		return{
			likes: 0,
			comments: 0,
		}
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
	.borderY{
		border-bottom-width: 1;
		border-color:black;
		border-top-width: 1;
		
	}
</style>
