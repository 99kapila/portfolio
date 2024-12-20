import { BrowserRouter } from "react-router-dom";
import { useRef, useState } from "react";
import { useIsVisible } from "./customHooks/useIsVisible";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TabsComponent from "./components/TabsComponent";
import ContentTabs from "./components/ContentTabs";
import workData from "./data/workData";
import educationData from "./data/educationData";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import FooterSection from "./components/FooterSection";
import "@fontsource/quicksand";

export default function App() {
	const [selectedTab, setSelectedTab] = useState("workExperience");
	const toggleTab = (tab) => setSelectedTab(tab);

	const heroRef = useRef();
	const aboutRef = useRef();
	const experienceRef = useRef();
	const skillsRef = useRef();
	// const projectsRef = useRef();
	const contactRef = useRef();

	const isHeroVisible = useIsVisible(heroRef);
	const isAboutVisible = useIsVisible(aboutRef);
	const isExperienceVisible = useIsVisible(experienceRef);
	const isSkillsVisible = useIsVisible(skillsRef);
	// const isProjectsVisible = useIsVisible(projectsRef);
	const isContactVisible = useIsVisible(contactRef);

	return (
		<BrowserRouter>
			{/* Navbar */}
			<div className="fixed w-full z-10">
				<Navbar />
			</div>

			{/* Parent container */}
			<div className="bg-slate-gradient flex flex-col w-full min-h-screen pb-10 overflow-x-hidden px-2">
				{/* Scrollable content wrapper */}
				<div className="flex flex-col w-full flex-grow overflow-y-auto gap-20 overflow-x-hidden">
					{/* Hero Section */}
					<div
						id="hero"
						ref={heroRef}
						className={`min-h-screen flex flex-col justify-center items-center pt-28 md:pt-20 transition-opacity ease-in-out duration-700 ${
							isHeroVisible ? "opacity-100" : "opacity-0"
						}`}
					>
						<HeroSection />
					</div>

					{/* About Section */}
					<div
						id="about"
						ref={aboutRef}
						className={`flex flex-col justify-center items-center transition-opacity ease-in-out duration-700 ${
							isAboutVisible ? "opacity-100" : "opacity-0"
						}`}
					>
						<AboutSection isVisible={isAboutVisible} />
					</div>

					{/* Experience and Education Section */}
					<div
						id="experience"
						ref={experienceRef}
						className={`w-full flex flex-col justify-center items-center  transition-opacity ease-in-out duration-700 ${
							isExperienceVisible ? "opacity-100" : "opacity-0"
						}`}
					>
						<TabsComponent
							selectedTab={selectedTab}
							onTabChange={toggleTab}
							isVisible={isExperienceVisible}
						/>

						{/* Tabs Content */}
						<div className="w-full md:h-64 max-w-4xl mx-auto mt-12">
							{selectedTab === "workExperience" && (
								<ContentTabs
									data={workData}
									isVisible={isExperienceVisible}
								/>
							)}
							{selectedTab === "education" && (
								<ContentTabs
									data={educationData}
									isVisible={isExperienceVisible}
								/>
							)}
						</div>
					</div>

					{/* Skills Section */}
					<div
						id="skills"
						ref={skillsRef}
						className={`flex flex-col justify-center items-center mt-28 transition-opacity ease-in-out duration-700 ${
							isSkillsVisible ? "opacity-100" : "opacity-0"
						}`}
					>
						<SkillsSection isVisible={isSkillsVisible} />
					</div>

					{/* Project Section */}
					{/* <div
						id="projects"
						ref={projectsRef}
						className={`flex flex-col justify-center items-center transition-opacity ease-in-out duration-700 ${
							isProjectsVisible ? "opacity-100" : "opacity-0"
						}`}
					>
						<ProjectSection />
					</div> */}

					{/* Footer Section */}
					<div
						id="contact"
						ref={contactRef}
						className={`flex flex-col justify-center items-center transition-opacity ease-in-out duration-700 ${
							isContactVisible ? "opacity-100" : "opacity-0"
						}`}
					>
						<FooterSection isVisible={isContactVisible} />
					</div>

					<div className="flex justify-center items-center w-full">
						<p className="text-sm text-gray-500">
							© Shivanshu Kapila. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</BrowserRouter>
	);
}
