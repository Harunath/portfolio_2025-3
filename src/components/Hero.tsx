"use client";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import BorderAnimate from "./ui/BorderAnimate";

const Hero: React.FC = () => {
	return (
		<div className="relative lg:max-h-screen min-h-fit md:py-16 sm:px-8 lg:px-4">
			<div className="w-full mx-auto flex flex-col lg:flex-row items-center">
				<motion.div
					className="text-left lg:w-3/5"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}>
					<h1 className="text-4xl font-bold text-center lg:text-left tracking-tight text-white">
						I&apos;m <span className="text-blue-700">Harunath Eskuri</span>
					</h1>
					<h2 className="mt-3 text-2xl text-blue-600 text-center lg:text-left sm:text-xl">
						<Typewriter
							words={[
								"MERN Stack Developer",
								"React Specialist",
								"Next.js Expert",
							]}
							loop
							cursor
							cursorStyle="|"
							typeSpeed={80}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					</h2>
					<p className="mt-4 text-lg text-center md:text-start text-white leading-relaxed">
						A passionate full-stack developer skilled in crafting seamless web
						experiences with React, Next.js, and Node.js. Dedicated to building
						innovative solutions that leave an impact.
					</p>
					<div className="mt-10 flex flex-col gap-3 sm:flex-row w-fit justify-center lg:justify-start mx-auto">
						<motion.a
							href="mailto:harunath04@gmail.com"
							className="px-6 py-3 min-w-40 rounded-full text-center text-white bg-blue-600 font-medium text-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-150"
							whileHover={{ scale: 1.05 }}>
							Contact Me
						</motion.a>
						<motion.a
							target="_blank"
							href="https://docs.google.com/document/d/16vr0b0Kj_kOtNJnG53ZC9rh1idispizkKdHJNHyB2dk/edit?usp=sharing"
							download="Harunath_Eskuri_Resume.pdf"
							className="px-6 py-3 min-w-40 rounded-full text-center text-blue-600 bg-white font-medium text-lg shadow-md hover:bg-gray-100 hover:shadow-lg transition-all duration-150"
							whileHover={{ scale: 1.05 }}>
							Resume
						</motion.a>
					</div>
				</motion.div>

				<div className="h-full w-full mt-8 lg:mt-0 flex flex-1 justify-center items-center">
					<div className="relative w-full max-w-80">
						<BorderAnimate>
							<Image
								src="https://res.cloudinary.com/degrggosz/image/upload/v1739790836/profile_de5op1.png"
								className="bg-cover h-auto w-full rounded-full"
								height={320}
								width={320}
								alt="Harunath"
							/>
						</BorderAnimate>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
