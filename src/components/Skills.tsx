import InViewUp from "./animations/InViewUp";

export default function Skills() {
	const skills = [
		{
			category: "Programming Languages",
			items: ["JavaScript", "TypeScript", "SQL", "Python"],
		},
		{
			category: "Frontend",
			items: [
				"Next.js",
				"React.js",
				"Vue.js",
				"Zustand",
				"Recoil",
				"Pinia",
				"HTML",
				"CSS",
				"Tailwind CSS",
				"Modern UI Libraries",
			],
		},
		{
			category: "Backend",
			items: [
				"Node.js",
				"Express.js",
				"FastAPI",
				"PostgreSQL",
				"SQLAlchemy",
				"PrismaORM",
				"MongoDB",
				"Zod",
				"Web Sockets",
			],
		},
		{
			category: "Tools & Technologies",
			items: ["NextAuth", "Docker", "Git", "AI API Integration"],
		},
		{
			category: "Other Skills",
			items: [
				"Agile Development",
				"Problem-Solving",
				"Communication",
				"Teamwork",
				"Leadership",
				"Adaptability",
			],
		},
	];

	return (
		<div className="max-w-3xl mx-auto shadow-lg rounded-2xl">
			<h2 className="text-3xl font-bold text-blue- mb-4 text-blue-700">
				<InViewUp>Skills</InViewUp>
			</h2>
			<div className="space-y-4">
				{skills.map((skill, index) => (
					<div key={index}>
						<InViewUp>
							<h3 className="text-xl font-semibold text-white">
								{skill.category}
							</h3>
						</InViewUp>
						<InViewUp>
							<ul className="mt-2 flex flex-wrap gap-2">
								{skill.items.map((item, idx) => (
									<li
										key={idx}
										className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium border border-blue-900">
										{item}
									</li>
								))}
							</ul>
						</InViewUp>
					</div>
				))}
			</div>
		</div>
	);
}
