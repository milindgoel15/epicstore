import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as EmptyStar } from "@heroicons/react/24/outline";
import React from "react";

let RatingBar = () => {
	return (
		<>
			<div className="flex">
				{Array.from({ length: 4 }).map((_, index) => (
					<StarIcon key={index} className="w-6 h-6 text-yellow-400" />
				))}
				{Array.from({ length: 1 }).map((_, index) => (
					<EmptyStar key={index} className="w-6 h-6 text-yellow-400" />
				))}
			</div>
		</>
	);
};

export default RatingBar;
