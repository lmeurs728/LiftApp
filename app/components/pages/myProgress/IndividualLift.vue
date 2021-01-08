<!-- TODO: tab view to sort by time -->
<!-- TODO: support for IOS -->
<template>
	<Page >
		<ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<Label :text="`${individualLiftHistory[0].title} History`" />
		</ActionBar>
		<StackLayout>
			<SegmentedBar v-model="selectedItem">
				<SegmentedBarItem title="Volume" />
				<SegmentedBarItem title="1RM" />
			</SegmentedBar>
			<StackLayout>
				<FlexboxLayout justifyContent="center">
					<Label :text="text + ' Progression'" fontSize="22rem" class="center" />
				</FlexboxLayout>
				<RadCartesianChart>
					<DateTimeContinuousAxis v-tkCartesianHorizontalAxis
						majorStep="1" majorStepUnit="Day" dateFormat="MMM-dd"
						labelFitMode="Rotate" labelRotationAngle="1.2"/>
					<LinearAxis v-tkCartesianVerticalAxis/>
					<LineSeries v-tkCartesianSeries :items="items" categoryProperty="date" :valueProperty="valueProperty"/>
				</RadCartesianChart>
			</StackLayout>
		</StackLayout>

		
	</Page>
	
</template>

<script>
import { ObservableArray } from 'tns-core-modules/data/observable-array';
import { isIOS } from "tns-core-modules/platform";

export default {
	props: {
		individualLiftHistory: Array
	},
	data: function(){
		return {
			volumeProgress: this.getVolumeProgress(),
			oneRepMaxProgress: this.getOneRepMaxProgress(),
			selectedItem: 1,
		}
	},
	computed: {
		items: function() {
			switch(this.selectedItem) {
				case 0:
					return this.getVolumeProgress();
				case 1:
				default:
					return this.getOneRepMaxProgress();
			}
		},
		valueProperty: function() {
			switch(this.selectedItem) {
				case 0:
					return "volume";
				case 1:
				default:
					return "oneRepMax";
			}
		},
		text: function() {
			switch(this.selectedItem) {
				case 0:
					return "Volume";
				case 1:
				default:
					return "One Rep Max";
			}
		}
	},
	methods: {
		getVolumeProgress: function() {
			let volumeProgress = this.individualLiftHistory.map(lift => ({date: this.getDate(lift.dateTime), volume: this.getVolume(lift.sets)}));
			return new ObservableArray(volumeProgress);
		},
		getOneRepMaxProgress: function() {
			let oneRepMaxProgress = this.individualLiftHistory.map(lift => ({date: this.getDate(lift.dateTime), oneRepMax: this.getOneRepMax(lift)}));
			return new ObservableArray(oneRepMaxProgress);
		},
		getDate: function(date) {
			return isIOS ? date.toFormat("yyyy/MM/dd") : date.toMillis();
		},
		getVolume: function(sets = []) {
			let volume = 0;
			sets.forEach(set => volume += (set.reps * set.weight));
			return volume;
		},
		getOneRepMax: function(lift) {
			const weightsWithFourPlusReps = lift.sets.filter(set => set.reps >= 4).map(set => set.weight);
			const maxForFour = Math.max(...weightsWithFourPlusReps);
			if (lift.isUpper) {
				return (maxForFour * 1.1307) + 1.5428;
			} else { // Lower Body
				return (maxForFour * 1.0970) + 31.426;
			}
		}
	}
};
</script>

<style scoped lang="scss">
	.center {
		margin: auto;
	}
</style>
