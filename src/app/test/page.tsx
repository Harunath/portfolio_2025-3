import SignWave from "@/components/Test/signwave/SignWave";
import React from "react";

const page = () => {
	return (
		<div>
			<div className="h-80 w-400">
				<div className="h-1/4 w-full">
					<SignWave />
				</div>
				<div className="h-1/4 w-full">
					<SignWave />
				</div>
				<div className="h-1/4 w-full">
					<SignWave />
				</div>
				<div className="h-1/4 w-full">
					<SignWave />
				</div>
			</div>
		</div>
	);
};

export default page;
