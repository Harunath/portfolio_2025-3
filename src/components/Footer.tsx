"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
	{
		href: "https://github.com/harunath",
		label: "GitHub",
		icon: <FaGithub size={24} className="text-gray-800" />,
	},
	{
		href: "https://linkedin.com/in/harunath",
		label: "LinkedIn",
		icon: <FaLinkedin size={24} className="text-blue-700" />,
	},
	{
		href: "https://x.com/harunath4",
		label: "Twitter",
		icon: <FaTwitter size={24} className="text-blue-700" />,
	},
	{
		href: "https://facebook.com/YourFacebookProfile",
		label: "Facebook",
		icon: <FaFacebook size={24} className="text-blue-600" />,
	},
];

const quickLinks = [
	{ href: "/", text: "Home" },
	{ href: "/experience", text: "Experience" },
	{ href: "/aboutme", text: "About Me" },
	{ href: "/projects", text: "Projects" },
	{ href: "/contactme", text: "Contact" },
];

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-900 py-10 mt-12">
			<div className="container mx-auto px-6 text-center space-y-8">
				{/* Social Media Links */}
				<div>
					<h2 className="text-2xl font-semibold mb-4 text-white">
						Connect with me
					</h2>
					<div className="flex justify-center space-x-5">
						{socialLinks.map(({ href, label, icon }) => (
							<motion.a
								whileHover={{
									rotate: 360,
									transition: {
										duration: 0.3,
										ease: "circInOut",
									},
								}}
								key={label}
								href={href}
								target="_blank"
								aria-label={label}
								className="p-3 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 hover:shadow-xl">
								{icon}
							</motion.a>
						))}
					</div>
				</div>

				{/* Quick Links */}
				<div>
					<h2 className="text-2xl font-semibold mb-4 text-white">
						Quick Links
					</h2>
					<div className="flex flex-wrap justify-center gap-6">
						{quickLinks.map(({ href, text }) => (
							<motion.div
								whileHover={{
									rotateX: 10,
									rotateY: -10,
								}}
								key={text}>
								<Link
									href={href}
									className="hover:text-blue-700 transition-colors"
									onClick={() =>
										window.scrollTo({ top: 0, behavior: "smooth" })
									}>
									{text}
								</Link>
							</motion.div>
						))}
					</div>
				</div>

				{/* Contact Information */}
				<div>
					<h2 className="text-2xl font-semibold mb-4 text-white">
						Contact Information
					</h2>
					<p>
						Email:{" "}
						<a
							href="mailto:harunath04@gmail.com"
							className="hover:text-blue-700">
							harunath04@gmail.com
						</a>
					</p>
					<p>
						Phone:{" "}
						<a href="tel:+919133443411" className="hover:text-blue-700">
							+91 9133443411
						</a>
					</p>
				</div>

				{/* Back to Top Button */}
				<div>
					<button
						className="bg-gradient-to-r from-blue-700 to-blue-700 text-white px-5 py-2 rounded-full shadow-md hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105"
						onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
						Back to Top
					</button>
				</div>

				{/* Footer Bottom Text */}
				<p className="text-sm">
					&copy; {new Date().getFullYear()} Harunath. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
