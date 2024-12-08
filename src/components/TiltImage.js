import React, { useState } from "react";

const TiltImage = ({ src, alt, className }) => {
	const [styles, setStyles] = useState({
		transform: "rotateX(0deg) rotateY(0deg)",
		boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
	});

	const handleMouseMove = (e) => {
		const { left, top, width, height } =
			e.currentTarget.getBoundingClientRect();

		const x = e.clientX - left;
		const y = e.clientY - top;

		const maxTilt = 30; // Maximum tilt angle in degrees
		const rotateX = (y / height - 0.5) * maxTilt; // Range: -15 to +15
		const rotateY = (x / width - 0.5) * -maxTilt; // Range: -15 to +15

		// Calculate shadow based on tilt
		const shadowX = (rotateY / maxTilt) * 20; // Adjust multiplier for shadow intensity
		const shadowY = (rotateX / maxTilt) * 20;
		const shadowBlur = 30;
		const shadowOpacity = 0.3;

		setStyles({
			transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
			boxShadow: `${shadowX}px ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowOpacity})`,
		});
	};

	const handleMouseLeave = () => {
		setStyles({
			transform: "rotateX(0deg) rotateY(0deg)",
			boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
		});
	};

	return (
		<div
			className={`relative perspective-1000 transition-transform duration-300 ${className}`}
			style={{
				transformStyle: "preserve-3d",
				transition: "transform 0.1s ease-out, box-shadow 0.1s ease-out",
			}}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			<img
				src={src}
				alt={alt}
				className="w-full h-full object-cover rounded-md"
				style={{ ...styles }}
			/>
			{/* Optional: Adding a subtle inner shadow for depth */}
			<div
				className="absolute inset-0 rounded-md"
				style={{
					pointerEvents: "none",
					boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.1)",
				}}
			></div>
		</div>
	);
};

export default TiltImage;
