import React, { useState } from "react";
import "./app.css";
import { MapView } from "./mapView";
import { List as FavoritesList } from "./common/list";

const Favorite = ({ favorite }) => (
	<div>
		<button>♥️</button>
		<span>{`${favorite.name} - ${favorite.type}`}</span>
	</div>
);

const App = () => {
	console.log("rerendered");
	const [favorites, setFavorites] = useState([]);

	const removeFavorite = (index) => {
		const updatedFavorites = [...favorites];
		updatedFavorites.splice(index, 1);
		setFavorites(updatedFavorites);
	};
	const addFavorite = (item) => {
		const updatedFavorites = [...favorites];
		updatedFavorites.push(item);
		setFavorites(updatedFavorites);
	};
	const handleMarkerClick = (item) => {
		const indexOfFavorite = favorites.findIndex(
			({ name }) => item.name === name
		);

		if (indexOfFavorite === -1) {
			addFavorite(item);
		} else {
			removeFavorite(indexOfFavorite);
		}
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-evenly",
			}}
		>
			<div style={{ width: "100%", height: "100vh", maxWidth: 1200 }}>
				<MapView
					favorites={favorites}
					onMarkerClick={(feature) => handleMarkerClick(feature)}
				/>
			</div>
			<div style={{ width: 300 }}>
				<FavoritesList
					items={favorites}
					renderComponent={(favorite) => <Favorite favorite={favorite} />}
					onListItemClick={(favorite) => removeFavorite(favorite)}
				/>
			</div>
		</div>
	);
};

export default App;
