import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TabsComponent from "./components/TabsComponent";
import VerticalTabs from "./components/VerticalTabs";
import workData from "./data/workData";
import educationData from "./data/educationData";
import Button from "./components/Button";
import AboutSection from "./components/AboutSection";
import TelegramIcon from "@mui/icons-material/Telegram";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";

export default function App() {
	const [selectedTab, setSelectedTab] = useState("workExperience");

	const toggleTab = (tab) => {
		setSelectedTab(tab);
	};

	return (
		<BrowserRouter>
			{/* Navbar */}
			<div className="fixed w-full z-10">
				<Navbar />
			</div>

			{/* Parent container */}
			<div className="bg-slate-gradient flex flex-col w-full min-h-screen pb-10 overflow-x-hidden px-10">
				{/* Scrollable content wrapper */}
				<div className="flex flex-col w-full flex-grow overflow-y-auto gap-20">
					{/* Hero Section */}
					<div className="min-h-screen flex flex-col justify-center items-center pt-24 md:pt-32">
						<HeroSection />
						<Button
							className="bg-button-gradient w-40 py-3 border-2 border-white text-white rounded-lg shadow-md mt-10"
							buttonContent="Get in touch"
							icon={TelegramIcon}
						/>
					</div>

					{/* About Section */}
					<div className="flex flex-col justify-center items-center mt-16">
						<AboutSection />
					</div>

					{/* Experience and Education Section */}
					<div className="w-full flex flex-col justify-center items-center mt-16">
						{/* Tabs Navigation */}
						<TabsComponent
							selectedTab={selectedTab}
							onTabChange={toggleTab}
						/>

						{/* Tabs Content */}
						<div className="w-full md:h-64 max-w-4xl mx-auto mt-12">
							{selectedTab === "workExperience" && (
								<VerticalTabs data={workData} />
							)}
							{selectedTab === "education" && (
								<VerticalTabs data={educationData} />
							)}
						</div>
					</div>

					<div className="flex flex-col justify-center items-center mt-16">
						<SkillsSection />
					</div>

					<div className="flex flex-col justify-center items-center mt-16">
						<ProjectSection />
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}
