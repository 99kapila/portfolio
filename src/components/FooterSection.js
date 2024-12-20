import React from "react";
import HeadingWithLine from "./HeadingWithLine";
import profilePicture from "../assets/CartoonPicture.jpg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ContactUsForm = ({ isVisible }) => {
	const [animationTriggered, setAnimationTriggered] = useState(false);

	useEffect(() => {
		if (isVisible) {
			setAnimationTriggered(true);
		}
	}, [isVisible]);

	return (
		<section className="w-full max-w-4xl mx-auto text-white ">
			<HeadingWithLine heading="Contact Me" />

			<div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-16">
				<div className="rounded-md overflow-hidden md:h-64 md:w-64 h-40 w-40">
					<img src={profilePicture} alt="Shivanshu Kapila" />
				</div>

				<motion.div
					initial={{ opacity: 0, x: -5 }}
					animate={{
						opacity: animationTriggered ? 1 : 0,
						x: animationTriggered ? 0 : -5,
					}}
					transition={{ duration: 1, ease: "easeInOut" }}
					className="w-full md:w-1/2"
				>
					<div className="space-y-4 md:text-left text-center">
						<div>
							<p className="text-lg font-semibold">Phone:</p>
							<p className="text-base">+1 (647) 889-6662</p>
						</div>

						<div>
							<p className="text-lg font-semibold">Email:</p>
							<p className="text-base">shivanshu38@gmail.com</p>
						</div>

						<div className="border-t border-gray-600 mt-4 pt-4">
							<p className="text-sm text-gray-400">
								Feel free to reach out for collaborations,
								queries, or just to connect. I would love to
								hear from you!
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactUsForm;
