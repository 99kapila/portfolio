import { Tabs, Tab } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work"; // Importing Work Icon
import SchoolIcon from "@mui/icons-material/School"; // Importing School Icon
import HeadingWithLine from "./HeadingWithLine";

const TabsComponent = ({ selectedTab, onTabChange }) => {
	return (
		<section className="w-full max-w-4xl mx-auto text-white">
			<HeadingWithLine heading="Experience & Education" />
			<div className="w-full flex justify-center mt-16">
				{/* Horizontal Tabs for Larger Screens */}
				<div className="hidden sm:flex w-full justify-center">
					<Tabs
						value={selectedTab}
						onChange={(e, newValue) => onTabChange(newValue)}
						aria-label="Tabs"
					>
						<Tab
							icon={<WorkIcon />}
							iconPosition="start"
							value="workExperience"
							className={`cursor-pointer px-6 py-3 text-center transition duration-200 sm:w-auto w-full mr-20 ${
								selectedTab === "workExperience"
									? "bg-button-gradient text-white shadow-lg"
									: "bg-transparent text-slate-300"
							}`}
						/>
						<Tab
							icon={<SchoolIcon />}
							iconPosition="start"
							value="education"
							className={`cursor-pointer px-6 py-3 text-center transition duration-200 sm:w-auto w-full ${
								selectedTab === "education"
									? "bg-button-gradient text-white shadow-lg"
									: "bg-transparent text-slate-300"
							}`}
						/>
					</Tabs>
				</div>

				{/* Vertical Tabs for Small Screens */}
				<div className="flex sm:hidden w-full justify-center">
					<Tabs
						value={selectedTab}
						onChange={(e, newValue) => onTabChange(newValue)}
						aria-label="Tabs"
						orientation="vertical"
						className="flex justify-center flex-col"
					>
						<Tab
							icon={<WorkIcon />}
							iconPosition="start"
							value="workExperience"
							className={`cursor-pointer px-6 py-3 text-center transition duration-200 w-full ${
								selectedTab === "workExperience"
									? "bg-button-gradient text-white shadow-lg"
									: "bg-transparent text-slate-300"
							}`}
						/>
						<Tab
							icon={<SchoolIcon />}
							iconPosition="start"
							value="education"
							className={`cursor-pointer px-6 py-3 text-center transition duration-200 w-full ${
								selectedTab === "education"
									? "bg-button-gradient text-white shadow-lg"
									: "bg-transparent text-slate-300"
							}`}
						/>
					</Tabs>
				</div>
			</div>
		</section>
	);
};

export default TabsComponent;
