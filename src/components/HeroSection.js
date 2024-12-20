import React from "react";
import { motion } from "framer-motion";
import profilePicture from "../assets/ProfilePicture.jpeg";
import UserImage from "./UserImage";

const HeroSection = () => {
	return (
		<section className="flex flex-col items-center justify-center w-full gap-8 md:gap-0 lg:gap-0 px-4 sm:px-8">
			<UserImage imageSrc={profilePicture} alt="Shivanshu Kapila" />

			<div className="flex flex-col items-center md:items-start">
				<div className="space-y-3 text-center md:text-center">
					<h2 className="text-xl text-white">Hi,</h2>
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
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
					<p className="flex flex-col max-w-xs sm:max-w-sm md:max-w-md text-xl text-white tracking-wider">
						<span>Toronto, Canada-based</span>
						<span className=" text-highlighted text-shadow-yellowShadow">
							Full Stack Developer.
						</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
