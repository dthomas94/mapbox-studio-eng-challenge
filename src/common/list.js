import React from "react";

export const List = ({ items }) => {
	return (
		<ul>
			{items.map((item) => (
				<li>
					{item.name} - {item.description}
				</li>
			))}
		</ul>
	);
};
