<template>
	<StackLayout class="medFont">
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
		<!-- # of likes and comments-->
		<FlexboxLayout justifyContent="center">
			<Label :text="`${likes} likes`" marginRight="100rem"></Label>
			<Label :text="`${numComments} comments`" @tap="showDialog"></Label>
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
			<FlexboxLayout v-for="(user, index) in users" :key="'comment'+index" >
				<Label :text="user"> </Label>
				<Label :text="comments[index]"></Label>
			</FlexboxLayout>
			<TextField v-model="currentComment" hint="" />
			<FlexboxLayout class="borderyY">	
				<Button text="Save" @tap="addComment()"></Button>
				<Button text="Cancel" @tap="commentPopupOpen = false"></Button>
			</FlexboxLayout>
		</StackLayout>
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
		
	},
	
	methods: {
        showDialog() {
			this.commentPopupOpen = true;

		},
		
		addComment() {
			this.comments.push(this.currentComment);
			this.users.push("cpjohnston7")
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
<!--{username: "cpjohnston7", text: this.currentComment}-->
<!--import Comment from "~/components/pages/feed/Comment";
Comment: Comment,
comment: Object,-->