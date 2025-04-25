"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const githubUrl = "https://github.com/harunath";
const linkedinUrl = "https://linkedin.com/in/harunath";
function GitLinkedin() {
	const [hoveredIcon, setHoveredIcon] = useState<boolean | null>(false);

	return (
		<AnimatePresence>
			<motion.div
				initial={{
					width: 44,
					transition: { duration: 0.3 },
				}}
				whileHover={{
					width: 120,
					transition: { duration: 0.3 },
				}}
				exit={{
					width: 44,
					transition: { duration: 0.3 },
				}}
				style={{
					overflow: "hidden",
				}}
				className=" fixed z-20 right-0 lg:right-[100px] top-3/4 h-fit overflow-hidden rounded hover:bg-blue-200 m-1"
				onMouseEnter={() => setHoveredIcon(true)}
				onMouseLeave={() => setHoveredIcon(false)}>
				<motion.a
					href={githubUrl}
					target="_blank"
					aria-label="GitHub"
					className="flex items-center rounded border-2 border-transparent hover:bg-blue-300 hover:shadow-lg hover:text-white duration-200">
					<motion.div className="p-2 rounded bg-gray-300">
						<FaGithub size={24} style={{ color: "#333" }} />
					</motion.div>
					{hoveredIcon && <span className="ml-2">GitHub</span>}
				</motion.a>
				<motion.a
					href={linkedinUrl}
					target="_blank"
					aria-label="LinkedIn"
					className="flex items-center rounded border-2 border-transparent hover:bg-blue-300 hover:shadow-lg hover:text-white duration-200">
					<motion.div className="p-2 rounded bg-gray-300">
						<FaLinkedin size={24} style={{ color: "#0077b5" }} />
					</motion.div>

					{hoveredIcon && <span className="ml-2">LinkedIn</span>}
				</motion.a>
			</motion.div>
		</AnimatePresence>
	);
}

export default GitLinkedin;
