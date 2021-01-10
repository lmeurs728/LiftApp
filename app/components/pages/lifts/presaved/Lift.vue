<template>
	<StackLayout>
		<!-- Lift Title -->
		<FlexboxLayout class="largeFont">
			<Label :text="lift.title" />
			<Label v-if="!showLiftDetails" class="fas buttonPadding" :text="String.fromCharCode(0xf107)" @tap="showLiftDetails = !showLiftDetails" />
			<Label v-else class="fas buttonPadding" :text="String.fromCharCode(0xf105)" @tap="showLiftDetails = !showLiftDetails" />
		</FlexboxLayout>
		<!-- Lift Details" -->
		<StackLayout v-if="showLiftDetails" class="medFont">
			<GridLayout columns="auto, auto, auto" :rows="computedRows" width="full" height="auto">
				<Label text="Prev." row="0" col="0" class="grid-item"/>
				<Label text="Reps" row="0" col="1" class="grid-item"/>
				<Label text="Pounds" row="0" col="2" class="grid-item"/>
				<Label v-for="(set, index) in sets" :key="index + 'previous'" :text="set.previousString" :row="index + 1" col="0" class="grid-item" />
				<TextField v-for="(set, index) in sets" :key="index + ' reps'" :row="index + 1" col="1" v-model="set.reps" class="grid-item" keyboardType="integer" returnKeyType="done" />
				<TextField v-for="(set, index) in sets" :key="index + ' weight'" :row="index + 1" col="2" v-model="set.weight" class="grid-item" keyboardType="integer" returnKeyType="done" />
			</GridLayout>
			<FlexboxLayout justifyContent="flex-end">
				<Label @tap="addSet" :text="String.fromCharCode(0xf055)" class="fas grid-item buttonPadding" marginRight="20"/>
			</FlexboxLayout>
		</StackLayout>
		
	</StackLayout>
</template>

<script>
export default {
	props: {
		lift: Object,
		liftIndex: Number,
	},
	data: function() {
		return {
			showLiftDetails: this.isFirstLift(),
			sets: this.createEmptySetsArray(),
		}
	},
	computed: {
		computedRows: function() {
			var autoString = "auto";
			this.sets.forEach(() => autoString += ", auto");
			return autoString;
		},
	},
	methods: {
		createEmptySetsArray: function() {
			let emptySetsArray = [];
			if (!this.lift.isFixed) {
				this.lift.repNumbers.forEach(repNumber => {
					emptySetsArray.push({
						reps: repNumber,
						weight: "",
						previousString: this.getPreviousString(),
					})
				})
			}
			else { // fixed
				for (let i = 0; i < this.lift.numSets; i++) {
					emptySetsArray.push({
						reps: this.lift.numReps,
						weight: "",
						previousString: this.getPreviousString(),
					})
				}
			}
			return emptySetsArray;
		},
		addSet: function() {
			this.sets.push(this.getNewEmptySet());
		},
		getNewEmptySet: function() {
			return {
				id: this.getNewID(),
				previousString: "-",
				reps: "",
				weight: "",
			}
		},
		getNewID: function() {
			var S4 = function() {
				return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
			};
			return (S4()+S4()+S4()+S4()+S4());
		},
		isFirstLift: function() {
			return Boolean(this.liftIndex === 0);
		},
		// TODO: implement the previous strings
		getPreviousString: function() {
			return "";
		}
	}
}
</script>

<style scoped>
.medFont {
	font-size: 22rem;
}

.largeFont {
	font-size: 28rem;
}

.grid-item {
	padding: 12rem;
}

.buttonPadding {
	padding-left: 10rem;
	padding-top: 10rem;
}
</style>