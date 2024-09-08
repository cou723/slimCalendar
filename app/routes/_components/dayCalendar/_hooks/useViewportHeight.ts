import { useEffect, useState } from "react";

export const useViewportHeight = () => {
	const [pixelHeight, setPixelHeight] = useState<number>(0);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const updateHeight = () => setPixelHeight(window.innerHeight);

			updateHeight(); // 初期値を設定
			window.addEventListener("resize", updateHeight);
			return () => window.removeEventListener("resize", updateHeight);
		}
	}, []);

	return pixelHeight;
};
