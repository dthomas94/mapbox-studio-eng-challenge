import React from "react";
import { MapView } from "./map-view";
import mapboxGl from "mapbox-gl";
import { render, screen } from "@testing-library/react";

jest.mock("mapbox-gl", () => ({
	Map: jest.fn(),
}));

test("MapView", () => {
	render(<MapView />);
	expect(screen).toMatchSnapshot();
	expect(mapboxGl.Map).toHaveBeenCalledTimes(1);
});
