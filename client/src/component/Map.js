import React from "react";
import L from "leaflet"; // Import Leaflet library
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Define the Map component
export default function Map() {
	// Set the initial position of the map
	const position = [34.00112, -6.85739];

	// Create a custom icon for the marker using Leaflet
	const icon = L.icon({ iconUrl: "/icons8-pin-32.png" });

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh", // Set the height of the container to 100% of the viewport height
			}}
		>
			{/* MapContainer component from react-leaflet */}
			<MapContainer
				center={position} // Set the initial center of the map
				zoom={13} // Set the initial zoom level
				scrollWheelZoom={false} // Disable zooming with the scroll wheel
				style={{ height: "100vh", width: "60%" }} // Set the dimensions of the map
			>
				{/* TileLayer component for the map tiles */}
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{/* Marker component to place a marker on the map */}
				<Marker position={position} icon={icon}>
					{/* Popup component to display information when marker is clicked */}
					<Popup>
						Rabat, Agdal.
						<br /> Rabat Agdal Train station
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}
