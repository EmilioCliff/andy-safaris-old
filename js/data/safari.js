export const safaris = [
	{
		ID: 1,
		Title: "AMBOSELI NATIONAL PARK",
		Guide: "FLIGHT",
		Days: 3,
		Description:
			"This flying safari to Amboseli National Reserve is an excellent choice for a wildlife adventure in Kenya. Amboseli is known for its unique ecosystem and diverse wildlife, including several species not found in other parts of Kenya.",
		Image: "./images/wildlife/amboseli-park/amboseli-national-park-1.png",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Amboseli National Park",
				Activity:
					"On arrival, take a game drive to your lodge. After lunch, relax before an afternoon game drive. Dinner at your lodge.",
				Image: "./images/wildlife/amboseli-park/amboseli-national-park-2.png",
			},
			{
				Day: 2,
				Title: "Full Day in Amboseli National Park",
				Activity:
					"Early morning game drive. Relax at the lodge, then an afternoon game drive searching for predators like lions and cheetahs.",
				Image: "./images/wildlife/amboseli-park/amboseli-national-park-4.jpg",
			},
			{
				Day: 3,
				Title: "Amboseli National Park to Nairobi",
				Activity:
					"After breakfast, transfer to the airstrip for your flight back to Nairobi.",
				Image: "./images/wildlife/amboseli-park/amboseli-national-park-5.jpg",
			},
		],
	},
	{
		ID: 2,
		Title: "MAASAI MARA NATIONAL RESERVE",
		Guide: "DRIVE",
		Days: 5,
		Description:
			"Experience the famous Maasai Mara, home to the Great Migration and incredible wildlife viewing opportunities.",
		Image: "./images/wildlife/masaai-mara/masaai-mara-reserver-1.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Maasai Mara",
				Activity:
					"Drive to Maasai Mara. Afternoon game drive on arrival. Dinner and overnight at the camp.",
				Image: "./images/wildlife/masaai-mara/masaai-mara-reserver-2.jpg",
			},
			{
				Day: 2,
				Title: "Exploring Maasai Mara",
				Activity:
					"Full day game drives in Maasai Mara. Search for the Big Five and witness the spectacular wildlife.",
				Image: "./images/wildlife/masaai-mara/maasai-mara-reserver-3.jpg",
			},
			{
				Day: 3,
				Title: "Maasai Mara",
				Activity:
					"Another day of game drives with a visit to a Maasai village in the afternoon.",
				Image: "./images/wildlife/masaai-mara/maasai-mara-reserver-4.jpg",
			},
			{
				Day: 4,
				Title: "More of Maasai Mara",
				Activity:
					"Morning and afternoon game drives. Optional hot air balloon safari in the early morning.",
				Image: "./images/wildlife/masaai-mara/massai-mara-reserver-5.jpg",
			},
			{
				Day: 5,
				Title: "Maasai Mara to Nairobi",
				Activity: "Early morning game drive, then drive back to Nairobi.",
				Image: "./images/wildlife/masaai-mara/masaai-mara-reserver-6.jpg",
			},
		],
	},
	{
		ID: 3,
		Title: "TSAVO EAST AND WEST NATIONAL PARKS",
		Guide: "DRIVE",
		Days: 6,
		Description:
			"Explore the vast landscapes of Tsavo East and West, known for their large elephant populations and breathtaking scenery.",
		Image: "./images/wildlife/tsavo-east-west/tsavo-east-west-1.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Tsavo East",
				Activity: "Drive to Tsavo East. Afternoon game drive upon arrival.",
				Image: "./images/wildlife/tsavo-east-west/tsavo-east-west-2.png",
			},
			{
				Day: 2,
				Title: "Tsavo East",
				Activity:
					"Full day exploring Tsavo East with morning and afternoon game drives.",
				Image: "./images/wildlife/tsavo-east-west/tsavo-east-west-3.png",
			},
			{
				Day: 3,
				Title: "Tsavo East to Tsavo West",
				Activity:
					"Morning game drive in Tsavo East. Transfer to Tsavo West with an afternoon game drive.",
				Image: "./images/wildlife/tsavo-east-west/tsavo-east-west-4.jpg",
			},
			{
				Day: 4,
				Title: "Tsavo West",
				Activity:
					"Full day in Tsavo West. Visit Mzima Springs and enjoy game drives.",
				Image: "./images/wildlife/tsavo-east-west/tsavo-east-west-5.jpg",
			},
			{
				Day: 5,
				Title: "Tsavo West",
				Activity:
					"Another day of game drives in Tsavo West. Relax at the lodge in the afternoon.",
				Image: "./images/wildlife/amboseli-park/amboseli-national-park-6.jpg",
			},
			{
				Day: 6,
				Title: "Tsavo West to Nairobi",
				Activity: "Morning game drive. Drive back to Nairobi after breakfast.",
				Image: "./images/wildlife/amboseli-park/amboseli-national-park-7.jpg",
			},
		],
	},
	{
		ID: 4,
		Title: "LAKE NAKURU NATIONAL PARK",
		Guide: "DRIVE",
		Days: 4,
		Description:
			"Visit Lake Nakuru, famous for its flamingos and as a sanctuary for endangered rhinos.",
		Image: "./images/wildlife/lake-nakuru/lake-nakuru-park-1.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Lake Nakuru",
				Activity:
					"Drive to Lake Nakuru. Afternoon game drive focusing on rhinos and flamingos.",
				Image: "./images/wildlife/lake-nakuru/lake-nakuru-park-2.jpg",
			},
			{
				Day: 2,
				Title: "Lake Nakuru National Park",
				Activity:
					"Full day exploring Lake Nakuru. Enjoy morning and afternoon game drives.",
				Image: "./images/wildlife/lake-nakuru/lake-nakuru-park-3.jpg",
			},
			{
				Day: 3,
				Title: "Lake Nakuru",
				Activity:
					"Another full day in the park with opportunities to see leopards and other wildlife.",
				Image: "./images/wildlife/lake-nakuru/lake-nakuru-park-4.jpg",
			},
			{
				Day: 4,
				Title: "Lake Nakuru to Nairobi",
				Activity: "Early morning game drive, then drive back to Nairobi.",
				Image: "./images/wildlife/lake-nakuru/lake-nakuru-park-5.jpg",
			},
		],
	},
	{
		ID: 5,
		Title: "SAMBURU NATIONAL RESERVE",
		Guide: "DRIVE",
		Days: 5,
		Description:
			"Discover the unique wildlife and landscapes of Samburu National Reserve, including the rare Grevy's zebra and reticulated giraffe.",
		Image:
			"./images/wildlife/samburu-national-park/samburu-national-park-1.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Samburu",
				Activity: "Drive to Samburu. Afternoon game drive on arrival.",
				Image:
					"./images/wildlife/samburu-national-park/samburu-national-park-2.jpg",
			},
			{
				Day: 2,
				Title: "Samburu National Reserve",
				Activity:
					"Full day game drives in Samburu. Look for the unique wildlife such as the Grevy's zebra.",
				Image:
					"./images/wildlife/samburu-national-park/samburu-national-park-3.jpg",
			},
			{
				Day: 3,
				Title: "Exploring Samburu",
				Activity:
					"Another day of game drives with a focus on the Ewaso Ng'iro River ecosystem.",
				Image:
					"./images/wildlife/samburu-national-park/samburu-national-park-4.jpeg",
			},
			{
				Day: 4,
				Title: "More of Samburu",
				Activity:
					"Morning and afternoon game drives. Optional visit to a Samburu village.",
				Image:
					"./images/wildlife/samburu-national-park/samburu-national-park-5.jpg",
			},
			{
				Day: 5,
				Title: "Samburu to Nairobi",
				Activity: "Early morning game drive, then drive back to Nairobi.",
				Image: "./images/wildlife/masaai-mara/masaai-mara-reserver-2.jpg",
			},
		],
	},
	{
		ID: 6,
		Title: "MERU NATIONAL PARK",
		Guide: "DRIVE",
		Days: 4,
		Description:
			"Explore the wild and unspoiled landscapes of Meru National Park, home to diverse wildlife and beautiful scenery.",
		Image: "./images/wildlife/meru-park/meru-national-park-1.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Meru National Park",
				Activity:
					"Drive to Meru National Park. Afternoon game drive on arrival.",
				Image: "./images/wildlife/meru-park/meru-national-park-2.jpg",
			},
			{
				Day: 2,
				Title: "Meru National Park",
				Activity:
					"Full day of game drives in Meru, searching for lions, elephants, and rhinos.",
				Image: "./images/wildlife/meru-park/meru-national-park-3.jpg",
			},
			{
				Day: 3,
				Title: "Exploring Meru",
				Activity:
					"Another day of game drives and exploring the park's diverse habitats.",
				Image: "./images/wildlife/meru-park/meru-national-park-4.jpg",
			},
			{
				Day: 4,
				Title: "Meru to Nairobi",
				Activity: "Morning game drive, then drive back to Nairobi.",
				Image: "./images/wildlife/meru-park/meru-national-park-5.jpg",
			},
		],
	},
	{
		ID: 7,
		Title: "MOUNT KENYA NATIONAL PARK",
		Guide: "DRIVE",
		Days: 3,
		Description:
			"Adventure to Mount Kenya National Park, offering stunning views and diverse wildlife at Kenya's highest peak.",
		Image: "./images/wildlife/mt-kenya/mt-kenta-park-1.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Mount Kenya",
				Activity: "Drive to Mount Kenya. Afternoon nature walk to acclimatize.",
				Image: "./images/wildlife/mt-kenya/mt-kenta-park-2.jpg",
			},
			{
				Day: 2,
				Title: "Exploring Mount Kenya",
				Activity:
					"Full day hike on Mount Kenya with opportunities to see various flora and fauna.",
				Image: "./images/wildlife/mt-kenya/mt-kenta-park-3.jpg",
			},
			{
				Day: 3,
				Title: "Mount Kenya to Nairobi",
				Activity: "Morning hike, then drive back to Nairobi.",
				Image: "./images/wildlife/mt-kenya/mt-elgon-1.jpg",
			},
		],
	},
	{
		ID: 8,
		Title: "HELL'S GATE NATIONAL PARK",
		Guide: "DRIVE",
		Days: 3,
		Description:
			"Explore the dramatic landscapes and geothermal activity of Hell's Gate National Park, a unique destination in Kenya.",
		Image: "./images/wildlife/hells-gate/hells-gate=park-1.jpeg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Hell's Gate",
				Activity: "Drive to Hell's Gate. Afternoon bike ride through the park.",
				Image: "./images/wildlife/hells-gate/hells-gate=park-2.jpg",
			},
			{
				Day: 2,
				Title: "Exploring Hell's Gate",
				Activity:
					"Full day of hiking and exploring Hell's Gate, including a visit to the geothermal spa.",
				Image: "./images/wildlife/hells-gate/hells-gate=park-3.jpg",
			},
			{
				Day: 3,
				Title: "Hell's Gate to Nairobi",
				Activity: "Morning visit to the gorge, then drive back to Nairobi.",
				Image: "./images/wildlife/hells-gate/hells-gate-park-4.jpg",
			},
		],
	},
	{
		ID: 9,
		Title: "LAKE NAIVASHA",
		Guide: "DRIVE",
		Days: 4,
		Description:
			"Relax by the serene waters of Lake Naivasha, with opportunities for boat rides and bird watching.",
		Image: "./images/wildlife/lake-nakuru/lake-naivasha-1.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Lake Naivasha",
				Activity: "Drive to Lake Naivasha. Afternoon boat ride on the lake.",
				Image: "./images/wildlife/lake-nakuru/lake-naivasha-2.jpg",
			},
			{
				Day: 2,
				Title: "Lake Naivasha",
				Activity:
					"Full day exploring Lake Naivasha. Visit Crescent Island and enjoy bird watching.",
				Image: "./images/wildlife/lake-nakuru/lake-nakuru-park-3.jpg",
			},
			{
				Day: 3,
				Title: "Lake Naivasha",
				Activity:
					"Another day at Lake Naivasha with optional activities like horse riding or nature walks.",
				Image: "./images/wildlife/lake-nakuru/lake-nakuru-park-5.jpg",
			},
			{
				Day: 4,
				Title: "Lake Naivasha to Nairobi",
				Activity: "Morning boat ride, then drive back to Nairobi.",
				Image: "./images/wildlife/lake-nakuru/lake-nakuru-park-2.jpg",
			},
		],
	},
	{
		ID: 10,
		Title: "MOUNT ELGON NATIONAL PARK",
		Guide: "DRIVE",
		Days: 7,
		Description:
			"Embark on an adventure to Mount Elgon National Park, known for its ancient caves, waterfalls, and diverse wildlife.",
		Image: "./images/wildlife/mt-kenya/mt-elgon-1.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Mount Elgon",
				Activity: "Drive to Mount Elgon. Afternoon nature walk upon arrival.",
				Image: "./images/wildlife/mt-kenya/mt-elgon-2.jpg",
			},
			{
				Day: 2,
				Title: "Exploring Mount Elgon",
				Activity:
					"Full day of hiking and exploring the park's caves and waterfalls.",
				Image: "./images/wildlife/mt-kenya/mt-elgon-3.jpg",
			},
			{
				Day: 3,
				Title: "Mount Elgon",
				Activity:
					"Another day of hiking and discovering the diverse flora and fauna.",
				Image: "./images/wildlife/mt-kenya/mt-elgon-4.png",
			},
			{
				Day: 4,
				Title: "Mount Elgon",
				Activity:
					"Visit the Kitum Cave and other significant geological features.",
				Image: "./images/wildlife/mt-kenya/mt-kenta-park-1.jpg",
			},
			{
				Day: 5,
				Title: "Mount Elgon",
				Activity: "Game drive to spot elephants and other wildlife.",
				Image: "./images/wildlife/mt-kenya/mt-kenta-park-3.jpg",
			},
			{
				Day: 6,
				Title: "Mount Elgon",
				Activity:
					"Relax at the lodge or explore more of the park's hidden gems.",
				Image: "./images/wildlife/mt-kenya/mt-kenta-park-2.jpg",
			},
			{
				Day: 7,
				Title: "Mount Elgon to Nairobi",
				Activity: "Drive back to Nairobi after breakfast.",
				Image: "./images/wildlife/mt-kenya/mt-elgon-1.jpg",
			},
		],
	},
	{
		ID: 11,
		Title: "Maasai Mara Magic",
		Guide: "DRIVE",
		Days: 4,
		Description:
			"Experience the wonder of the Maasai Mara, home to the Great Migration. Witness breathtaking wildlife spectacles and immerse yourself in Maasai culture on this unforgettable adventure.",
		Image: "./images/wildlife/masaai-mara/maasai-mara-reserver-3.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Maasai Mara",
				Activity:
					"Depart Nairobi for the Maasai Mara. Enjoy a game drive en route to your lodge. After lunch, embark on an afternoon game drive to spot the Big Five. End the day with a sundowner overlooking the savannah.",
				Image: "./images/wildlife/masaai-mara/massai-mara-reserver-5.jpg",
			},
			{
				Day: 2,
				Title: "Full Day in Maasai Mara",
				Activity:
					"Rise early for a hot air balloon safari (optional, extra cost). After breakfast, spend the day exploring the reserve. Witness the Great Migration if in season. Visit a Maasai village in the afternoon.",
				Image: "./images/wildlife/masaai-mara/masaai-mara-reserver-2.jpg",
			},
			{
				Day: 3,
				Title: "Maasai Mara Exploration",
				Activity:
					"Another full day of game drives. Search for elusive leopards and cheetahs. Enjoy a bush lunch amidst nature. In the evening, indulge in a traditional Maasai dance performance.",
				Image: "./images/wildlife/masaai-mara/masaai-mara-reserver-1.jpg",
			},
			{
				Day: 4,
				Title: "Maasai Mara to Nairobi",
				Activity:
					"Final morning game drive. After breakfast, depart for Nairobi, arriving in the afternoon. Transfer to your hotel or the airport.",
				Image: "./images/wildlife/masaai-mara/masaai-mara-reserver-6.jpg",
			},
		],
	},
	{
		ID: 12,
		Title: "Amboseli & Tsavo Adventure",
		Guide: "FLIGHT",
		Days: 5,
		Description:
			"Combine the elephant paradise of Amboseli with the rugged wilderness of Tsavo. Marvel at Mt. Kilimanjaro's snowy peak and explore diverse ecosystems teeming with wildlife.",
		Image: "./images/wildlife/amboseli-park/amboseli-national-park-6.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Amboseli",
				Activity:
					"Fly to Amboseli National Park. Afternoon game drive with Mt. Kilimanjaro as your backdrop. Look for large elephant herds and diverse birdlife.",
				Image: "./images/wildlife/tsavo-east-west/tsavo-east-west-2.png",
			},
			{
				Day: 2,
				Title: "Amboseli Exploration",
				Activity:
					"Full day in Amboseli. Visit Observation Hill for panoramic views. Enjoy a swamp walk to spot hippos and water birds. Evening game drive as the sun sets behind Kilimanjaro.",
				Image: "./images/wildlife/amboseli-park/amboseli-national-park-1.png",
			},
			{
				Day: 3,
				Title: "Amboseli to Tsavo West",
				Activity:
					"Morning game drive in Amboseli. Fly to Tsavo West. Afternoon visit to Mzima Springs to see crocodiles and fish from the underwater viewing chamber.",
				Image: "./images/wildlife/tsavo-east-west/tsavo-east-west-5.jpg",
			},
			{
				Day: 4,
				Title: "Tsavo West Discovery",
				Activity:
					"Early morning game drive to spot the park's famous 'red elephants'. Visit the Shetani Lava Flow. Afternoon game drive in search of black rhinos.",
				Image: "./images/wildlife/amboseli-park/amboseli-national-park-3.png",
			},
			{
				Day: 5,
				Title: "Tsavo West to Nairobi",
				Activity:
					"Final game drive in Tsavo West. Fly back to Nairobi, arriving in the afternoon. Transfer to your hotel or the airport.",
				Image: "./images/wildlife/tsavo-east-west/tsavo-east-west-3.png",
			},
		],
	},
	{
		ID: 13,
		Title: "Lake Nakuru & Aberdare Forest Retreat",
		Guide: "DRIVE",
		Days: 3,
		Description:
			"Discover the pink flamingo-fringed shores of Lake Nakuru and the mystical Aberdare Forest. From open savannah to lush montane forest, experience Kenya's diverse landscapes and wildlife.",
		Image: "./images/wildlife/lake-nakuru/lake-nakuru-park-3.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Lake Nakuru",
				Activity:
					"Drive to Lake Nakuru National Park. Afternoon game drive around the lake, famous for its flamingos and pelicans. Look for white rhinos and Rothschild's giraffes.",
				Image: "./images/wildlife/lake-nakuru/lake-nakuru-park-1.jpg",
			},
			{
				Day: 2,
				Title: "Lake Nakuru to Aberdare",
				Activity:
					"Morning game drive in Lake Nakuru. Drive to Aberdare National Park. Stay at a unique treetop lodge, watching wildlife at the waterhole below. Night game viewing from the lodge.",
				Image: "./images/wildlife/lake-nakuru/lake-nakuru-park-2.jpg",
			},
			{
				Day: 3,
				Title: "Aberdare to Nairobi",
				Activity:
					"Early morning forest walk (optional). After breakfast, drive back to Nairobi, arriving in the afternoon. Transfer to your hotel or the airport.",
				Image: "./images/wildlife/ol-pejeta/ol-pejeta-4.jpg",
			},
		],
	},
	{
		ID: 14,
		Title: "Samburu & Ol Pejeta Conservation",
		Guide: "FLIGHT",
		Days: 6,
		Description:
			"Journey to the rugged north for unique wildlife experiences. Encounter Samburu's 'Special Five' and get up close with rhinos in Ol Pejeta. A safari that combines conservation with unforgettable animal encounters.",
		Image: "./images/wildlife/ol-pejeta/ol-pejeta-1.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Samburu",
				Activity:
					"Fly to Samburu National Reserve. Afternoon game drive to spot Samburu's 'Special Five': Grevy's zebra, reticulated giraffe, Somali ostrich, gerenuk, and beisa oryx.",
				Image:
					"./images/wildlife/samburu-national-park/samburu-national-park-2.jpg",
			},
			{
				Day: 2,
				Title: "Samburu Exploration",
				Activity:
					"Full day in Samburu. Morning and afternoon game drives. Visit a Samburu village to learn about their culture. Evening sundowner by the Ewaso Nyiro River.",
				Image:
					"./images/wildlife/samburu-national-park/samburu-national-park-4.jpeg",
			},
			{
				Day: 3,
				Title: "Samburu Discovery",
				Activity:
					"Another day in Samburu. Early morning walking safari with a ranger. Afternoon game drive focusing on big cats. Night game drive to spot nocturnal animals.",
				Image:
					"./images/wildlife/samburu-national-park/samburu-national-park-3.jpg",
			},
			{
				Day: 4,
				Title: "Samburu to Ol Pejeta",
				Activity:
					"Morning game drive in Samburu. Fly to Ol Pejeta Conservancy. Afternoon visit to the chimpanzee sanctuary and the last two northern white rhinos on Earth.",
				Image: "./images/wildlife/ol-pejeta/ol-pejeta-4.jpg",
			},
			{
				Day: 5,
				Title: "Ol Pejeta Conservation",
				Activity:
					"Full day in Ol Pejeta. Join a rhino tracking experience. Visit the K-9 anti-poaching unit. Afternoon game drive to see the Big Five. Night game drive.",
				Image: "./images/wildlife/ol-pejeta/ol-pejeta-2.jpg",
			},
			{
				Day: 6,
				Title: "Ol Pejeta to Nairobi",
				Activity:
					"Morning horseback safari (optional). After breakfast, fly back to Nairobi. Transfer to your hotel or the airport.",
				Image: "./images/wildlife/ol-pejeta/ol-pejeta-3.jpg",
			},
		],
	},
	{
		ID: 15,
		Title: "Meru & Lewa Wildlife Adventure",
		Guide: "FLIGHT",
		Days: 7,
		Description:
			"Explore the wild beauty of Meru National Park and the conservation success of Lewa Wildlife Conservancy. From Born Free country to a rhino sanctuary, experience unique wildlife and landscapes.",
		Image: "./images/wildlife/lewa-wildlife/lewa-wildlife-1.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Meru",
				Activity:
					"Fly to Meru National Park. Afternoon game drive in the land of 'Born Free'. Visit Elsa's Kopje, named after the famous lioness. Evening sundowner with views over the plains.",
				Image: "./images/wildlife/meru-park/meru-national-park-2.jpg",
			},
			{
				Day: 2,
				Title: "Meru Exploration",
				Activity:
					"Full day exploring Meru. Game drives to spot lions, elephants, and rare antelopes. Visit the rhino sanctuary within the park. Evening bush dinner under the stars.",
				Image: "./images/wildlife/meru-park/meru-national-park-6.jpg",
			},
			{
				Day: 3,
				Title: "Meru River Adventure",
				Activity:
					"Morning fishing expedition on the Tana River. Afternoon game drive focusing on bird life. Night game drive to spot aardvarks and other nocturnal creatures.",
				Image: "./images/wildlife/meru-park/meru-national-park-3.jpg",
			},
			{
				Day: 4,
				Title: "Meru to Lewa",
				Activity:
					"Final game drive in Meru. Fly to Lewa Wildlife Conservancy. Afternoon game drive to see Lewa's famous rhinos. Visit the conservancy's headquarters to learn about their work.",
				Image: "./images/giraffe1.jpg",
			},
			{
				Day: 5,
				Title: "Lewa Wildlife Experience",
				Activity:
					"Full day in Lewa. Join a rhino tracking experience on foot. Afternoon game drive. Evening lecture by a conservation expert.",
				Image: "./images/wildlife/ol-pejeta/ol-pejeta-3.jpg",
			},
			{
				Day: 6,
				Title: "Lewa Adventure Activities",
				Activity:
					"Morning horse or camel ride across the conservancy. Afternoon visit to the local community to learn about Lewa's outreach programs. Evening game drive.",
				Image: "./images/wildlife/lewa-wildlife/lewa-wildlife-2.jpg",
			},
			{
				Day: 7,
				Title: "Lewa to Nairobi",
				Activity:
					"Early morning hot air balloon safari over Lewa (optional). After breakfast, fly back to Nairobi. Transfer to your hotel or the airport.",
				Image: "./images/wildlife/lewa-wildlife/lewa-wildlife-3.jpg",
			},
		],
	},
	{
		ID: 16,
		Title: "Masai Mara & Lake Victoria Expedition",
		Guide: "DRIVE",
		Days: 5,
		Description:
			"Combine the wildlife wonders of the Masai Mara with the tranquil beauty of Lake Victoria. From big game encounters to fishing villages, experience the diversity of western Kenya.",
		Image: "./images/wildlife/masaai-mara/masaai-mara-reserver-2.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Masai Mara",
				Activity:
					"Drive to the Masai Mara, arriving for lunch. Afternoon game drive to spot the Big Five. Evening nature walk with a Maasai guide.",
				Image: "./images/wildlife/masaai-mara/masaai-mara-reserver-1.jpg",
			},
			{
				Day: 2,
				Title: "Masai Mara Exploration",
				Activity:
					"Full day in the Mara. Morning and afternoon game drives. Visit a local school supported by tourism. Evening traditional Maasai dance performance.",
				Image: "./images/wildlife/masaai-mara/maasai-mara-reserver-4.jpg",
			},
			{
				Day: 3,
				Title: "Masai Mara to Lake Victoria",
				Activity:
					"Early morning hot air balloon safari (optional). Drive to Lake Victoria, Africa's largest lake. Evening boat ride to watch the sunset.",
				Image: "./images/wildlife/lake-nakuru/lake-naivasha-1.jpg",
			},
			{
				Day: 4,
				Title: "Lake Victoria Experience",
				Activity:
					"Morning fishing trip with local fishermen. Visit a traditional fishing village. Afternoon bird watching walk. Evening bonfire and storytelling session.",
				Image: "./images/wildlife/lake-nakuru/lake-nakuru-park-3.jpg",
			},
			{
				Day: 5,
				Title: "Lake Victoria to Nairobi",
				Activity:
					"Morning nature walk along the lakeshore. After lunch, drive back to Nairobi, arriving in the evening. Transfer to your hotel or the airport.",
				Image: "./images/wildlife/lake-nakuru/lake-nakuru-park-4.jpg",
			},
		],
	},
	{
		ID: 17,
		Title: "Mount Kenya & Sweetwaters Safari",
		Guide: "DRIVE",
		Days: 4,
		Description:
			"Ascend the slopes of Mount Kenya and explore the wildlife-rich plains of Ol Pejeta Conservancy. From mountain forests to savannah, experience central Kenya's diverse ecosystems.",
		Image: "./images/wildlife/mt-kenya/mt-kenta-park-2.jpg",
		LowestPrice: "$594",
		TourIncludes: [
			"Courtesy Nairobi airport-hotel pick up/drop off transfers",
			"Tour in our Standard Customized Pop-top 4WD Toyota Land cruiser Jeep.",
			"Services of an experienced English / other language speaking safari tour guide/driver ",
			"Stay in Economy, Comfort & Luxury safari lodges / tented camps ( please choose ) ",
			"Game viewing drives",
			"Masai Mara game reserve entrance fees",
			"Meals on safari",
			"Bottled drinking water in safari vehicle",
			"Pick up /drop off at Nairobi airport/ Nairobi hotel or residence",
			"Government taxes and local levies",
			"Government taxes and local levies REPEAT",
		],
		Prices: [
			{
				season: "shoulder",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,232", Comfort: "$1,288", Luxury: "$1,428" },
					},
					{
						group: "Two",
						tiers: { Economy: "$880", Comfort: "$920", Luxury: "$1,020" },
					},
					{
						group: "Three",
						tiers: { Economy: "$705", Comfort: "$750", Luxury: "$840" },
					},
					{
						group: "Four",
						tiers: { Economy: "$650", Comfort: "$690", Luxury: "$780" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$100", Luxury: "$110" },
					},
				],
			},
			{
				season: "peak",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,380", Comfort: "$1,570", Luxury: "$1,900" },
					},
					{
						group: "Two",
						tiers: { Economy: "$985", Comfort: "$1,120", Luxury: "$1,360" },
					},
					{
						group: "Three",
						tiers: { Economy: "$795", Comfort: "$925", Luxury: "$1,165" },
					},
					{
						group: "Four",
						tiers: { Economy: "$735", Comfort: "$870", Luxury: "$1,100" },
					},
					{
						group: "Extra",
						tiers: { Economy: "$90", Comfort: "$140", Luxury: "$200" },
					},
				],
			},
			{
				season: "low",
				groups: [
					{
						group: "One",
						tiers: { Economy: "$1,162", Comfort: "$1,232", Luxury: "$1,302" },
					},
					{
						group: "Two",
						tiers: { Economy: "$830", Comfort: "$880", Luxury: "$930" },
					},
					{
						group: "Three",
						tiers: { Economy: "$655", Comfort: "$710", Luxury: "$760" },
					},
					{
						group: "Four",
						tiers: { Economy: "$594", Comfort: "$650", Luxury: "$699" },
					},
					{
						group: "Extra",
						tiers: { Economy: "-", Comfort: "-", Luxury: "-" },
					},
				],
			},
		],
		Accomodation: {
			Economy: [
				"Elangata Olerai Camp",
				"Orng'atuny Mara King Camp",
				"Mara Chuo Champ",
				"Jambo Mara Safari Lodge",
			],
			Comfort: [
				"Prideinn Mara Camp",
				"Osero Camp",
				"Enkorok Mara CAmp",
				"AA Mara Lodge",
				"Mara River Lodge",
				"Azure Mara Haven Hotel",
			],
			Luxury: ["Saruni Mara Camp", "Porini Mara Camp", "Mara Explorer Camp"],
		},
		Breakdown: [
			{
				Day: 1,
				Title: "Nairobi to Mount Kenya",
				Activity:
					"Drive to Mount Kenya National Park. Afternoon hike in the mountain forest. Evening lecture on Mount Kenya's unique ecology. Night game drive to spot forest elephants.",
				Image: "./images/wildlife/mt-kenya/mt-kenta-park-3.jpg",
			},
			{
				Day: 2,
				Title: "Mount Kenya to Ol Pejeta",
				Activity:
					"Morning trek to a scenic viewpoint. Drive to Ol Pejeta Conservancy. Afternoon visit to the chimpanzee sanctuary. Evening game drive to see nocturnal animals.",
				Image: "./images/wildlife/mt-kenya/mt-elgon-3.jpg",
			},
			{
				Day: 3,
				Title: "Ol Pejeta Conservation",
				Activity:
					"Full day in Ol Pejeta. Join a rhino tracking experience. Visit the last two northern white rhinos. Afternoon game drive. Evening talk by a conservation expert.",
				Image: "./images/wildlife/ol-pejeta/ol-pejeta-2.jpg",
			},
			{
				Day: 4,
				Title: "Ol Pejeta to Nairobi",
				Activity:
					"Morning horse riding safari (optional). Visit to the K-9 anti-poaching unit. After lunch, drive back to Nairobi, arriving in the evening.",
				Image: "./images/wildlife/ol-pejeta/ol-pejeta-4.jpg",
			},
		],
	},
];

