import React from "react";

const HeadingWithLine = ({ heading }) => {
	return (
		<div className="relative text-center mb-5 flex items-center justify-center">
			<div className="absolute inset-x-0 flex justify-center items-center">
				<div className="flex-grow border-t-2 border-white" />
				<h1 className="text-white text-5xl font-extrabold px-4 whitespace-nowrap ">
					{heading}
				</h1>
				<div className="flex-grow border-t-2 border-white" />
			</div>
		</div>
	);
};

export default HeadingWithLine;
