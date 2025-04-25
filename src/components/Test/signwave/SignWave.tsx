"use client";

import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const generateSineWavePath = (
	width: number,
	height: number,
	amplitude = 20,
	frequency = 0.02,
	phase = 0
) => {
	const step = 10;
	let path = `M 0 ${height / 2}`;

	for (let x = 0; x <= width; x += step) {
		const y = height / 2 + amplitude * Math.sin(frequency * x + phase);
		path += ` L ${x} ${y}`;
	}

	return path;
};

export default function SignWave() {
	const [phase, setPhase] = useState(0);
	const [dimensions, setDimensions] = useState({ width: 800, height: 200 });
	const containerRef = useRef<HTMLDivElement>(null);

	// Resize observer to track parent size
	useEffect(() => {
		const observer = new ResizeObserver((entries) => {
			for (const entry of entries) {
				const { width, height } = entry.contentRect;
				setDimensions({ width, height });
			}
		});

		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => observer.disconnect();
	}, []);

	useAnimationFrame(() => {
		setPhase((prev) => prev + 0.05);
	});

	const path = generateSineWavePath(
		dimensions.width,
		dimensions.height,
		20,
		0.02,
		phase
	);

	return (
		<div
			ref={containerRef}
			className="w-full h-full bg-black flex items-center justify-center overflow-hidden">
			<svg
				width="100%"
				height="100%"
				viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
				preserveAspectRatio="none">
				<motion.path
					d={path}
					stroke="white"
					strokeWidth="3"
					fill="none"
					animate={{ d: path }}
					transition={{ duration: 0.01, ease: "linear" }}
				/>
			</svg>
		</div>
	);
}
