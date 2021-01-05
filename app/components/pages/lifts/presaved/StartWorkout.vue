<template>
	<Page @loaded="startTimer">
		<ActionBar>
			<NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="$navigateBack()" />
			<FlexboxLayout>
				<Label :text="workout.title" />
				<Label :text="timer" />
			</FlexboxLayout>
		</ActionBar>
		<ScrollView>
			<StackLayout>
				<Lift v-for="(lift, index) in workout.lifts" :key="lift.id" :lift="lift" :liftIndex="index" />
				<Button class="my-button" text="Save" @tap="saveWorkout" />
			</StackLayout>
		</ScrollView>
	</Page>
</template>

<script>
import Lift from "./Lift"
import MainPageRouter from "~/components/mainPageRouter/MainPageRouter"
import Datastore from "~/components/shared/Datastore"
export default {
	components: {
		Lift: Lift
	},
	props: {
		workout: {
			type: Object,
			default: Datastore.users[0].workoutTemplates[0] 
		}
	},
	data: function() {
		return {
			seconds: 0,
		}
	},
	computed: {
		timer: function() {
			const sec = this.seconds % 60;
			const seconds = sec > 9 ? sec : `0${sec}`;
			const min = Math.floor(this.seconds % 3600 / 60);
			const minutes = min > 9 ? min : `0${min}`;
			const hrs = Math.floor(this.seconds / 3600);
			const hours = hrs > 9 ? hrs : `0${hrs}`;
			return `${hours}:${minutes}:${seconds}`
		}
	},
	methods: {
		startTimer: function() {
			setInterval(() => this.seconds++, 1000);
		},
		saveWorkout: function() {
			this.$navigateTo(MainPageRouter);
		}
	}
}
</script>
<style scoped>
.my-button {
	android-elevation: 4;
	background-color: lightseagreen;
	border-color: darkolivegreen;
	border-radius: 20;
	border-width: 1;
	color: whitesmoke;
	font-size: 18;
	font-weight: bold;
}

.my-button:active {
	android-elevation: 8;
	background-color: whitesmoke;
	border-color: darkolivegreen;
	border-radius: 20;
	border-width: 1;
	color: lightseagreen;
	font-size: 18;
	font-weight: bold;
}
</style>