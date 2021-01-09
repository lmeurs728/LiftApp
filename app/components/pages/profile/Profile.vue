<template>
	<StackLayout>
		<MyProfile
			:myUser="myprofile.myUser"
			:myPic="myprofile.myPic">
		</MyProfile>
		<Button text="Friends"></Button>
		<Button text="My Workouts"></Button>
		<Button text="History"></Button>
	</StackLayout>
</template>

<script>
import MyProfile from "~/components/pages/profile/Profile";
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

};
</script>

<style scoped lang="scss">
	
</style>
