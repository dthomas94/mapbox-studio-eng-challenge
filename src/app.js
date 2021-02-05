import React, { useState } from "react";
import "./app.css";
import { MapView } from "./mapView";
import { List as FavoritesList } from "./common/list";

const App = () => {
	const [favorites, setFavorites] = useState([]);

	const removeFavorite = (index) => {
		const updatedFavorites = [...favorites].splice(index, 1);
		setFavorites(updatedFavorites);
	};
	const addFavorite = (item) => {
		const updatedFavorites = [...favorites].push(item);
		setFavorites(updatedFavorites);
	};
	const handleMarkerClick = (item) => {
		const indexOfFavorite = favorites.indexOf(item);
		if (indexOfFavorite) {
			removeFavorite(indexOfFavorite);
		} else {
			addFavorite(item);
		}
	};

	return (
		<div className="App">
			<MapView onMarkerClick={(feature) => handleMarkerClick(feature)} />
			<FavoritesList items={favorites} />
		</div>
	);
};

export default App;
