<template>
	<Page>
		<ActionBar><Label :text="pageTitle"/></ActionBar>
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
			<TabContentItem><Profile/></TabContentItem>
		</BottomNavigation>
	</Page>
</template>

<script>
import Feed from "~/components/pages/feed/Feed";
import Lifts from "~/components/pages/lifts/Lifts";
import MyProgress from "~/components/pages/myProgress/MyProgress";
import Profile from "~/components/pages/profile/Profile";

export default {
	components: {
		Feed,
		Lifts,
		MyProgress,
		Profile,
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
					return "Profile";
				default:
					return "Feed";
			}
		}
	},
	methods: {
		changeView: function(event) {
			this.selectedIndex = event.newIndex;
		}
	}
};
</script>

<style scoped lang="scss">
	TabStripItem {
		font-size: 24rem;
	}
</style>
