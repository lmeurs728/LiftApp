<template>
	<StackLayout>
		<!-- Lift Title -->
		<FlexboxLayout class="largeFont">
			<Label :text="lift.title" />
			<Button class="fas" :text="String.fromCharCode(0xf107)" @tap="showLiftDetails = !showLiftDetails" />
		</FlexboxLayout>
		<!-- Lift Details" -->
		<GridLayout v-if="showLiftDetails" columns="auto, auto, auto" :rows="computedRows" width="full" height="auto" class="medFont">
			<Label text="Prev." row="0" col="0" class="grid-item"/>
			<Label text="Sets" row="0" col="1" class="grid-item"/>
			<Label text="Pounds" row="0" col="2" class="grid-item"/>
			<Label v-for="(set, index) in sets" :key="set.id" :text="set.previousString" :row="index + 1" col="0" class="grid-item" />
			<TextField v-for="(set, index) in sets" :key="set.id + 'reps'" :row="index + 1" col="1" v-model="set.reps" class="grid-item" />
			<TextField v-for="(set, index) in sets" :key="set.id + 'weight'" :row="index + 1" col="2" v-model="set.weight" class="grid-item" />
			<Label text="_" :row="sets.length + 1" col="0" class="grid-item" />
			<Button @tap="addSet" :text="String.fromCharCode(0xf055)" :row="sets.length + 1" col="2" class="fas grid-item" />
		</GridLayout>
	</StackLayout>
</template>

<script>
export default {
	props: {
		lift: Object
	},
	data: function() {
		return {
			showLiftDetails: false,
			sets: this.lift.sets,
		}
	},
	computed: {
		computedRows: function() {
			var autoString = "auto, auto";
			this.sets.forEach(() => autoString += ", auto");
			return autoString;
		}
	},
	methods: {
		addSet: function() {
			this.sets.push(this.getNewEmptySet());
		},
		getNewEmptySet: function() {
			return {
				id: this.getNewID(),
				previousString: "? X ?lbs",
				reps: "",
				weight: "",
			}
		},
		getNewID: function() {
			var S4 = function() {
				return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
			};
			return (S4()+S4()+S4()+S4()+S4());
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
</style>