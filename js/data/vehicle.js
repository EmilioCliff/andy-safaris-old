export const vehicles = [
	{
		ID: 1,
		Name: "Mercedes-Benz E220",
		Passengers: 4,
		Suitcases: 4,
		Type: "Mercedes-Benz",
		PricePerKM: "$4.56",
		PricePerMonth: "$1,600",
		PricePerMothWithDriver: "$2,500",
		PriceMonthsContract: "$3,400",
		ComesWith: [],
		Images: ["./images/cars/mercedes-benz-e220.jpg"],
		Make: {
			Engine: "3000",
			InteriorColor: "Black",
			Power: "190",
			FuelType: "Petrol",
			Length: "4.5 meters",
			ExteriorColor: "Phantom Black",
			Transmission: "Automatic",
			Extras: "Alloy Wheels, Bluetooth, Radio",
		},
	},
	{
		ID: 2,
		Name: "Toyota Hiace",
		Passengers: 8,
		Suitcases: 10,
		Type: "touristVan",
		PricePerKM: "$5.00",
		PricePerMonth: "$1,200",
		PricePerMothWithDriver: "$2,200",
		PriceMonthsContract: "$4,200",
		ComesWith: [],
		Images: ["./images/cars/toyota-hiace.jpg"],
		Make: {
			Engine: "3500",
			InteriorColor: "Gray",
			Power: "210",
			FuelType: "Diesel",
			Length: "5.2 meters",
			ExteriorColor: "White",
			Transmission: "Automatic",
			Extras: "Air Conditioning, GPS, Radio",
		},
	},
	{
		ID: 3,
		Name: "Toyota Van",
		Passengers: 7,
		Suitcases: 8,
		Type: "Van",
		PricePerKM: "$6.00",
		PricePerMonth: "$2,000",
		PricePerMothWithDriver: "$3,400",
		PriceMonthsContract: "$5,000",
		ComesWith: [],
		Images: ["./images/cars/tourist-van-1.jpg"],
		Make: {
			Engine: "4000",
			InteriorColor: "Black",
			Power: "250",
			FuelType: "Diesel",
			Length: "6.0 meters",
			ExteriorColor: "Blue",
			Transmission: "Manual",
			Extras: "Air Conditioning, GPS, Bluetooth",
		},
	},
	{
		ID: 4,
		Name: "Toyota Vanguard",
		Passengers: 4,
		Suitcases: 4,
		Type: "Van",
		PricePerKM: "$6.00",
		PricePerMonth: "$700",
		PricePerMothWithDriver: "$1,200",
		PriceMonthsContract: "$3,200",
		ComesWith: [],
		Images: ["./images/cars/toyota-vanguard.jpg"],
		Make: {
			Engine: "4000",
			InteriorColor: "Black",
			Power: "250",
			FuelType: "Diesel",
			Length: "6.0 meters",
			ExteriorColor: "Blue",
			Transmission: "Manual",
			Extras: "Air Conditioning, GPS, Bluetooth",
		},
	},
	{
		ID: 5,
		Name: "Toyota Noah",
		Passengers: 7,
		Suitcases: 8,
		Type: "Noah",
		PricePerKM: "$6.00",
		PricePerMonth: "$2,000",
		PricePerMothWithDriver: "$3,400",
		PriceMonthsContract: "$5,000",
		ComesWith: [],
		Images: ["./images/cars/toyota-noah.jpg"],
		Make: {
			Engine: "4000",
			InteriorColor: "Black",
			Power: "250",
			FuelType: "Diesel",
			Length: "6.0 meters",
			ExteriorColor: "Blue",
			Transmission: "Manual",
			Extras: "Air Conditioning, GPS, Bluetooth",
		},
	},
	{
		ID: 6,
		Name: "Toyota Land Cruiser",
		Passengers: 5,
		Suitcases: 5,
		Type: "SUV",
		PricePerKM: "$7.00",
		PricePerMonth: "$1,900",
		PricePerMothWithDriver: "$3,200",
		PriceMonthsContract: "$4,500",
		ComesWith: [],
		Images: ["./images/cars/toyota-land-cruiser.jpg"],
		Make: {
			Engine: "3000",
			InteriorColor: "Black",
			Power: "240",
			FuelType: "Petrol",
			Length: "4.8 meters",
			ExteriorColor: "Red",
			Transmission: "Automatic",
			Extras: "Sunroof, GPS, Radio",
		},
	},
	{
		ID: 7,
		Name: "Mercedes-Benz E350",
		Passengers: 4,
		Suitcases: 4,
		Type: "Mercedes-Benz",
		PricePerKM: "$4.56",
		PricePerMonth: "$500",
		PricePerMothWithDriver: "$1,300",
		PriceMonthsContract: "$2,500",
		ComesWith: [],
		Images: ["./images/cars/mercedes-benz-e350.jpg"],
		Make: {
			Engine: "3000",
			InteriorColor: "Black",
			Power: "190",
			FuelType: "Petrol",
			Length: "4.5 meters",
			ExteriorColor: "Phantom Black",
			Transmission: "Automatic",
			Extras: "Alloy Wheels, Bluetooth, Radio",
		},
	},
	{
		ID: 8,
		Name: "Toyota Fielder",
		Passengers: 5,
		Suitcases: 6,
		Type: "fielder",
		PricePerKM: "$3.50",
		PricePerMonth: "$900",
		PricePerMothWithDriver: "$1,200",
		PriceMonthsContract: "$4,000",
		ComesWith: [],
		Images: ["./images/cars/toyota-fielder.jpg"],
		Make: {
			Engine: "1800",
			InteriorColor: "Gray",
			Power: "130",
			FuelType: "Petrol",
			Length: "4.3 meters",
			ExteriorColor: "White",
			Transmission: "Automatic",
			Extras: "Bluetooth, Radio",
		},
	},
	{
		ID: 9,
		Name: "Toyota Corolla Axio",
		Passengers: 4,
		Suitcases: 4,
		Type: "toyota-corolla",
		PricePerKM: "$3.00",
		PricePerMonth: "$1,750",
		PricePerMothWithDriver: "$3,000",
		PriceMonthsContract: "$4,500",
		ComesWith: [],
		Images: ["./images/cars/toyota-corolla-axio.jpg"],
		Make: {
			Engine: "1600",
			InteriorColor: "Black",
			Power: "120",
			FuelType: "Petrol",
			Length: "4.2 meters",
			ExteriorColor: "Silver",
			Transmission: "Manual",
			Extras: "Radio, Bluetooth",
		},
	},
];

