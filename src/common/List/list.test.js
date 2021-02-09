import React from "react";
import { List } from ".";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";

const defaultProps = {
	title: "Favorites List",
	items: [],
	onClickListItem: jest.fn(),
	renderComponent: jest.fn(),
};

describe("List", () => {
	let wrapper;
	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = mount(<List title="Favorites List" {...defaultProps} />);
	});
	it("renders", () => {
		expect(mountToJson(wrapper)).toMatchSnapshot();
	});
	it("check the type, value of items and title", () => {
		wrapper = mount(<List {...defaultProps} />);
		expect(wrapper.prop("items")).toEqual(expect.arrayContaining([]));
		expect(wrapper.prop("title")).toEqual(
			expect.stringContaining("Favorites List")
		);
	});
	it("check the onClickListItem callback", () => {
		const props = {
			items: [{ name: "Default", type: "Default" }],
		};
		wrapper = mount(<List {...defaultProps} items={props.items} />);
		const ListItem = wrapper.find("li");
		ListItem.simulate("click", {
			item: props.items[0],
		});
		expect(defaultProps.onClickListItem).toHaveBeenCalledWith({
			name: "Default",
			type: "Default",
		});
	});
});
