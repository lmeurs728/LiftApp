<template>
	<Page>
		<ActionBar :title="pageTitle">
			<ActionItem @tap="navigateToProfile()"
				ios.systemIcon="8" ios.position="left"
				android.systemIcon="sym_contact_card" android.position="actionBar"></ActionItem>
        
    	</ActionBar>
		<!--<ActionBar class="fas">
				<Label :text="pageTitle"></Label>
				<NavigationButton :text="String.fromCharCode(0xf2bd)" width="70" height="70" @tap="navigateToProfile()"></NavigationButton>
			
		</ActionBar>-->
		
		<BottomNavigation @selectedIndexChanged="changeView($event)" :selectedIndex="selectedIndex" class="bottom-nav">
			<TabStrip class="fas">
				<TabStripItem><Label :text="String.fromCharCode(0xf015)"/></TabStripItem>
				<TabStripItem><Label :text="String.fromCharCode(0xf44b)"/></TabStripItem>
				<TabStripItem><Label :text="String.fromCharCode(0xf201)"/></TabStripItem>
				<TabStripItem><Label :text="String.fromCharCode(0xf0c0)"/></TabStripItem>
			</TabStrip>

			<TabContentItem><Feed/></TabContentItem>
			<TabContentItem><Lifts/></TabContentItem>
			<TabContentItem><MyProgress/></TabContentItem>
			<TabContentItem><Friends/></TabContentItem>
		</BottomNavigation>
	</Page>
</template>

<script>
import Feed from "~/components/pages/feed/Feed";
import Lifts from "~/components/pages/lifts/Lifts";
import MyProgress from "~/components/pages/myProgress/MyProgress";
import Profile from "~/components/pages/profile/Profile";
import Friends from "~/components/pages/friends/Friends";

export default {
	components: {
		Feed,
		Lifts,
		MyProgress,
		Profile,
		Friends,
	},
	props: {
		initSelectedIndex: {
			type: Number,
			default: 0,
		}
	},
	data: function() {
		return {
			selectedIndex: this.initSelectedIndex,
		}
	},
	computed: {
		pageTitle: function() {
			switch(this.selectedIndex) {
				case 0:
					return "Feed";
				case 1:
					return "Lifts";
				case 2:
					return "My Progress";
				case 3:
					return "Friends";
				default:
					return "Feed";
			}
		}
	},
	methods: {
		changeView: function(event) {
			this.selectedIndex = event.newIndex;
		},
	
		navigateToProfile(){
			this.$navigateTo(Profile);
			}
	},
}
</script>

<style scoped lang="scss">
	TabStripItem {
		font-size: 24rem;
	}
</style>
