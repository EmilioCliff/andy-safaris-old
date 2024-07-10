let map,
	directionsService,
	directionsRenderer,
	sourceAutocomplete,
	destinationAutocomplete;
let savedState = {};

export async function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: -1.2832533, lng: 36.8172449 },
		zoom: 13,
	});

	// const { Map } = await google.maps.importLibrary("maps");
	// const { Place, AutocompleteSessionToken, AutocompleteSuggestion } = await google.maps.importLibrary("places");

	// map = new Map(document.getElementById("map"), {
	// 	center: { lat: -1.2832533, lng: 36.8172449 },
	// 	zoom: 10,
	// });

	directionsService = new google.maps.DirectionsService();
	directionsRenderer = new google.maps.DirectionsRenderer();
	directionsRenderer.setMap(map);

	sourceAutocomplete = new google.maps.places.Autocomplete(
		document.getElementById("pickup-location"),
		{ bounds: getKenyaBounds(), componentRestrictions: { country: "KE" } }
	);

	destinationAutocomplete = new google.maps.places.Autocomplete(
		document.getElementById("dropoff-location"),
		{ bounds: getKenyaBounds(), componentRestrictions: { country: "KE" } }
	);

	if (savedState.pickupLocation) {
		document.getElementById("pickup-location").innerText =
			savedState.pickupLocation;
	}
	if (savedState.dropoffLocation) {
		document.getElementById("dropoff-location").innerText =
			savedState.dropoffLocation;
	}

	destinationAutocomplete.addListener("place_changed", () => {
		const origin = document.getElementById("pickup-location").value;
		const destination = document.getElementById("dropoff-location").value;
		calculateRoute(origin, destination);
	});

	if (savedState.directions) {
		directionsRenderer.setDirections(savedState.directions);
		document.getElementById("total-distance").textContent =
			savedState.totalDistance;
		document.getElementById("total-time").textContent = savedState.totalTime;
	}
}

export function getKenyaBounds() {
	const southwest = new google.maps.LatLng(-4.89952, 33.909015);
	const northeast = new google.maps.LatLng(4.62, 41.899578);
	return new google.maps.LatLngBounds(southwest, northeast);
}

export function calculateRoute(origin, destination) {
	// const origin = document.getElementById("pickup-location").value;
	// const destination = document.getElementById("dropoff-location").value;

	if (!origin || !destination) {
		return;
	}

	directionsService.route(
		{
			origin: origin,
			destination: destination,
			travelMode: google.maps.TravelMode.DRIVING,
		},
		(response, status) => {
			if (status === "OK") {
				directionsRenderer.setDirections(response);

				const route = response.routes[0];
				const leg = route.legs[0];

				// Display the total distance and time
				document.getElementById("total-distance").textContent =
					leg.distance.text;
				document.getElementById("total-time").textContent = leg.duration.text;

				// savedState.directions = response;
				// savedState.totalDistance = totalDistance;
				// savedState.totalTime = totalTime;
				// console.log(savedState);
			} else {
				alert("Directions request failed due to " + status);
			}
		}
	);
}

// export function saveState() {
// 	savedState = {
// 		mapCenter: map.getCenter().toJSON(),
// 		mapZoom: map.getZoom(),
// 		pickupLocation: document.getElementById("pickup-location").innerText,
// 		dropoffLocation: document.getElementById("dropoff-location").innerText,
// 		directions: savedState.directions,
// 		totalDistance: savedState.totalDistance,
// 		totalTime: savedState.totalTime,
// 	};
// }

// Restore input values and trigger input event
//  function restoreInputValue(elementId, value) {
//     const inputElement = document.getElementById(elementId);
//     inputElement.setAttribute('value', value); // Sets the value attribute
//     inputElement.value = value; // Sets the actual value
//     const event = new Event('input', { bubbles: true });
//     inputElement.dispatchEvent(event); // Manually trigger the input event
//   }

initMap();
