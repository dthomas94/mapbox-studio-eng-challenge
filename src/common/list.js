import React from "react";

export const List = ({ title, items, onListItemClick, renderComponent }) => {
	return (
		<div className="list">
			<h3>{title}</h3>
			<ul>
				{items.map((item) => (
					<li key={item.name} onClick={() => onListItemClick(item)}>
						{renderComponent(item)}
					</li>
				))}
			</ul>
		</div>
	);
};
