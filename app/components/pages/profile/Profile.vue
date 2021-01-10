<template>
	<StackLayout>
		<MyProfile
			:myUser="myUser"
			:myPic="myPic">
		</MyProfile>
		<Button text="Friends"></Button>
		<Button text="My Workouts"></Button>
		<Button text="History"></Button>
	</StackLayout>
</template>

<script>
import MyProfile from "~/components/pages/profile/MyProfile";
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
