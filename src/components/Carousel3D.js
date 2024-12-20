import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel3D.css";

const CustomPrevArrow = ({ onClick }) => (
	<button
		className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full flex justify-center items-center hover:bg-orange-500 transition"
		onClick={onClick}
	>
		<FaArrowLeft />
	</button>
);

const CustomNextArrow = ({ onClick }) => (
	<button
		className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full flex justify-center items-center hover:bg-orange-500 transition"
		onClick={onClick}
	>
		<FaArrowRight />
	</button>
);

const Carousel3D = ({ projects }) => {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
		arrows: true,
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					centerPadding: "0px",
				},
			},
			{
				breakpoint: 600,
				settings: {
					centerPadding: "0px",
				},
			},
		],
	};

	return (
		<div className="slider-container max-w-screen-lg mx-auto px-20 sm:px-20 md:px-40 overflow-hidden">
			<Slider {...settings}>
				{projects.map((project, index) => (
					<div
						key={index}
						className="project-card group relative w-full sm:w-11/12 md:w-10/12 mx-auto"
					>
						<img
							src={project.img}
							alt={project.name}
							className="project-img w-full h-[20rem] sm:h-[24rem] md:h-[28rem] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
						/>
						<div className="project-info absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<h3 className="project-name text-sm sm:text-base md:text-lg font-semibold">
								{project.name}
							</h3>
							<p className="project-review text-xs sm:text-sm md:text-base">
								{project.review}
							</p>
							<a
								href={project.link}
								target="_blank"
								rel="noopener noreferrer"
								className="project-link mt-2 inline-block text-blue-400 hover:underline"
							>
								View Project
							</a>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel3D;
