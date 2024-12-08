import projectsData from "../data/projectsData";
import Carousel3D from "./Carousel3D";
import HeadingWithLine from "./HeadingWithLine";

const ProjectSection = () => {
	return (
		<section className="w-full max-w-4xl mx-auto text-white">
			<HeadingWithLine heading="Projects" />
			<div className="mt-24">
				<Carousel3D projects={projectsData} />
			</div>
		</section>
	);
};

export default ProjectSection;
