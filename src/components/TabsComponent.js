import { Tabs, Tab } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import HeadingWithLine from "./HeadingWithLine";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TabsComponent = ({ selectedTab, onTabChange, isVisible }) => {
	const [animationTriggered, setAnimationTriggered] = useState(false);

	useEffect(() => {
		if (isVisible) {
			setAnimationTriggered(true);
		}
	}, [isVisible]);

	return (
		<section className="w-full max-w-4xl mx-auto text-white">
			<HeadingWithLine heading="Experience" />
			<div className="w-full flex justify-center mt-16">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: animationTriggered ? 1 : 0,
					}}
					transition={{ duration: 1, ease: "easeInOut" }}
				>
					<div className="flex w-full justify-center">
						<Tabs
							value={selectedTab}
							onChange={(e, newValue) => onTabChange(newValue)}
							aria-label="Tabs"
							className="transition-all ease-in-out duration-500"
							variant="fullWidth"
						>
							<Tab
								icon={<WorkIcon />}
								iconPosition="start"
								value="workExperience"
								className={`cursor-pointer px-6 py-3 text-center transition duration-200 w-full sm:w-1/2 ${
									selectedTab === "workExperience"
										? "bg-button-gradient text-white shadow-lg"
										: "bg-transparent text-slate-300"
								}`}
							/>
							<Tab
								icon={<SchoolIcon />}
								iconPosition="start"
								value="education"
								className={`cursor-pointer px-6 py-3 text-center transition duration-200 w-full sm:w-1/2 ${
									selectedTab === "education"
										? "bg-button-gradient text-white shadow-lg"
										: "bg-transparent text-slate-300"
								}`}
							/>
						</Tabs>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TabsComponent;
