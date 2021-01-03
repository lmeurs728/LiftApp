<script src="http://192.168.1.98:8098"></script>

<template>
<StackLayout class="text-med">
	<FlexboxLayout>
		<Label :text="lift.title" class="text-large" />
		<Label v-if="!lift.editMode" class="fas buttonPadding" :text="String.fromCharCode(0xf056)" @tap="removeLift(lift.id)" />
		<Label v-if="!lift.editMode" class="far buttonPadding" :text="String.fromCharCode(0xf044)" @tap="editLift" />
		<Label v-else class="far buttonPadding" :text="String.fromCharCode(0xf0c7)" @tap="saveChanges" />
	</FlexboxLayout>
	<StackLayout v-if="lift.editMode">
		<FlexboxLayout>
			<Label class="fas mr-2" @tap="isFixed = !isFixed" :text="fixedOrVariable"/>
			<Label text="Fixed Number of Reps"/>
		</FlexboxLayout>
		
		<WrapLayout v-if="!isFixed" orientation="horizantal">
			<Label text="Sets:"/>
			<TextField v-for="(setNumber, index) in setNumbers" :key="'SetNumber ' + lift.id + index" :text="setNumber"/>
			<Label class="fas buttonPadding" @tap="setNumbers.push(5)" :text="String.fromCharCode(0xf0fe)"/>
		</WrapLayout>
		<FlexboxLayout v-else>
			<TextField v-model="numSets" />
			<Label text="X"/>
			<TextField v-model="numReps" />
		</FlexboxLayout>
	</StackLayout>
</StackLayout>
</template>

<script>
export default {
	props: {
		lift: Object
	},
	data: function() {
		return {
			isFixed: false,
			setNumbers: [7, 5, 3, 7, 5, 3],
			numSets: "0",
			numReps: "0",
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
		},
		saveChanges: function() {
			this.$set(this.lift, "editMode", false);
		}
	}
}
</script>

<style scoped>
.mr-2 {
	margin-right: 2;
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