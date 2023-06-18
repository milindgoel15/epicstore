// import MinusSmallIcon from "@heroicons/react/24/outline/MinusSmallIcon";
// import PlusSmallIcon from "@heroicons/react/24/outline/PlusSmallIcon";
// import React, { useState } from "react";

// export interface QuantityProps {
// 	count: number;
// 	setCount: (count: number) => void;
// }

// let Quantity = ({ count, setCount }: QuantityProps) => {
// 	return (
// 		<>
// 			<div className="flex items-center gap-4">
// 				<button
// 					disabled={count <= 1}
// 					onClick={() => setCount(count - 1)}
// 					className="hover:bg-red-400 rounded-md transition-all"
// 				>
// 					<MinusSmallIcon className="h-6 w-6" />
// 				</button>
// 				<p className="text-xl">{count}</p>
// 				<button
// 					onClick={() => setCount(count + 1)}
// 					className="hover:bg-green-400 rounded-md transition-all"
// 				>
// 					<PlusSmallIcon className="h-6 w-6" />
// 				</button>
// 			</div>
// 		</>
// 	);
// };

// export default Quantity;
