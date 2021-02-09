import React, { useEffect, createRef } from "react";
import mapboxGl from "mapbox-gl";
import style from "./data/style.json";

// If there are issues, replace with your token
const ACCESS_TOKEN =
	"pk.eyJ1IjoiZGFzdWxpdCIsImEiOiJjaXQzYmFjYmkwdWQ5MnBwZzEzZnNub2hhIn0.EDJ-lIfX2FnKhPw3nqHcqg";

export const MapView = ({ onMarkerClick }) => {
	const mapContainer = createRef();
	const containerEl = mapContainer;

	useEffect(() => {
		if (containerEl && containerEl.current) {
			mapboxGl.accessToken = ACCESS_TOKEN;
			const map = new mapboxGl.Map({
				container: containerEl.current,
				style: style,
				center: [-122.396449, 37.791256],
				zoom: 15,
			});

			map.on("load", function (e) {
				// When a click event occurs on a feature in the places poi-label layer, open a popup at the
				// location of the feature, with description HTML from its properties.
				map.on("click", "poi-label", function (e) {
					const selectedFeature = e.features[0];
					const coordinates = selectedFeature.geometry.coordinates.slice();
					const name = selectedFeature.properties.name;
					const type = selectedFeature.properties.type;

					// Ensure that if the map is zoomed out such that multiple
					// copies of the feature are visible, the popup appears
					// over the copy being pointed to.
					while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
						coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
					}

					map.flyTo({
						center: coordinates,
					});

					new mapboxGl.Popup({ offset: 15 })
						.setLngLat(coordinates)
						.setHTML(
							`
							<div>
								<span
									id='marker-heart-icon'
								>
									♡
								</span>
								${name} - ${type}
							</div>
						`
						)
						.addTo(map);

					document
						.getElementById("marker-heart-icon")
						.addEventListener("click", () => {
							onMarkerClick && onMarkerClick({ name, type });
						});
				});
			});
		}
	}, [containerEl, onMarkerClick]);

	return <div ref={mapContainer} className="map-container" />;
};
