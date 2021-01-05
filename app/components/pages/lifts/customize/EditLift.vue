<script src="http://192.168.1.98:8098"></script>

<!-- Child of EditWorkout page -->
<template>
<StackLayout class="text-med">
	<!-- Name with remove and edit icons -->
	<FlexboxLayout v-if="!editMode">
		<Label :text="lift.title" class="text-large" />
		<Label class="fas buttonPadding" :text="String.fromCharCode(0xf056)" @tap="removeLift(lift.id)" />
		<Label class="far buttonPadding" :text="String.fromCharCode(0xf044)" @tap="editLift" />
	</FlexboxLayout>
	<FlexboxLayout v-else>
		<!-- TODO: Fix the keyboard closing every character -->
		<TextField v-model="lift.title" hint="Enter Title"/>
		<Label class="far buttonPadding" :text="String.fromCharCode(0xf0c7)" @tap="saveChanges" />
	</FlexboxLayout>

	<StackLayout v-if="editMode">
		<!-- Fixed or variable button -->
		<FlexboxLayout>
			<Label class="fas mr-4 buttonPadding" @tap="isFixed = !isFixed" :text="fixedOrVariable"/>
			<Label text="Fixed Number of Reps"/>
		</FlexboxLayout>
		<!-- List of variable set reps -->
		<WrapLayout v-if="!isFixed" orientation="horizantal">
			<Label text="Sets:"/>
			<TextField v-for="(setNumber, index) in lift.setNumbers" :key="'SetNumber ' + lift.id + index" v-model.number="lift.setNumbers[index]" keyboardType="number" hint="0"/>
			<Label class="fas buttonPadding" @tap="lift.setNumbers.push('')" :text="String.fromCharCode(0xf0fe)"/>
		</WrapLayout>
		<!-- Fixed sets and reps input -->
		<GridLayout columns="auto, auto, auto" rows="auto, auto" v-else>
			<Label text="Sets:" row="0" col="0"/>
			<Label text="Reps:" row="0" col="2"/>
			<TextField v-model.number="lift.numSets" hint="0" keyboardType="number" row="1" col="0"/>
			<Label text="x" row="1" col="1"/>
			<TextField v-model.number="lift.numReps" hint="0" keyboardType="number" row="1" col="2"/>
		</GridLayout>
	</StackLayout>
</StackLayout>
</template>

<script>
export default {
	props: {
		initLift: Object
	},
	data: function() {
		return {
			lift: this.initLift,
			editMode: this.initLift.editMode || false,
			isFixed: false,
		}
	},
	computed: {
		fixedOrVariable: function() {
			return this.isFixed ? String.fromCharCode(0xf205) : String.fromCharCode(0xf204);
		}
	},
	methods: {
		removeLift: function(liftID) {
			this.$emit('remove-lift', liftID);
		},
		editLift: function() {
			this.$set(this.lift, "editMode", true);
			this.editMode = true;
		},
		saveChanges: function() {
			this.$set(this.lift, "editMode", false);
			this.editMode = false;
		}
	}
}
</script>

<style scoped>
.mr-4 {
	margin-right: 4;
}
.text-med {
	font-size: 22rem;
}
.text-large {
	font-size: 28rem;
}
.buttonPadding {
	padding-left: 10rem;
	padding-top: 10rem;
}
</style>