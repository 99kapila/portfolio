import React from "react";
import { motion } from "framer-motion";
import profilePicture from "../assets/CartoonPicture.jpg";
import TiltImage from "./TiltImage.js";

const HeroSection = () => {
	return (
		<section className="flex flex-col items-center justify-center w-full md:flex-row gap-8 md:gap-12 lg:gap-16 px-4 sm:px-8">
			{/* Cartoon Profile Picture */}
			<TiltImage
				src={profilePicture}
				alt="Shivanshu Kapila"
				className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64"
			/>

			{/* Text Content */}
			<div className="flex flex-col items-center md:items-start">
				<div className="space-y-3 text-center md:text-left">
					<h2 className="text-lg md:text-xl lg:text-2xl text-white">
						Hi,
					</h2>
					<h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
						I'm Shivanshu Kapila
						<motion.span
							initial={{ opacity: 1 }}
							animate={{ opacity: [1, 0] }}
							transition={{
								duration: 0.5,
								repeat: Infinity,
								repeatType: "reverse",
							}}
							className="ml-2"
						>
							|
						</motion.span>
					</h1>
					<p className="max-w-xs sm:max-w-sm md:max-w-md text-sm md:text-base lg:text-lg text-white tracking-wider">
						Toronto, Canada-based Full Stack Developer.
					</p>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
