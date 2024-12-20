import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeadingWithLine from "./HeadingWithLine";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

const AboutSection = ({ isVisible }) => {
	const [animationTriggered, setAnimationTriggered] = useState(false);

	useEffect(() => {
		if (isVisible) {
			setAnimationTriggered(true);
		}
	}, [isVisible]);

	return (
		<section className="w-full max-w-4xl mx-auto text-white">
			<HeadingWithLine heading="About Me" />

			<div className="flex flex-col items-center gap-8 mt-16">
				<div className="flex flex-col items-center gap-8">
					<motion.div
						initial={{ opacity: 0, x: -5 }}
						animate={{
							opacity: animationTriggered ? 1 : 0,
							x: animationTriggered ? 0 : -5,
						}}
						transition={{ duration: 1, ease: "easeInOut" }}
					>
						<p className="text-lg text-justify">
							I’m based in Toronto, Canada, and have over 3 years
							of experience as a Full Stack Developer. While I
							enjoy building software, life for me is about more
							than just coding.
						</p>
						<p className="mt-4 text-lg text-justify">
							I’m passionate about staying active and spend time
							at the gym whenever I can. Chess is one of my
							favorite ways to challenge my mind, and I love
							exploring new ideas and trends, whether in
							technology or everyday life. I believe in continuous
							growth.
						</p>
						<p className="mt-4 text-lg text-justify">
							Spending time with family and friends is a big part
							of what keeps me grounded and happy. Whether it’s
							sharing meals, celebrating milestones, or just
							having meaningful conversations, I cherish the
							connections that bring love and laughter into my
							life.
						</p>
						<p className="mt-4 text-lg text-justify">
							If you’d like to learn more about my professional
							journey, feel free to check out my resume below.
						</p>
					</motion.div>

					<div>
						<motion.a
							href="/ShivanshuKapila_SoftwareDeveloper_Resume.pdf"
							download="ShivanshuKapila_SoftwareDeveloper_Resume.pdf"
							className="bg-button-gradient w-40 py-3 border-2 border-white text-white rounded-lg shadow-md mt-10 flex items-center justify-center"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<TextSnippetIcon className="mr-2" /> Resume
						</motion.a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
