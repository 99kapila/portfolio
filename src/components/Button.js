import React from "react";
import { motion } from "framer-motion";

const Button = ({ onClick, buttonContent, className, icon: Icon }) => {
	return (
		<motion.button
			onClick={onClick}
			className={`${className} flex items-center justify-center gap-2 transition-all hover:bg-orange-400`}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			{Icon && <Icon className="w-6 h-6" />}
			{buttonContent}
		</motion.button>
	);
};

export default Button;
