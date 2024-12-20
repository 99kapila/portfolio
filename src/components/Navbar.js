import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";

const Navbar = () => {
	const [offset, setOffset] = useState(-100);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setOffset(-175); // Adjust for smaller screens
			} else {
				setOffset(-100); // Default offset for larger screens
			}
		};

		handleResize(); // Set initial offset based on screen size
		window.addEventListener("resize", handleResize); // Update offset on screen resize

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<nav className="bg-slate-gradient border-b-2 border-white fixed top-0 z-20 w-full">
			<div className="flex flex-col gap-4 items-center justify-between w-full px-4 py-4 md:flex-row md:px-20">
				<Link
					to="hero"
					spy={true}
					smooth={true}
					offset={offset}
					className="text-white text-xl font-bold cursor-pointer hover:font-normal hover:duration-500 hover:ease-in-out hover:text-highlighted hover:text-shadow-yellowShadow"
				>
					Shivanshu Kapila
				</Link>
				<div className="flex gap-4">
					<Link
						to="about"
						spy={true}
						smooth={true}
						offset={offset}
						className="text-white hover:font-normal cursor-pointer hover:duration-500 hover:ease-in-out hover:text-highlighted hover:text-shadow-yellowShadow"
					>
						About
					</Link>
					<Link
						to="experience"
						spy={true}
						smooth={true}
						offset={offset}
						className="text-white hover:font-normal cursor-pointer hover:duration-500 hover:ease-in-out hover:text-highlighted hover:text-shadow-yellowShadow"
					>
						Experience
					</Link>
					<Link
						to="skills"
						spy={true}
						smooth={true}
						offset={offset}
						className="text-white hover:font-normal cursor-pointer hover:duration-500 hover:ease-in-out hover:text-highlighted hover:text-shadow-yellowShadow"
					>
						Skills
					</Link>
					<Link
						to="contact"
						spy={true}
						smooth={true}
						offset={offset}
						className="text-white hover:font-normal cursor-pointer hover:duration-500 hover:ease-in-out hover:text-highlighted hover:text-shadow-yellowShadow"
					>
						Contact
					</Link>
				</div>
				<div className="flex gap-4">
					<Link
						to="contact"
						spy={true}
						smooth={true}
						offset={offset}
						className="text-white hover:font-normal cursor-pointer hover:duration-500 hover:ease-in-out hover:text-highlighted hover:text-shadow-yellowShadow"
					>
						<EmailIcon />
					</Link>
					<NavLink
						to="https://www.linkedin.com/in/shivanshu-kapila/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:font-normal cursor-pointer hover:duration-500 hover:ease-in-out hover:text-highlighted hover:text-shadow-yellowShadow"
					>
						<LinkedInIcon />
					</NavLink>
					<NavLink
						to="https://github.com/99kapila"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:font-normal cursor-pointer hover:duration-500 hover:ease-in-out hover:text-highlighted hover:text-shadow-yellowShadow"
					>
						<GitHubIcon />
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
