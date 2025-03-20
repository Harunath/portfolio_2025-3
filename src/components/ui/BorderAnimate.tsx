"use client";

import { motion, useTime, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface BorderAnimateProps {
	borderColor?: string;
	children: ReactNode;
}

export default function BorderAnimate({ children }: BorderAnimateProps) {
	const time = useTime();
	const rotate = useTransform(time, [0, 6000], [0, 360], {
		clamp: false,
	});
	const rotateTransformation = useTransform(rotate, (r) => {
		return `conic-gradient(from ${r}deg,#FF4F79, #C850C0, #40C980, #408CFF, #7D00FF)`;
	});
	return (
		<div className="relative w-full h-auto flex items-center justify-center p-4 rounded-full">
			<motion.div
				className=" absolute inset-3 rounded-full"
				style={{
					background: rotateTransformation,
				}}></motion.div>

			<div className="relative bg-white w-full h-full  rounded-full">
				{children}
			</div>
		</div>
	);
}
