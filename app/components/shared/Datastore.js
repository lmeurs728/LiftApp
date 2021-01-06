// All IDs should be 6 digits
export default {
	users: [
		{
			name: "Lance Meurs",
			firstName: "Lance",
			username: "lmeurs728",
			userID: "000001",
			userImageURL: "~/assets/images/lanceProf.jpg",
			workoutTemplates: [
				{
					id: "000001",
					title: "Push",
					lifts: [
						{
							id: "000001",
							title: "Bench Press",
							isFixed: false,
							repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
							previousSets: [
								{
									reps: "",
									weight: "",
								},
								{
									reps: "",
									weight: "",
								}
							],
						},
						{
							id: "000002",
							title: "Shoulder Press",
							isFixed: false,
							repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
							previousSets: [],
						}
					]
				},
				{
					id: "000002",
					title: "Pull",
					lifts: [
						{
							id: "000003",
							title: "Deadlift",
							isFixed: true,
							numSets: "5",
							numReps: "5",
							previousSets: [
								{
									reps: "",
									weight: "",
								},
								{
									reps: "",
									weight: "",
								}
							],
						},
						{
							id: "000004",
							title: "Rows",
							isFixed: true,
							numSets: "5",
							numReps: "5",
							previousSets: [],
						}
					]
				},
				{
					id: "000003",
					title: "Legs",
					lifts: [
						{
							id: "000005",
							title: "Squats",
							isFixed: false,
							repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
							previousSets: [
								{
									reps: "",
									weight: "",
								},
								{
									reps: "",
									weight: "",
								}
							],
						},
						{
							id: "000006",
							title: "Hip Thrust ;)",
							isFixed: true,
							numSets: "5",
							numReps: "5",
							previousSets: [],
						}
					]
				},
			],
			workoutHistory: [
				{
					name: "Ligity Leg Workout",
					templateID: "000003",
					lifts: [
						{
							id: "000005",
							title: "Squats",
							isFixed: false,
							repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
							sets: [
								{
									reps: "7",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "3",
									weight: "100",
								},
								{
									reps: "7",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "3",
									weight: "100",
								},
								{
									reps: "20",
									weight: "100",
								},
							],
						},
						{
							id: "000006",
							title: "Hip Thrust ;)",
							isFixed: true,
							numSets: "5",
							numReps: "5",
							previousSets: [
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
							],
						}
					],
				}
			]
		},
		{
			name: "Caleb Johnston",
			firstName: "Caleb",
			username: "cpjohnston7",
			userID: "000002",
			userImageURL: "~/assets/images/calebProf.jpg",
			workoutTemplates: [
				{
					id: "000001",
					title: "Push",
					lifts: [
						{
							id: "000001",
							title: "Bench Press",
							isFixed: false,
							repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
							previousSets: [
								{
									reps: "",
									weight: "",
								},
								{
									reps: "",
									weight: "",
								}
							],
						},
						{
							id: "000002",
							title: "Shoulder Press",
							isFixed: false,
							repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
							previousSets: [],
						}
					]
				},
				{
					id: "000002",
					title: "Pull",
					lifts: [
						{
							id: "000003",
							title: "Deadlift",
							isFixed: true,
							numSets: "5",
							numReps: "5",
							previousSets: [
								{
									reps: "",
									weight: "",
								},
								{
									reps: "",
									weight: "",
								}
							],
						},
						{
							id: "000004",
							title: "Rows",
							isFixed: true,
							numSets: "5",
							numReps: "5",
							previousSets: [],
						}
					]
				},
				{
					id: "000003",
					title: "Legs",
					lifts: [
						{
							id: "000005",
							title: "Squats",
							isFixed: false,
							repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
							previousSets: [
								{
									reps: "",
									weight: "",
								},
								{
									reps: "",
									weight: "",
								}
							],
						},
						{
							id: "000006",
							title: "Hip Thrust ;)",
							isFixed: true,
							numSets: "5",
							numReps: "5",
							previousSets: [],
						}
					]
				},
			],
			workoutHistory: [
				{
					name: "Powerful Pulling",
					templateID: "000002",
					lifts: [
						{
							id: "000003",
							title: "Deadlift",
							isFixed: true,
							numSets: "5",
							numReps: "5",
							previousSets: [
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
							],
						},
						{
							id: "000004",
							title: "Rows",
							isFixed: true,
							numSets: "5",
							numReps: "5",
							previousSets: [
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
							],
						}
					],
				}
			]
		},
		{
			name: "Sam Marberger",
			firstName: "Sam",
			username: "smarberger21",
			userID: "000003",
			userImageURL: "~/assets/images/samProf.jpg",
			workoutTemplates: [
				{
					id: "000001",
					title: "Push",
					lifts: [
						{
							id: "000001",
							title: "Bench Press",
							isFixed: false,
							repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
							previousSets: [
								{
									reps: "",
									weight: "",
								},
								{
									reps: "",
									weight: "",
								}
							],
						},
						{
							id: "000002",
							title: "Shoulder Press",
							isFixed: false,
							repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
							previousSets: [],
						}
					]
				},
				{
					id: "000002",
					title: "Pull",
					lifts: [
						{
							id: "000003",
							title: "Deadlift",
							isFixed: true,
							numSets: "5",
							numReps: "5",
							previousSets: [
								{
									reps: "",
									weight: "",
								},
								{
									reps: "",
									weight: "",
								}
							],
						},
						{
							id: "000004",
							title: "Rows",
							isFixed: true,
							numSets: "5",
							numReps: "5",
							previousSets: [],
						}
					]
				},
				{
					id: "000003",
					title: "Legs",
					lifts: [
						{
							id: "000005",
							title: "Squats",
							isFixed: false,
							repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
							previousSets: [
								{
									reps: "",
									weight: "",
								},
								{
									reps: "",
									weight: "",
								}
							],
						},
						{
							id: "000006",
							title: "Hip Thrust ;)",
							isFixed: true,
							numSets: "5",
							numReps: "5",
							previousSets: [],
						}
					]
				},
			],
			workoutHistory: [
				{
					name: "Pushing Limits",
					templateID: "000001",
					lifts: [
						{
							id: "000001",
							title: "Bench Press",
							isFixed: false,
							repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
							sets: [
								{
									reps: "7",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "3",
									weight: "100",
								},
								{
									reps: "7",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "3",
									weight: "100",
								},
								{
									reps: "20",
									weight: "100",
								},
							],
						},
						{
							id: "000002",
							title: "Shoulder Press ;)",
							isFixed: false,
							repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
							sets: [
								{
									reps: "7",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "3",
									weight: "100",
								},
								{
									reps: "7",
									weight: "100",
								},
								{
									reps: "5",
									weight: "100",
								},
								{
									reps: "3",
									weight: "100",
								},
								{
									reps: "20",
									weight: "100",
								},
							],
						}
					],
				}
			]
		},
	],
	publicWorkoutTemplates: [
		{
			id: "000001",
			title: "Push",
			lifts: [
				{
					id: "000001",
					title: "Bench Press",
					isFixed: false,
					repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
					previousSets: [
						{
							reps: "",
							weight: "",
						},
						{
							reps: "",
							weight: "",
						}
					],
				},
				{
					id: "000002",
					title: "Shoulder Press",
					isFixed: false,
					repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
					previousSets: [],
				}
			]
		},
		{
			id: "000002",
			title: "Pull",
			lifts: [
				{
					id: "000003",
					title: "Deadlift",
					isFixed: true,
					numSets: "5",
					numReps: "5",
					previousSets: [
						{
							reps: "",
							weight: "",
						},
						{
							reps: "",
							weight: "",
						}
					],
				},
				{
					id: "000004",
					title: "Rows",
					isFixed: true,
					numSets: "5",
					numReps: "5",
					previousSets: [],
				}
			]
		},
		{
			id: "000003",
			title: "Legs",
			lifts: [
				{
					id: "000005",
					title: "Squats",
					isFixed: false,
					repNumbers: ["7", "5", "3", "7", "5", "3", "20"],
					previousSets: [
						{
							reps: "",
							weight: "",
						},
						{
							reps: "",
							weight: "",
						}
					],
				},
				{
					id: "000006",
					title: "Hip Thrust ;)",
					isFixed: true,
					numSets: "5",
					numReps: "5",
					previousSets: [],
				}
			]
		},
	]
}