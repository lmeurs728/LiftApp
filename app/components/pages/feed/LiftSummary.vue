<template>
	<StackLayout class="medFont">
		<ProfileSum :pic="profileSum.pic" :user="profileSum.user"/>
		
		<Label :text="`Time: ${time}, Sets: ${sets}, Volume: ${volume}`"/>
		<Label text="Highlights:"/>
		<Highlights :lift="highlights.lift"
					:reps="highlights.reps"
					:weight="highlights.weight">
		</Highlights>
		<!-- # of likes and comments-->
		<FlexboxLayout justifyContent="center">
			<Label :text="`${likes} likes`" marginRight="100rem"/>
			<Label :text="`${numComments} comments`" @tap="showDialog"/>
		</FlexboxLayout>
		<!-- like & comment button-->
		<FlexboxLayout class="borderY fas" justifyContent="center" padding="10rem" backgroundColor="lightBlue">
			<Button :text="String.fromCharCode(0xf164)" fontSize="30rem" marginRight="100rem" @tap="likes++"/>
			<Button :text="String.fromCharCode(0xf27a)" fontSize="30rem" @tap="showDialog"/>
		</FlexboxLayout>
		<!-- comment popup layout-->
		<StackLayout v-if="commentPopupOpen">
			<FlexboxLayout  justifyContent="center">	
				<Label text="Banter"/>
			</FlexboxLayout>
			<Comment v-for="(comment, index) in comments" :key="'comment ' + index" :comment="comment" />
			<TextField v-model="currentComment" hint="" returnType="done" />
			<FlexboxLayout class="borderyY">	
				<Button text="Save" @tap="addComment()"/>
				<Button text="Cancel" @tap="commentPopupOpen = false"/>
			</FlexboxLayout>
		</StackLayout>
	</StackLayout>
</template>

<script>
import Comment from "~/components/pages/feed/Comment";
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
			numComments: 0,
			commentPopupOpen: false,
			currentComment: "",
			comments: [],
			users: []
		}
	},
	components: {
		Highlights: Highlights,
		ProfileSum: ProfileSum,
		Comment: Comment,
	},
	
	methods: {
		showDialog() {
			this.commentPopupOpen = true;

		},
		
		addComment() {
			this.comments.push({username: "cpjohnston7", text: this.currentComment});
			this.currentComment = "";
			this.numComments++;
			this.commentPopupOpen = false;
		}
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
<!--{}-->
<!--import Comment from "~/components/pages/feed/Comment";
Comment: Comment,
comment: Object,-->