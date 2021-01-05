<template>
	<StackLayout>
		<Label text="Workouts: " fontSize="22"/>
		<Button class="fas" :text="String.fromCharCode(0xf0c7) + ' Presaved'"
			@tap="$navigateTo(Presaved)" />
		<Button class="fas" :text="String.fromCharCode(0xf6e3) + ' Customize'"
			@tap="$navigateTo(Customize)" />
		<Button class="fas" :text="String.fromCharCode(0xf002) + ' Find'"
			@tap="$navigateTo(Find)" />
	</StackLayout>
</template>

<script>
import Presaved from "~/components/pages/lifts/presaved/Presaved";
import Customize from "~/components/pages/lifts/customize/Customize";
import Find from "~/components/pages/lifts/find/Find";
export default {
	data: function() {
		return {
			Presaved,
			Customize,
			Find
		}
	}
};
</script>

<style scoped lang="scss">
	
</style>
