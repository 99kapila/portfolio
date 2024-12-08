import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

const VerticalTabs = ({ data }) => {
	const [selectedItem, setSelectedItem] = useState(data[0]?.id || null);

	const handleSelectItem = (event, newValue) => {
		setSelectedItem(newValue);
	};

	const selectedData = data.find((item) => item.id === selectedItem);

	return (
		<div className="flex flex-col md:flex-row w-full">
			{/* Vertical Tabs */}
			<Box className="flex flex-col items-center w-full md:w-1/4 p-4 border-r border-gray-700">
				<Tabs
					orientation="vertical"
					value={selectedItem}
					onChange={handleSelectItem}
					aria-label="Vertical tabs"
					className="h-full"
				>
					{data.map((item) => (
						<Tab
							key={item.id}
							label={item.title}
							value={item.id}
							className={`normal-case cursor-pointer py-2 px-4 text-left transition-colors duration-200
                ${
					selectedItem === item.id
						? "bg-button-gradient text-white"
						: "hover:bg-transparent text-white"
				}
              `}
						/>
					))}
				</Tabs>
			</Box>

			{/* Content Display */}
			<Box className="flex-grow w-full md:w-3/4 p-4 bg-richblack text-white">
				<div className="flex flex-col md:items-start items-center">
					<div className="text-2xl font-semibold mb-4">
						{selectedData.position} @ {selectedData.company}
					</div>
					<div className="text-sm font-thin mb-4">
						{selectedData.date}
					</div>
					<ul className="list-disc pl-5 text-base leading-relaxed text-gray-200">
						{selectedData.description.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</Box>
		</div>
	);
};

export default VerticalTabs;