export function GetVehicle(vehicleID) {
	return vehicles.find((vehicle) => vehicle.ID === Number(vehicleID));
}

export const carHireQandA = [
	{
		Question: "How do I book a taxi for airport pickup?",
		Description:
			"You can book a taxi for airport pickup through our website or mobile app. Simply enter your pickup location, destination, and preferred time. You'll receive a confirmation once your booking is successful.",
	},
	{
		Question: "Do I need to pay a deposit for booking a taxi?",
		Description:
			"Yes, we require a 30% deposit to confirm your booking. This deposit ensures that your taxi will be reserved and ready for your airport pickup.",
	},
	{
		Question: "How can I pay the deposit?",
		Description:
			"You can pay the deposit online using your credit card, debit card, or through mobile payment options available on our platform. Once the payment is successful, you will receive a confirmation email.",
	},
	{
		Question: "Is the deposit refundable?",
		Description:
			"The deposit is refundable if you cancel your booking at least 24 hours before the scheduled pickup time. For cancellations made within 24 hours of the pickup time, the deposit is non-refundable.",
	},
	{
		Question: "What happens if my flight is delayed?",
		Description:
			"If your flight is delayed, please notify us as soon as possible. We will make the necessary adjustments to ensure that your taxi is available when you arrive. Additional waiting charges may apply depending on the duration of the delay.",
	},
	{
		Question: "Can I make changes to my booking after it is confirmed?",
		Description:
			"Yes, you can make changes to your booking by contacting our customer support team. Please note that changes are subject to availability and may incur additional charges.",
	},
	{
		Question: "How will I find my taxi at the airport?",
		Description:
			"Your driver will be waiting for you at the designated pickup point in the airport. You will receive detailed instructions and the driver's contact information in your booking confirmation email.",
	},
	{
		Question: "What safety measures are in place for airport pickups?",
		Description:
			"Our drivers follow strict safety protocols, including wearing masks and sanitizing the vehicle regularly. We also ensure that the vehicles are clean and well-maintained for your safety and comfort.",
	},
	{
		Question: "Can I book a return trip to the airport?",
		Description:
			"Yes, you can book a return trip to the airport. Simply select the return trip option when making your booking or contact our customer support team to arrange it.",
	},
	{
		Question: "What if I have special requirements or need assistance?",
		Description:
			"If you have any special requirements or need assistance, please let us know at the time of booking. We will do our best to accommodate your needs and ensure a comfortable journey.",
	},
];

export const taxiQandA = [
	{
		Question: "What is required to rent a car?",
		Description:
			"To rent a car, you will need a valid driver's license, a credit card in your name, and proof of identity such as a passport or national ID. Additionally, some rental companies may have age restrictions and require drivers to be at least 21 years old.",
	},
	{
		Question: "Can I rent a car if I am under 25?",
		Description:
			"Yes, you can rent a car if you are under 25. However, most car rental companies will charge an additional 'young driver' fee for drivers under the age of 25.",
	},
	{
		Question: "Is insurance included in the rental price?",
		Description:
			"Basic insurance is usually included in the rental price. However, you can purchase additional coverage for extra protection, such as collision damage waiver (CDW) or theft protection.",
	},
	{
		Question: "Can I add an additional driver?",
		Description:
			"Yes, you can add an additional driver to your rental agreement. The additional driver must meet the same requirements as the primary driver and there may be an extra fee for this service.",
	},
	{
		Question: "What should I do if the rental car breaks down?",
		Description:
			"If the rental car breaks down, contact the car rental company's emergency roadside assistance immediately. They will provide instructions and support, and arrange for a replacement vehicle if necessary.",
	},
	{
		Question: "Is it possible to rent a car for a one-way trip?",
		Description:
			"Yes, many car rental companies offer one-way rentals, allowing you to pick up the car at one location and return it to another. There may be an additional fee for this service.",
	},
	{
		Question: "Are there mileage limits on rental cars?",
		Description:
			"Some car rental agreements include unlimited mileage, while others may have a daily mileage limit. Be sure to check the terms and conditions of your rental agreement to avoid additional charges.",
	},
	{
		Question: "Can I use my own insurance for the rental car?",
		Description:
			"Yes, you can use your own car insurance for the rental vehicle if it covers rental cars. Check with your insurance provider to ensure you have the necessary coverage.",
	},
	{
		Question: "What fuel policy should I follow?",
		Description:
			"Most car rental companies have a full-to-full fuel policy, meaning you should return the car with the same amount of fuel it had when you picked it up. Failure to do so may result in refueling charges.",
	},
	{
		Question: "Can I rent a car if I have an international driver's license?",
		Description:
			"Yes, you can rent a car with an international driver's license. However, it's advisable to also carry your home country driver's license and ensure your international license is valid in the country you're visiting.",
	},
];
