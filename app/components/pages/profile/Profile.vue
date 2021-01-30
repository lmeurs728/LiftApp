<template>
	<Page>
		<ActionBar>
			<Label text="Profile"/>
		</ActionBar>
			<StackLayout>
				<MyProfile
					:myUser="myUser"
					:myPic="myPic">
				</MyProfile>
				<Button text="Friends" @tap="navigateToFriends"></Button>
				<Button text="My Workouts" @tap="navigateToMyWorkouts"></Button>
				<Button text="History" @tap="navigateToHistory"></Button>
				<Button text="Settings" @tap="navigateToSettings"></Button> 
			</StackLayout>
	</Page>
</template>

<script>
import MyProfile from "~/components/pages/profile/MyProfile";
import History from "~/components/pages/profile/History";
import Settings from "~/components/pages/profile/Settings";
import PFriends from "~/components/pages/profile/PFriends";

export default {
	props: {
		myprofile: Object,
		
	},
	data: function(){
			return{
				myPic: "~/assets/images/calebProf.jpg",
				myUser: "cpjohnston7"
			}
		},
	components: {
		MyProfile: MyProfile
	},
	methods: {
		navigateToHistory(){
			this.$navigateTo(History);
			console.log("Should navigate")
		},
		navigateToFriends(){
			this.$navigateTo(PFriends)

		},
		navigateToSettings(){
			this.$navigateTo(Settings)

		},
		navigateToMyWorkouts(){

		},

	}

};
</script>

<style scoped lang="scss">
	
</style>
