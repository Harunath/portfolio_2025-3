"use client";
import { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Providers = ({ children }: { children: ReactNode }) => {
	return (
		<div className="bg-[#070701] md:px-20 lg:px-40 dark">
			<AnimatePresence>
				<div className="relative">
					<div className="fixed top-0 left-0 w-full z-10">
						<Navbar />
					</div>
					<div className="pt-24 px-4">
						{children}
						<div className="pt-[68px]">
							<Footer />
						</div>
					</div>
				</div>
			</AnimatePresence>
		</div>
	);
};

export default Providers;
