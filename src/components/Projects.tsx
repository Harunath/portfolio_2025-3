"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
const projects = [
	{
		title: "Bizz Network Platform",
		description: `● Developing a B2B business platform where professionals refer businesses, track referrals, and receive testimonials.  
			● Implemented NextAuth for secure authentication and SMTP for email verification.  
			● Designed a responsive and user-friendly interface with Tailwind CSS.  
			● Integrated PostgreSQL and Prisma for efficient data management and scalability.  
			● Added a payment gateway to support seamless transactions.  
			● Features weekly business events to enhance networking opportunities.  
			● Ongoing development with continuous improvements and feature enhancements.`,
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1742481298/Screenshot_2025-03-20_200351_ocrxy4.png",
		alt: "bizz-network-platform",
		link: "https://www.bizn.in/",
		gitLink: "https://github.com/Harunath/bizz-network",
	},
	{
		title: "GenieBucks App",
		description: `● Developed a robust financial management platform using Next.js 15 and Gmail authentication for secure, seamless access. 
			● Leveraged Prisma ORM with PostgreSQL to ensure efficient data handling and reliable transaction processing. 
			● Crafted a responsive, visually appealing UI with Tailwind CSS and Framer Motion, enhancing user engagement through smooth animations.
			● Integrated advanced expense tracking and data visualization features to empower users with actionable financial insights. 
			● Implemented the Google Gemini AI API to automate bill image scanning and transaction registration, reducing manual entry errors and streamlining expense documentation. `,
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1739544748/Screenshot_2024-12-26_211634_w07nfa.png",
		alt: "GenieBucks",
		link: "https://geniebucks.vercel.app/",
		gitLink: "https://github.com/Harunath/geniebucks",
	},

	{
		title: "Dev-Learners Platform",
		description: `● Architected a comprehensive LMS using Next.js, incorporating Next-Auth to establish secure, seamless user authentication.
		● Designed a responsive, modern UI with Tailwind CSS, ensuring optimal accessibility and consistent performance across devices.
		● Developed a scalable backend with PostgreSQL and Prisma ORM, streamlining data management and query efficiency.
		● Leveraged Recoil for dynamic state management, enhancing real-time interactivity and overall application responsiveness.
		● Integrated Cloudinary for efficient content management, optimizing media handling and reducing page load times by approximately 10%. `,
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1739544745/Screenshot_2025-02-14_202024_wp6y6k.png",
		alt: "Dev-Learners Platform",
		link: "https://dev-learners.vercel.app/",
		gitLink: "https://github.com/Harunath/dev-learner",
	},
	{
		title: "Rolan Plast Business Website",
		description: `● Developed a dynamic website for a plastic manufacturing company using React.js and Tailwind CSS.  
			● Designed a visually appealing and responsive UI to enhance user experience.  
			● Managed global state efficiently with Recoil for seamless data handling.  
			● Implemented smooth animations and transitions using Framer Motion to improve engagement.`,
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1739544749/Screenshot_2024-08-11_140022_zrltlt.png",
		alt: "rolan-plast-business-website",
		link: "https://rolanplast.netlify.app/",
		gitLink: "https://github.com/Harunath/polyplastic",
	},
	{
		title: "Data Viewer App",
		description: `● Built a MERN stack desktop PWA for secure and efficient data visualization.
			● Implemented cookie-based authentication for seamless user sessions and enhanced security.
			● Integrated Recharts and AG Charts for interactive data visualization and insightful analytics.
			● Designed a scalable backend with Prisma ORM and PostgreSQL, ensuring efficient data management.
			● Utilized Turbo Repo for a modular codebase and streamlined development workflows.`,
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1742408726/Screenshot_2025-03-19_235357_xh88d6.png",
		alt: "data-viewer-app",
		link: "https://data-viewer-app66.vercel.app/",
		gitLink: "https://github.com/Harunath/GS060699_Harunath_Eskuri",
	},
	{
		title: "SimpleUPI App",
		description: `● Engineered a secure digital payment solution using Next.js, integrating JWT-based authentication for user registration and login.
			● Developed a scalable backend architecture with Prisma ORM and PostgreSQL, ensuring reliable transaction management.
			● Implemented core functionalities including fund transfers, deposits, and real-time balance monitoring for seamless user experience.
			● Utilized Turbo repo to streamline development workflows and maintain a modular codebase.`,
		image:
			"https://res.cloudinary.com/degrggosz/image/upload/v1739544743/Screenshot_2024-08-11_135844_catnsm.png",
		alt: "Paytm UPI Platform",
		link: "https://simpleupi.vercel.app/",
		gitLink: "https://github.com/Harunath/simpleUPI",
	},
];

const Projects = () => {
	return (
		<section className="py-12">
			<div className="container mx-auto sm:px-4">
				<h2 className="text-3xl font-bold text-center text-blue-700 mb-8">
					Projects
				</h2>

				<div className="flex flex-col gap-4">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							className="bg-gray-900 flex flex-col gap-x-2 border border-blue-900 shadow-lg transition-all p-4 rounded"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}>
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
									<div className="flex items-center justify-between gap-x-4">
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
											<IoLogoGithub className="h-5 w-5 h-6 w-6" />
										</a>
									</div>
								</div>
								<div className="hidden sm:block">
									<p className="mt-2 block text-blue-700 hover:text-blue-500">
										Description
									</p>
									<p>
										{/* {selectedProject === index ?*/}
										{project.description.split("\n").map((line, i) => (
											<span key={i}>
												{line}
												<br />
											</span>
										))}
										{/* : `${project.description.substring(0, 100)}...`} */}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
