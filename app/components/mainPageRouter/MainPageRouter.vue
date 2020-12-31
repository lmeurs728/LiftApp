<template>
	<Page>
		<BottomNavigation selectedIndex="0" class="bottom-nav">
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
import Friends from "~/components/pages/friends/Friends";

export default {
	components: {
		Feed,
		Lifts,
		MyProgress,
		Friends,
	}
};
</script>

<style scoped lang="scss">
	TabStripItem {
		font-size: xx-large;
	}
</style>
