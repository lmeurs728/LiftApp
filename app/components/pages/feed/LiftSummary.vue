<template>
	<StackLayout class="medFont">
		<AbsoluteLayout class="dialog-wrapper">
				<StackLayout class="dialog">
					<Label class="h3" textWrap="true" text="Are you sure you want to share your data with 42 people?"></Label>

					<Button class="btn btn-primary" text="Share"></Button>
					<Button class="btn btn-outline" text="Cancel" @tap="closeDialog"></Button>
				</StackLayout>
		</AbsoluteLayout>
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
		<!-- like & comment button-->
		<FlexboxLayout class="borderY fas" justifyContent="center" padding="10rem" backgroundColor="lightBlue">
			<Button :text="String.fromCharCode(0xf164)" fontSize="30rem" marginRight="100rem" @tap="likes++"/>
			<Button :text="String.fromCharCode(0xf27a)" fontSize="30rem" @tap="showDialog"/>
			
		</FlexboxLayout>
		
	</StackLayout>
</template>

<script>
import Highlights from "~/components/pages/feed/Highlights";
import ProfileSum from "~/components/pages/feed/ProfileSum";
import { alert, confirm, prompt, login, action, inputType } from "tns-core-modules/ui/dialogs";
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
			dialogOpen: false
		}
	},
	components: {
		Highlights: Highlights,
		ProfileSum: ProfileSum
	},
	
	methods: {
        showDialog() {
			this.dialogOpen = true;
			this.comments++;
			
        },
        closeDialog() {
            this.dialogOpen = false;
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
	@keyframes show {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	.dialogOpen .content,
	.dialogOpen .action-bar {
		opacity: 0.2;
	}

	.dialogOpen .dialog-wrapper {
		visibility: visible;
		animation-name: show;
		animation-duration: 0.3s;
		animation-fill-mode: forwards;
	}

	.dialog-wrapper {
		visibility: collapse;
		opacity: 0;
	}

	.dialog {
		border-width: 1 0 1 0;
		border-color: black;
		background-color: white;
		width: 100%;
		margin-top: 100;
		padding: 20;
	}

	.dialog Label {
		margin: 0 15 15 15;
		color: black;
	}
</style>
