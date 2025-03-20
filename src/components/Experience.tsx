import React from "react";

const Experience: React.FC = () => {
	return (
		<div className="mt-5">
			<div className="flex flex-col items-center justify-between mx-auto">
				{/* Header */}
				<div className="flex justify-center items-center w-full h-full text-center lg:text-left mb-4 lg:mb-8">
					<h1 className="text-3xl font-extrabold text-blue-500">Experience</h1>
				</div>

				{/* Experience Details */}
				<div className="w-full mx-auto space-y-8">
					{/* Freelance Experience */}
					<div className="p-6 rounded-lg shadow-md border border-gray-700">
						<h2 className="text-lg sm:text-2xl font-bold text-blue-500 mb-2">
							Full-Stack Developer |{" "}
							<span className="text-blue-400">Freelance</span>
						</h2>
						<div className="md:text-lg text-gray-300 mb-1">
							<p className="flex">
								<span>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="w-4 h-4 md:h-8 md:w-8 mr-2">
										<path
											d="M20.2929 4.29289C20.6834 4.68342 20.6834 5.31658 20.2929 5.70711L8.29289 17.7071C7.90237 18.0976 7.26921 18.0976 6.87868 17.7071L3.87868 14.7071C3.48816 14.3166 3.48816 13.6834 3.87868 13.2929C4.26921 12.9024 4.90237 12.9024 5.29289 13.2929L7.5 15.5L18.7071 4.29289C19.0976 3.90237 19.7308 3.90237 20.1213 4.29289H20.2929Z"
											fill="#00AA00"
										/>
									</svg>
								</span>
								&nbsp; Orchestrated the development of three sophisticated web
								projects utilizing NextAuth for secure user authentication,
								Framer Motion for dynamic, engaging animations, and PostgreSQL
								with Prisma ORM for robust database management, yielding modest
								yet tangible performance enhancements.
							</p>

							<p className="flex">
								<span>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 md:h-8 md:w-8 mr-2">
										<path
											d="M20.2929 4.29289C20.6834 4.68342 20.6834 5.31658 20.2929 5.70711L8.29289 17.7071C7.90237 18.0976 7.26921 18.0976 6.87868 17.7071L3.87868 14.7071C3.48816 14.3166 3.48816 13.6834 3.87868 13.2929C4.26921 12.9024 4.90237 12.9024 5.29289 13.2929L7.5 15.5L18.7071 4.29289C19.0976 3.90237 19.7308 3.90237 20.1213 4.29289H20.2929Z"
											fill="#00AA00"
										/>
									</svg>
								</span>
								&nbsp; Integrated Cloudinary for seamless image and video asset
								management, contributing to an approximate 20% improvement in
								media delivery efficiency.{" "}
							</p>
							<p className="flex">
								<span>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 md:h-8 md:w-8 mr-2">
										<path
											d="M20.2929 4.29289C20.6834 4.68342 20.6834 5.31658 20.2929 5.70711L8.29289 17.7071C7.90237 18.0976 7.26921 18.0976 6.87868 17.7071L3.87868 14.7071C3.48816 14.3166 3.48816 13.6834 3.87868 13.2929C4.26921 12.9024 4.90237 12.9024 5.29289 13.2929L7.5 15.5L18.7071 4.29289C19.0976 3.90237 19.7308 3.90237 20.1213 4.29289H20.2929Z"
											fill="#00AA00"
										/>
									</svg>
								</span>
								&nbsp; Strategically optimized and enhanced existing client
								websites, driving a measurable 15–25% increase in overall
								performance and user engagement.
							</p>
							<p className="flex">
								<span>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 md:h-8 md:w-8 mr-2">
										<path
											d="M20.2929 4.29289C20.6834 4.68342 20.6834 5.31658 20.2929 5.70711L8.29289 17.7071C7.90237 18.0976 7.26921 18.0976 6.87868 17.7071L3.87868 14.7071C3.48816 14.3166 3.48816 13.6834 3.87868 13.2929C4.26921 12.9024 4.90237 12.9024 5.29289 13.2929L7.5 15.5L18.7071 4.29289C19.0976 3.90237 19.7308 3.90237 20.1213 4.29289H20.2929Z"
											fill="#00AA00"
										/>
									</svg>
								</span>
								&nbsp; Employed cutting-edge state management and security
								protocols to ensure scalable, resilient, and industry-compliant
								web solutions.
							</p>
						</div>
					</div>

					{/* Aimlabs Experience */}
					<div className="p-6 rounded-lg shadow-md border border-gray-700">
						<h2 className="text-lg md:text-2xl font-bold text-blue-500 mb-2">
							Software Developer |{" "}
							<span className="text-blue-400">Aimlabs</span>
						</h2>
						<p className="md:text-lg text-gray-300 mb-1">
							<span className="text-blue-400 font-semibold">
								November 2022 - October 2023
							</span>
						</p>
						<div className="md:text-lg text-gray-300 mb-1">
							<p className="flex">
								<span>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 md:h-8 md:w-8 mr-2">
										<path
											d="M20.2929 4.29289C20.6834 4.68342 20.6834 5.31658 20.2929 5.70711L8.29289 17.7071C7.90237 18.0976 7.26921 18.0976 6.87868 17.7071L3.87868 14.7071C3.48816 14.3166 3.48816 13.6834 3.87868 13.2929C4.26921 12.9024 4.90237 12.9024 5.29289 13.2929L7.5 15.5L18.7071 4.29289C19.0976 3.90237 19.7308 3.90237 20.1213 4.29289H20.2929Z"
											fill="#00AA00"
										/>
									</svg>
								</span>
								&nbsp; Orchestrated the development of three sophisticated web
								projects utilizing NextAuth for secure user authentication,
								Framer Motion for dynamic, engaging animations, and PostgreSQL
								with Prisma ORM for robust database management, yielding modest
								yet tangible performance enhancements.
							</p>

							<p className="flex">
								<span>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 md:h-8 md:w-8 mr-2">
										<path
											d="M20.2929 4.29289C20.6834 4.68342 20.6834 5.31658 20.2929 5.70711L8.29289 17.7071C7.90237 18.0976 7.26921 18.0976 6.87868 17.7071L3.87868 14.7071C3.48816 14.3166 3.48816 13.6834 3.87868 13.2929C4.26921 12.9024 4.90237 12.9024 5.29289 13.2929L7.5 15.5L18.7071 4.29289C19.0976 3.90237 19.7308 3.90237 20.1213 4.29289H20.2929Z"
											fill="#00AA00"
										/>
									</svg>
								</span>
								&nbsp; Integrated Cloudinary for seamless image and video asset
								management, contributing to an approximate 20% improvement in
								media delivery efficiency.{" "}
							</p>
							<p className="flex">
								<span>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 md:h-8 md:w-8 mr-2">
										<path
											d="M20.2929 4.29289C20.6834 4.68342 20.6834 5.31658 20.2929 5.70711L8.29289 17.7071C7.90237 18.0976 7.26921 18.0976 6.87868 17.7071L3.87868 14.7071C3.48816 14.3166 3.48816 13.6834 3.87868 13.2929C4.26921 12.9024 4.90237 12.9024 5.29289 13.2929L7.5 15.5L18.7071 4.29289C19.0976 3.90237 19.7308 3.90237 20.1213 4.29289H20.2929Z"
											fill="#00AA00"
										/>
									</svg>
								</span>
								&nbsp; Strategically optimized and enhanced existing client
								websites, driving a measurable 15–25% increase in overall
								performance and user engagement.
							</p>
							<p className="flex">
								<span>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4 md:h-8 md:w-8 mr-2">
										<path
											d="M20.2929 4.29289C20.6834 4.68342 20.6834 5.31658 20.2929 5.70711L8.29289 17.7071C7.90237 18.0976 7.26921 18.0976 6.87868 17.7071L3.87868 14.7071C3.48816 14.3166 3.48816 13.6834 3.87868 13.2929C4.26921 12.9024 4.90237 12.9024 5.29289 13.2929L7.5 15.5L18.7071 4.29289C19.0976 3.90237 19.7308 3.90237 20.1213 4.29289H20.2929Z"
											fill="#00AA00"
										/>
									</svg>
								</span>
								&nbsp; Employed cutting-edge state management and security
								protocols to ensure scalable, resilient, and industry-compliant
								web solutions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
