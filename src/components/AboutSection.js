import HeadingWithLine from "./HeadingWithLine";
import profilePicture from "../assets/ProfilePicture.jpeg";
import TiltImage from "./TiltImage";
import Button from "./Button";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

const AboutSection = () => {
	return (
		<section className="w-full max-w-4xl mx-auto text-white">
			<HeadingWithLine heading="About Me" />

			<div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-24">
				{/* About Text */}
				<div className="flex-1">
					<div>
						<p className="text-lg leading-relaxed">
							I’m a Full Stack Developer based in Toronto, Canada,
							with over 3+ years of experience in software
							development. I specialize in building scalable web
							applications using modern frameworks.
						</p>
						<p className="mt-4 text-lg leading-relaxed">
							Outside of coding, I’m passionate about fitness and
							chess, and I’m always exploring the latest in tech
							trends.
						</p>
					</div>
					<div>
						<Button
							className="bg-button-gradient w-40 py-3 border-2 border-white text-white rounded-lg shadow-md mt-10"
							buttonContent="Resume"
							icon={TextSnippetIcon}
						/>
					</div>
				</div>

				{/* Profile Picture */}
				<TiltImage
					src={profilePicture}
					alt="Shivanshu Kapila"
					className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-sm overflow-hidden"
				/>
			</div>
		</section>
	);
};

export default AboutSection;
