"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const githubUrl = "https://github.com/harunath";
const linkedinUrl = "https://linkedin.com/in/harunath";
function GitLinkedin() {
	const [hoveredIcon, setHoveredIcon] = useState<string | null>("");
	const handleIconHover = (iconName: string) => {
		setHoveredIcon(iconName);
	};

	return (
		<motion.div
			initial={{ opacity: 0, width: "40px" }}
			animate={{ opacity: 1, width: "auto" }}
			transition={{ duration: 0.8 }}
			style={{
				overflow: "hidden",
			}}
			className=" fixed z-20 right-0 lg:right-[100px] top-3/4 h-fit overflow-hidden hover:bg-blue-200 m-1">
			<motion.a
				href={githubUrl}
				target="_blank"
				aria-label="GitHub"
				className={`flex items-center rounded border-2 border-transparent hover:bg-blue-300 hover:text-white duration-200 ${
					hoveredIcon === "github" ? "shadow-lg" : ""
				}`}
				onMouseEnter={() => handleIconHover("github")}
				onMouseLeave={() => handleIconHover("")}>
				<motion.div
					className={`p-2 rounded bg-gray-300 ${
						hoveredIcon === "github" ? "shadow-lg" : ""
					}`}>
					<FaGithub size={24} style={{ color: "#333" }} />
				</motion.div>
				{hoveredIcon && <span className="ml-2">GitHub</span>}
			</motion.a>
			<motion.a
				href={linkedinUrl}
				target="_blank"
				aria-label="LinkedIn"
				className={`flex items-center rounded border-2 border-transparent hover:bg-blue-300 hover:text-white duration-200 ${
					hoveredIcon === "linkedin" ? "shadow-lg" : ""
				}`}
				onMouseEnter={() => handleIconHover("linkedin")}
				onMouseLeave={() => handleIconHover("")}>
				<motion.div
					className={`p-2 rounded bg-gray-300 ${
						hoveredIcon === "linkedin" ? "shadow-lg" : ""
					}`}>
					<FaLinkedin size={24} style={{ color: "#0077b5" }} />
				</motion.div>
				{hoveredIcon && <span className="ml-2">LinkedIn</span>}
			</motion.a>
		</motion.div>
	);
}

export default GitLinkedin;
