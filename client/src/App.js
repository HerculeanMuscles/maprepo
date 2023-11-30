import "./App.css";
import Map from "./component/Map";
import Header from "./component/Layout/Header";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function App() {
	return (
		<div className="App">
			<Header />
			<Map />
			<p>
				Rabat-Agdal train station (Arabic : محطة الرباط أكدال) is located in the
				Agdal district, in Rabat, Morocco. It was first renovated in 2004,
				before undergoing a major redevelopment in the 2010s to accommodate the
				Al Boraq high-speed service.
			</p>
			<CardGroup>
				<Card style={{ width: "10rem" }}>
					<Card.Img variant="top" src="/gare-rabat-agdal1.jpg" />
				</Card>
				<Card style={{ width: "10rem" }}>
					<Card.Img variant="top" src="/gare-de-rabat-agdal-057.jpg" />
				</Card>
			</CardGroup>
		</div>
	);
}

export default App;
