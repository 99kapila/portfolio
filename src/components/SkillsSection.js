import React from "react";
import HeadingWithLine from "./HeadingWithLine";
import SkillsIcon from "./SkillsIcon";
import JSLogo from "../assets/JS.svg";
import JavaLogo from "../assets/Java.svg";
import PythonLogo from "../assets/python.svg";
import ReactLogo from "../assets/react.svg";
import VueLogo from "../assets/vue.svg";
import TsLogo from "../assets/typescript.svg";
import TwLogo from "../assets/tailwindcss.svg";
import DjangoLogo from "../assets/django.svg";
import ExpressLogo from "../assets/ex.svg";
import PostmanLogo from "../assets/postman.svg";
import GitHubLogo from "../assets/github.svg";
import NodeJsLogo from "../assets/nodejs.svg";

const SkillsSection = () => {
	return (
		<div>
			<section className="w-full max-w-4xl mx-auto text-white">
				<HeadingWithLine heading="Stack & Skills" />
				<div className="mb-4 mt-16">
					Technologies and tools I Have Been Working With
				</div>
				<div className="flex flex-wrap justify-between gap-8 p-4">
					<SkillsIcon
						skill={PythonLogo}
						bgColor="#3776ab1a"
						tooltip="Python"
					/>
					<SkillsIcon
						skill={JavaLogo}
						bgColor="#fef5e71a"
						tooltip="Java"
					/>
					<SkillsIcon
						skill={JSLogo}
						bgColor="#f0db4f1a"
						tooltip="JavaScript"
					/>
					<SkillsIcon
						skill={TsLogo}
						bgColor="#007acc1a"
						tooltip="TypeScript"
					/>
					<SkillsIcon
						skill={ReactLogo}
						bgColor="#61dafb1a"
						tooltip="React"
					/>
					<SkillsIcon
						skill={VueLogo}
						bgColor="#41b8831a"
						tooltip="Vue"
					/>
					<SkillsIcon
						skill={DjangoLogo}
						bgColor="#092e20a1"
						tooltip="Django"
					/>
					<SkillsIcon
						skill={NodeJsLogo}
						bgColor="#8cc84b1a"
						tooltip="Node.js"
					/>
					<SkillsIcon
						skill={ExpressLogo}
						bgColor="#ffffff"
						tooltip="Express"
					/>
					<SkillsIcon
						skill={TwLogo}
						bgColor="#38b2ac1a"
						tooltip="Tailwind CSS"
					/>
					<SkillsIcon
						skill={GitHubLogo}
						bgColor="#ffffff"
						tooltip="GitHub"
					/>
					<SkillsIcon
						skill={PostmanLogo}
						bgColor="#f5b2001a"
						tooltip="Postman"
					/>
				</div>
				{/* Section for Resume */}
				<div className="mt-6">
					<p className="mb-4">
						If you'd like to explore more about my technical
						expertise and skills, feel free to{" "}
						<a
							href="/path/to/your/resume.pdf"
							className="text-blue-600 hover:underline"
							download="Shivanshu_Kapila_Resume.pdf"
						>
							download my resume
						</a>
						.
					</p>
				</div>
			</section>
		</div>
	);
};

export default SkillsSection;
