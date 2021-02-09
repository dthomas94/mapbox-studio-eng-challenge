import React, { useState } from "react";
import "./app.css";
import { MapView } from "./MapView";
import { List as FavoritesList } from "./common/List";

const getIndexOfItem = (list, item) =>
	list.findIndex(({ name }) => item.name === name);

const Favorite = ({ favorite }) => (
	<>
		<button>♥️</button>
		<span>{`${favorite.name} - ${favorite.type}`}</span>
	</>
);

const App = () => {
	const [favorites, setFavorites] = useState([]);

	const removeFavorite = (oldFaves, index) => {
		const updatedFavorites = [...oldFaves];
		updatedFavorites.splice(index, 1);
		return updatedFavorites;
	};
	const addFavorite = (oldFaves, item) => {
		const updatedFavorites = [...oldFaves];
		updatedFavorites.push(item);
		return updatedFavorites;
	};

	const handleMarkerClick = (item) => {
		setFavorites((prevState) => {
			const indexOfFavorite = getIndexOfItem(prevState, item);
			if (indexOfFavorite === -1) {
				const updatedFaves = addFavorite(prevState, item);
				return updatedFaves;
			}
			const updatedFaves = removeFavorite(prevState, indexOfFavorite);
			return updatedFaves;
		});
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
					title="Favorite Places"
					items={favorites}
					renderComponent={(favorite) => <Favorite favorite={favorite} />}
					onClickListItem={(favorite) => {
						const indexOfFavorite = getIndexOfItem(favorites, favorite);
						setFavorites((prevState) =>
							removeFavorite(prevState, indexOfFavorite)
						);
					}}
				/>
			</div>
		</div>
	);
};

export default App;
