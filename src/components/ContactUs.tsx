"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const ContactUs: React.FC<{ className?: string }> = ({ className }) => {
	const contacts = [
		{
			icon: <MdEmail size={24} />,
			label: "Email",
			value: "harunath04@gmail.com",
			link: "mailto:harunath04@gmail.com",
		},
		{
			icon: <FaGithub size={24} />,
			label: "GitHub",
			value: "github.com/harunath",
			link: "https://github.com/harunath",
		},
		{
			icon: <FaLinkedin size={24} />,
			label: "LinkedIn",
			value: "linkedin.com/in/harunath",
			link: "https://www.linkedin.com/in/harunath",
		},
		{
			icon: <MdPhone size={24} />,
			label: "Phone",
			value: "+91 9133443441",
			link: "tel:+919133443441",
		},
		{
			icon: <MdLocationOn size={24} />,
			label: "Location",
			value: "Hyderabad, India",
			link: "https://maps.google.com",
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.5 }}
			className={`rounded-xl shadow-lg ${className}`}>
			<h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
				Contact Me
			</h1>
			<div className="flex flex-col items-center space-y-6">
				{contacts.map((contact, index) => (
					<motion.a
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						key={index}
						href={contact.link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center  md:pl-20 w-full sm:w-96 bg-gray-700 hover:bg-gray-600 border border-blue-900 hover:border-blue-700 p-4 rounded-lg shadow-md transition">
						<span className="text-blue-700">{contact.icon}</span>
						<span className="ml-3 text-lg">{contact.value}</span>
					</motion.a>
				))}
			</div>
		</motion.div>
	);
};

export default ContactUs;
