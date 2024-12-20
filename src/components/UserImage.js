import React from "react";
import { motion } from "framer-motion";

const UserImage = ({ imageSrc }) => {
	return (
		<motion.div
			className="relative h-96 w-96 p-10 "
			animate={{
				scale: [1, 1.1, 1],
				filter: ["grayscale(0)", "grayscale(1)", "grayscale(0)"],
			}}
			transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
		>
			<motion.img src={imageSrc} alt="User" className="rounded-md" />
		</motion.div>
	);
};

export default UserImage;
