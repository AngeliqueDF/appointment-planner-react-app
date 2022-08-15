import React from "react";
import { Tile } from "./../tile/Tile";

export const TileList = ({ itemsArray }) => {
	return (
		<div>
			{itemsArray.map((item) => (
				<Tile key={item.id} item={item} />
			))}
		</div>
	);
};
