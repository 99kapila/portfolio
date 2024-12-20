import { useEffect, useState } from "react";

export function useIsVisible(ref) {
	const [hasBeenVisible, setHasBeenVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setHasBeenVisible(true);
			}
		});

		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [ref]);

	return hasBeenVisible;
}
