import React from "react";
import { MapView } from ".";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";

const mockInstantiationTracker = jest.fn();

jest.mock("mapbox-gl", () => {
	return {
		Map: class {
			constructor({ container }) {
				mockInstantiationTracker();
			}

			on(eventName, layer, callbackFn) {
				mockInstantiationTracker();
			}
		},
	};
});

describe("MapView", () => {
	let wrapper;
	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = mount(<MapView favorites={[]} onMarkerClick={jest.fn()} />);
	});
	it("renders", () => {
		expect(mountToJson(wrapper)).toMatchSnapshot();
	});
	it("initializes mapbox gl", () => {
		expect(mockInstantiationTracker).toHaveBeenCalledTimes(2);
	});
});
