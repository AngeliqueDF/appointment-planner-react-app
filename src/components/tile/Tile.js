import React from "react";

export const Tile = ({ item }) => {
	return (
		<div className="tile-container">
			<p className="tile-title">{item.name || item.title}</p>
			<p className="tile">{item.phone || item.date}</p>
			<p className="tile">{item.email || item.time}</p>
		</div>
	);
};
