import React from "react";

export const List = ({ title, items, onClickListItem, renderComponent }) => {
	return (
		<div className="list">
			<h3>{title}</h3>
			<ul>
				{items.map((item) => (
					<li key={item.name} onClick={() => onClickListItem(item)}>
						{renderComponent(item)}
					</li>
				))}
			</ul>
		</div>
	);
};
