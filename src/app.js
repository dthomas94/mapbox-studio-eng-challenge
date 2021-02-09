import React, { useState } from "react";
import "./app.css";
import { MapView } from "./mapView";
import { List as FavoritesList } from "./common/list";

const Favorite = ({ favorite }) => (
	<div>
		<span>♥️</span>
		<span>{`${favorite.name} - ${favorite.type}`}</span>
	</div>
);

const App = () => {
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
		const indexOfFavorite = favorites.indexOf(item);
		if (indexOfFavorite !== -1) {
			removeFavorite(indexOfFavorite);
		} else {
			addFavorite(item);
		}
	};

	return (
		<div
			className="App"
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-evenly",
			}}
		>
			<div style={{ width: "80%", height: "100vh", maxWidth: 1200 }}>
				<MapView onMarkerClick={(feature) => handleMarkerClick(feature)} />
			</div>
			<div>
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