export const safarisQandA = [
	{
		Question: "What is the best time to go on a safari in Kenya?",
		Description:
			"The best time to go on a safari in Kenya is during the dry season, from late June to October. This period coincides with the Great Migration in the Maasai Mara and provides excellent wildlife viewing opportunities.",
	},
	{
		Question: "What should I pack for a safari in Kenya?",
		Description:
			"For a safari in Kenya, pack light, breathable clothing in neutral colors, a hat, sunglasses, sunscreen, insect repellent, a good camera, binoculars, and any necessary medications. Don't forget comfortable walking shoes and a warm jacket for early morning and evening game drives.",
	},
	{
		Question: "Do I need any vaccinations to travel to Kenya?",
		Description:
			"Yes, it is recommended to have vaccinations for Yellow Fever, Hepatitis A and B, Typhoid, and Tetanus. Additionally, anti-malarial medication is advisable. Consult your doctor or a travel clinic for personalized advice.",
	},
	{
		Question: "Is it safe to go on a safari in Kenya?",
		Description:
			"Yes, safaris in Kenya are generally safe. Most tourists visit well-established parks and reserves with professional guides. It's important to follow the safety instructions provided by your guide and the park regulations.",
	},
	{
		Question: "Can I see the Big Five in Kenya?",
		Description:
			"Yes, Kenya is one of the best places to see the Big Five (lion, elephant, buffalo, leopard, and rhino). The Maasai Mara, Amboseli, and Tsavo National Parks are particularly known for offering opportunities to see these iconic animals.",
	},
	{
		Question: "What types of accommodation are available on safari?",
		Description:
			"On safari in Kenya, you can choose from a range of accommodations, including luxury lodges, tented camps, budget campsites, and mid-range lodges. The type of accommodation depends on your budget and personal preference.",
	},
	{
		Question: "How long should a safari in Kenya be?",
		Description:
			"The ideal length of a safari in Kenya depends on your interests and schedule. A typical safari lasts between 5 to 10 days, allowing you to explore multiple parks and reserves. Shorter 3-day safaris are also available if you have limited time.",
	},
	{
		Question: "What wildlife can I expect to see on a Kenyan safari?",
		Description:
			"On a Kenyan safari, you can expect to see a wide variety of wildlife, including elephants, lions, giraffes, zebras, hippos, crocodiles, and numerous bird species. The diversity of wildlife varies by park and season.",
	},
	{
		Question: "Do I need a visa to travel to Kenya?",
		Description:
			"No, most tourists to Kenya do not need a visa. The state allows tourists to travel into the country without obtaining a visa. It's not necessary to check the latest visa requirements from the Kenyan embassy or consulate in your country.",
	},
	{
		Question: "Can I book a safari on arrival in Kenya?",
		Description:
			"While it's possible to book a safari on arrival in Kenya, it's highly recommended to book in advance, especially during peak seasons. Booking ahead ensures you get the best choice of accommodations and guides. And that's why we are here for you!.",
	},
];

export function GetSafari(safariID) {
	return safaris.find((safari) => safari.ID === Number(safariID));
}
