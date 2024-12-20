import { Tabs, Tab, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { SlCalender } from "react-icons/sl";

const ContentTabs = ({ data, isVisible }) => {
	const [animationTriggered, setAnimationTriggered] = useState(false);

	useEffect(() => {
		if (isVisible) {
			setAnimationTriggered(true);
		}
	}, [isVisible]);

	const [selectedItem, setSelectedItem] = useState(data[0]?.id || null);

	const handleSelectItem = (event, newValue) => {
		setAnimationTriggered(false);
		setSelectedItem(newValue);
	};

	const selectedData = data.find((item) => item.id === selectedItem);

	return (
		<div className="flex flex-col md:flex-row w-full">
			<Box className="flex flex-col items-center w-full md:w-1/4 p-4 border-r border-gray-700">
				<div className="md:hidden flex w-full justify-center">
					<Tabs
						value={selectedItem}
						onChange={handleSelectItem}
						aria-label="Vertical tabs"
						className="h-full transition-all ease-in-out duration-500"
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
				</div>
				<div className="hidden md:flex w-full justify-center">
					<Tabs
						orientation="vertical"
						value={selectedItem}
						onChange={handleSelectItem}
						aria-label="Vertical tabs"
						className="h-full transition-all ease-in-out duration-500"
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
				</div>
			</Box>

			<Box className="flex-grow w-full md:w-3/4 p-4 bg-richblack text-white transition-all ease-in-out duration-500">
				<motion.div
					key={selectedItem}
					initial={{ opacity: 0, x: -5 }}
					animate={{
						opacity: animationTriggered ? 1 : 0,
						x: animationTriggered ? 0 : -5,
					}}
					transition={{ duration: 1, ease: "easeInOut" }}
					onAnimationComplete={() => setAnimationTriggered(true)}
				>
					<div className="flex flex-col md:items-start items-center">
						<div className="flex flex-col items-center gap-2 text-2xl font-semibold mb-4 md:flex-row">
							<div>{selectedData.position} @ </div>
							<NavLink
								to={selectedData.website}
								target="_blank"
								rel="noopener noreferrer"
								className=" text-highlighted text-shadow-yellowShadow font-normal hover:underline hover:font-normal"
							>
								{selectedData.company}
							</NavLink>
						</div>
						<div className="flex gap-2 text-sm font-thin mb-4 italic opacity-70">
							<SlCalender className="mt-[2px]" />
							{selectedData.date}
						</div>
						<ul className="list-square pl-5 text-base leading-relaxed text-gray-200 text-justify marker:text-highlighted">
							{selectedData.description.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</div>
				</motion.div>
			</Box>
		</div>
	);
};

export default ContentTabs;
