import React, { useEffect, useState } from "react";
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
import { motion } from "framer-motion";
import Resume from "../assets/ShivanshuKapila_SoftwareDeveloper_Resume.pdf";

const SkillsSection = ({ isVisible }) => {
	const [animationTriggered, setAnimationTriggered] = useState(false);

	useEffect(() => {
		if (isVisible) {
			setAnimationTriggered(true);
		}
	}, [isVisible]);

	return (
		<section className="w-full max-w-4xl mx-auto text-white">
			<HeadingWithLine heading="Skills" />
			<motion.div
				initial={{ opacity: 0, x: -5 }}
				animate={{
					opacity: animationTriggered ? 1 : 0,
					x: animationTriggered ? 0 : -5,
				}}
				transition={{ duration: 1, ease: "easeInOut" }}
			>
				<div className="mb-4 mt-16 md:text-left text-center">
					Technologies and tools I Have Been Working With
				</div>
				<div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-8 py-4">
					<div className="flex flex-col items-center">
						<SkillsIcon
							skill={PythonLogo}
							bgColor="#3776ab1a"
							tooltip="Python"
						/>
						<p className="mt-2 text-sm">Python</p>
					</div>
					<div className="flex flex-col items-center">
						<SkillsIcon
							skill={JavaLogo}
							bgColor="#fef5e71a"
							tooltip="Java"
						/>
						<p className="mt-2 text-sm">Java</p>
					</div>
					<div className="flex flex-col items-center">
						<SkillsIcon
							skill={JSLogo}
							bgColor="#f0db4f1a"
							tooltip="JavaScript"
						/>
						<p className="mt-2 text-sm">JavaScript</p>
					</div>
					<div className="flex flex-col items-center">
						<SkillsIcon
							skill={TsLogo}
							bgColor="#007acc1a"
							tooltip="TypeScript"
						/>
						<p className="mt-2 text-sm">TypeScript</p>
					</div>
					<div className="flex flex-col items-center">
						<SkillsIcon
							skill={ReactLogo}
							bgColor="#61dafb1a"
							tooltip="React"
						/>
						<p className="mt-2 text-sm">React</p>
					</div>
					<div className="flex flex-col items-center">
						<SkillsIcon
							skill={VueLogo}
							bgColor="#41b8831a"
							tooltip="Vue"
						/>
						<p className="mt-2 text-sm">Vue</p>
					</div>
					<div className="flex flex-col items-center">
						<SkillsIcon
							skill={DjangoLogo}
							bgColor="#092e20a1"
							tooltip="Django"
						/>
						<p className="mt-2 text-sm">Django</p>
					</div>
					<div className="flex flex-col items-center">
						<SkillsIcon
							skill={NodeJsLogo}
							bgColor="#8cc84b1a"
							tooltip="Node.js"
						/>
						<p className="mt-2 text-sm">Node.js</p>
					</div>
					<div className="flex flex-col items-center">
						<SkillsIcon
							skill={ExpressLogo}
							bgColor="#ffffff"
							tooltip="Express"
						/>
						<p className="mt-2 text-sm">Express</p>
					</div>
					<div className="flex flex-col items-center">
						<SkillsIcon
							skill={TwLogo}
							bgColor="#38b2ac1a"
							tooltip="Tailwind CSS"
						/>
						<p className="mt-2 text-sm">Tailwind CSS</p>
					</div>
					<div className="flex flex-col items-center">
						<SkillsIcon
							skill={GitHubLogo}
							bgColor="#ffffff"
							tooltip="GitHub"
						/>
						<p className="mt-2 text-sm">GitHub</p>
					</div>
					<div className="flex flex-col items-center">
						<SkillsIcon
							skill={PostmanLogo}
							bgColor="#f5b2001a"
							tooltip="Postman"
						/>
						<p className="mt-2 text-sm">Postman</p>
					</div>
				</div>
				<div className="mt-6">
					<p className="mb-4 md:text-left text-center">
						If you'd like to explore more about my technical
						expertise and skills, feel free to{" "}
						<a
							href={Resume}
							className="text-highlighted text-shadow-yellowShadow"
							download="ShivanshuKapila_SoftwareDeveloper_Resume.pdf"
						>
							download my resume.
						</a>
					</p>
				</div>
			</motion.div>
		</section>
	);
};

export default SkillsSection;
