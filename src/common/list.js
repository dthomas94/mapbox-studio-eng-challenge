import React from "react";

export const List = ({ items, onListItemClick, renderComponent }) => {
	return (
		<ul>
			{items.map((item) => (
				<li key={item.name} onClick={() => onListItemClick(item)}>
					{renderComponent(item)}
				</li>
			))}
		</ul>
	);
};
