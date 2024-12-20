import { motion } from "framer-motion";
import React from "react";

const SkillsIcon = ({ skill, bgColor = "#ffffff4d" }) => {
	return (
		<motion.div
			whileHover={{
				scale: 1.05,
			}}
			className="relative flex items-center justify-center backdrop-blur-sm rounded-md p-2"
			style={{ backgroundColor: bgColor }}
		>
			<img
				src={skill}
				alt="Skill"
				className="w-8 h-8 transition-transform duration-300"
			/>
		</motion.div>
	);
};

export default SkillsIcon;
