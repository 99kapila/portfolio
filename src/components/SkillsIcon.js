import { motion } from "framer-motion";
import React, { useState } from "react";

const SkillsIcon = ({ skill, bgColor = "#ffffff4d", tooltip }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			whileHover={{
				scale: 1.05,
			}}
			className="relative flex items-center justify-center backdrop-blur-sm rounded-md p-2"
			style={{ backgroundColor: bgColor }}
			onHoverStart={() => setIsHovered(true)}
			onHoverEnd={() => setIsHovered(false)}
		>
			{isHovered && tooltip && (
				<div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm bg-gray-800 text-white p-2 rounded-md">
					{tooltip}
				</div>
			)}
			<img
				src={skill}
				alt="Skill"
				className="w-8 h-8 transition-transform duration-300"
			/>
		</motion.div>
	);
};

export default SkillsIcon;
