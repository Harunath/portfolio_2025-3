"use client";
import React from "react";
import { motion } from "framer-motion";
import Skills from "../components/Skills";
// bg-[linear-gradient(90deg,_#000000_0%,_#333333_100%)] gradient

const About: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			transition={{ duration: 0.5 }}
			className="rounded-md shadow-md mx-auto mt-5">
			<div className="flex flex-col gap-y-4 lg:gap-y-0 lg:gap-x-8 items-center justify-center mb-6">
				{/* About Me Box */}
				<div className="w-full">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="flex items-center justify-center h-full w-full text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-blue-400 bg-clip-text text-transparent">
						About Me
					</motion.div>
				</div>

				{/* Content Box */}
				<div className="w-full space-y-6">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-lg text-gray-300">
						I graduated in{" "}
						<span className="text-blue-400 font-semibold">
							Computer Science
						</span>{" "}
						from{" "}
						<span className="text-blue-400 font-semibold">
							Sreenidhi Institute of Science and Technology
						</span>
						, where I built a strong foundation in{" "}
						<span className="text-blue-400 font-semibold">
							programming and problem-solving
						</span>
						. My education has equipped me with the{" "}
						<span className="text-blue-400 font-semibold">
							technical skills
						</span>{" "}
						and{" "}
						<span className="text-blue-400 font-semibold">
							analytical thinking
						</span>{" "}
						needed to excel in software development.
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						className="text-lg text-gray-300">
						With hands-on experience in{" "}
						<span className="text-blue-400 font-semibold">
							full-stack development
						</span>
						, I&apos;ve worked on projects ranging from{" "}
						<span className="text-blue-400 font-semibold">
							UPI applications
						</span>{" "}
						to{" "}
						<span className="text-blue-400 font-semibold">
							eCommerce platforms
						</span>
						. My work spans frontend and backend technologies, including{" "}
						<span className="text-blue-400 font-semibold">React</span>,{" "}
						<span className="text-blue-400 font-semibold">Next.js</span>, and{" "}
						<span className="text-blue-400 font-semibold">Express.js</span>. I
						have consistently delivered{" "}
						<span className="text-blue-400 font-semibold">
							robust and user-friendly solutions
						</span>
						.
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
						className="text-lg text-gray-300">
						Software development isn&apos;t just my profession—it&apos;s my{" "}
						<span className="text-blue-400 font-semibold">passion</span>. I love{" "}
						<span className="text-blue-400 font-semibold">coding</span> and
						continuously improving my skills. I thrive on turning{" "}
						<span className="text-blue-400 font-semibold">
							complex problems
						</span>{" "}
						into{" "}
						<span className="text-blue-400 font-semibold">
							elegant and efficient solutions
						</span>
						, always seeking new challenges to push my boundaries.
					</motion.p>
				</div>
			</div>
			<div>
				<Skills />
			</div>
		</motion.div>
	);
};

export default About;
