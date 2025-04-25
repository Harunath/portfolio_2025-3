"use client";
import {
	motion,
	AnimatePresence,
	useInView,
	useAnimation,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

interface ProjectType {
	title: string;
	description: string;
	image: string;
	alt: string;
	link: string;
	gitLink: string;
}

const EachProject = ({ project }: { project: ProjectType }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const [extend, setExtend] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const [height, setHeight] = useState<number | "auto">(0);

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("animate");
		} else {
			setExtend(false);
			mainControls.start("initial");
		}
	}, [isInView]);

	useEffect(() => {
		if (contentRef.current) {
			setHeight(extend ? contentRef.current.scrollHeight : 50); // Adjust 60 to height of 2 lines
		}
	}, [extend]);
	const ProjectVarients = {
		initial: {
			x: "-30vw",
			scale: 0.5,
			opacity: 0.1,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
		animate: {
			x: 0,
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: "easeIn",
			},
		},
	};
	return (
		<motion.div
			ref={ref}
			variants={ProjectVarients}
			initial="initial"
			animate={mainControls}
			className="bg-gray-900  lg:w-[70%] flex flex-col items-center gap-x-2 border border-blue-900 shadow-lg transition-all p-4 rounded">
			{/* Project Image - Click to Expand */}
			<a href={project.link} target="_blank" rel="noopener noreferrer">
				<Image
					src={project.image}
					alt={project.alt}
					className="max-w-full h-fit cursor-pointer"
					width={1080}
					height={700}
				/>
			</a>

			{/* Project Overview */}
			<div className="p-6">
				<div className="flex justify-between items-center">
					<h3 className="sm:text-xl md:text-2xl font-semibold text-blue-700">
						{project.title}
					</h3>
					{/* View Project Link */}
					<div className="flex items-center justify-between gap-x-4 ml-4">
						<a
							target="_blank"
							href={project.link}
							className="block text-blue-700 hover:text-blue-700">
							<FaExternalLinkAlt className="h-4 w-4 md:h-5 md:w-5" />
						</a>
						<a
							target="_blank"
							href={project.gitLink}
							className="block text-blue-700 hover:text-blue-700">
							<IoLogoGithub className="h-6 w-6" />
						</a>
					</div>
				</div>
				<div className="hidden sm:block">
					<p className="mt-2 block text-blue-700 hover:text-blue-500">
						Description
					</p>
					<div className="relative">
						<AnimatePresence initial={false}>
							<motion.div
								style={{ overflow: "hidden" }}
								animate={{ height }}
								transition={{ duration: 0.5, ease: "easeInOut" }}>
								<div ref={contentRef}>
									{project.description.split("\n").map((line, i) => (
										<span key={i}>
											{line}
											<br />
										</span>
									))}
								</div>
							</motion.div>
						</AnimatePresence>

						<div className="flex items-center justify-center">
							<motion.button
								onClick={() => setExtend((prev) => !prev)}
								className="flex gap-x-2 items-center text-center mt-2 text-blue-500 bg-blue-500/20 px-4 rounded-full">
								{extend ? <p>Collapse</p> : <p>Expand</p>}
								{extend ? <BiUpArrow /> : <BiDownArrow />}
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default EachProject;
