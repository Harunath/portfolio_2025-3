"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
	HiViewGrid,
	HiUser,
	HiOutlineMail,
	HiOutlineBriefcase,
	HiOutlineHome,
	HiOutlineMenu,
} from "react-icons/hi";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const navItems = [
		{
			to: "/",
			label: "Home",
			icon: <HiOutlineHome className="inline-block mr-1" />,
		},
		{
			to: "#experience",
			label: "Experience",
			icon: <HiOutlineBriefcase className="inline-block mr-1" />,
		},
		{
			to: "#about",
			label: "About Me",
			icon: <HiUser className="inline-block mr-1" />,
		},
		{
			to: "#projects",
			label: "Projects",
			icon: <HiViewGrid className="inline-block mr-1" />,
		},
		{
			to: "#contact",
			label: "Contact Me",
			icon: <HiOutlineMail className="inline-block mr-1" />,
		},
	];

	return (
		<nav className=" px-4 md:px-24 lg:px-44 py-4 backdrop-blur-2xl">
			<div className="max-h-9 max-w-7xl mx-auto px-4 flex justify-between items-center">
				<div>
					<Link href="/" className="font-bold text-xl text-white">
						Harunath
					</Link>
				</div>
				<div className="hidden lg:flex items-center space-x-4">
					{navItems.map((item) => (
						<Link
							key={item.label}
							href={item.to}
							className="flex items-center text-white hover:text-gray-300 px-2 py-2 rounded-md text-sm font-medium">
							{item.icon}
							{item.label}
						</Link>
					))}
				</div>
				<div className="lg:hidden">
					<button
						onClick={toggleMenu}
						className="text-white hover:text-gray-200 focus:outline-none">
						<HiOutlineMenu className="text-2xl" />
					</button>
				</div>
			</div>
			{isMenuOpen && (
				<div className="lg:hidden backdrop-blur-md">
					<div className="flex flex-col items-center mt-4">
						{navItems.map((item) => (
							<Link
								key={item.label}
								href={item.to}
								className="text-white hover:text-gray-200 text-sm font-medium flex justify-center items-center w-full py-2">
								<div className="w-[100px]">
									{item.icon}
									{item.label}
								</div>
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
