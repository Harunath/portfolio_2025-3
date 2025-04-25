import React from "react";
import { FaCheck } from "react-icons/fa";
import InViewUp from "./animations/InViewUp";

const Experience: React.FC = () => {
	return (
		<div className="mt-5">
			<div className="flex flex-col items-center justify-between mx-auto">
				{/* Header */}
				<div className="flex justify-center items-center w-full h-full text-center lg:text-left mb-4 lg:mb-8">
					<InViewUp>
						<h1 className="text-3xl font-extrabold text-blue-700">
							Experience
						</h1>
					</InViewUp>
				</div>

				{/* Experience Details */}
				<div className="w-full mx-auto space-y-8">
					{/* Freelance Experience */}
					<InViewUp>
						<div className="p-6 rounded-lg shadow-md border border-blue-900">
							<h2 className="text-lg sm:text-2xl font-bold text-blue-700 mb-2">
								Full-Stack Developer |{" "}
								<span className="text-blue-700">Freelance</span>
							</h2>
							<div className="md:text-lg mb-1">
								<p className="flex">
									<span>
										<FaCheck className="w-3 md:w-4 mr-2 text-green-500" />
									</span>
									&nbsp; Orchestrated the development of three sophisticated web
									projects utilizing NextAuth for secure user authentication,
									Framer Motion for dynamic, engaging animations, and PostgreSQL
									with Prisma ORM for robust database management, yielding
									modest yet tangible performance enhancements.
								</p>

								<p className="flex">
									<span>
										<FaCheck className="w-3 md:w-4 mr-2 text-green-500" />
									</span>
									&nbsp; Integrated Cloudinary for seamless image and video
									asset management, contributing to an approximate 20%
									improvement in media delivery efficiency.{" "}
								</p>
								<p className="flex">
									<span>
										<FaCheck className="w-3 md:w-4 mr-2 text-green-500" />
									</span>
									&nbsp; Strategically optimized and enhanced existing client
									websites, driving a measurable 15–25% increase in overall
									performance and user engagement.
								</p>
								<p className="flex">
									<span>
										<FaCheck className="w-3 md:w-4 mr-2 text-green-500" />
									</span>
									&nbsp; Employed cutting-edge state management and security
									protocols to ensure scalable, resilient, and
									industry-compliant web solutions.
								</p>
							</div>
						</div>
					</InViewUp>
					{/* Aimlabs Experience */}
					<InViewUp>
						<div className="p-6 rounded-lg shadow-md border border-blue-900">
							<h2 className="text-lg md:text-2xl font-bold text-blue-700 mb-2">
								Software Developer |{" "}
								<span className="text-blue-700">Aimlabs</span>
							</h2>
							<p className="md:text-lg mb-1">
								<span className="text-blue-700 font-semibold">
									November 2022 - October 2023
								</span>
							</p>
							<div className="md:text-lg mb-1">
								<p className="flex">
									<span>
										<FaCheck className="w-3 md:w-4 mr-2 text-green-500" />
									</span>
									&nbsp; Orchestrated the development of three sophisticated web
									projects utilizing NextAuth for secure user authentication,
									Framer Motion for dynamic, engaging animations, and PostgreSQL
									with Prisma ORM for robust database management, yielding
									modest yet tangible performance enhancements.
								</p>

								<p className="flex">
									<span>
										<FaCheck className="w-3 md:w-4 mr-2 text-green-500" />
									</span>
									&nbsp; Integrated Cloudinary for seamless image and video
									asset management, contributing to an approximate 20%
									improvement in media delivery efficiency.{" "}
								</p>
								<p className="flex">
									<span>
										<FaCheck className="w-3 md:w-4 mr-2 text-green-500" />
									</span>
									&nbsp; Strategically optimized and enhanced existing client
									websites, driving a measurable 15–25% increase in overall
									performance and user engagement.
								</p>
								<p className="flex">
									<span>
										<FaCheck className="w-3 md:w-4 mr-2 text-green-500" />
									</span>
									&nbsp; Employed cutting-edge state management and security
									protocols to ensure scalable, resilient, and
									industry-compliant web solutions.
								</p>
							</div>
						</div>
					</InViewUp>
				</div>
			</div>
		</div>
	);
};

export default Experience;
