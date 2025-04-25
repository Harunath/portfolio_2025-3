"use client";
import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const Providers = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname(); // Get current route
	return (
		<div className="bg-[#070701] text-white md:px-20 lg:px-40 dark">
			<AnimatePresence mode="wait">
				<div className="relative">
					<div className="fixed top-0 left-0 w-full z-50">
						<Navbar />
					</div>
					<motion.div
						key={pathname}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.3 }}>
						<div className="pt-24 px-4">
							{children}
							<div className="pt-[68px]">
								<Footer />
							</div>
						</div>
					</motion.div>
				</div>
			</AnimatePresence>
		</div>
	);
};

export default Providers;
