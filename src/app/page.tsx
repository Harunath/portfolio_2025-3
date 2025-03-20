import About from "@/components/About";
import ContactUs from "@/components/ContactUs";

import Experience from "@/components/Experience";
import GitLinkedin from "@/components/GitLinkedin";
import Hero from "@/components/Hero"; // Assuming Hero component is located in the same directory
import Projects from "@/components/Projects";

function Home() {
	return (
		<div className=" relative">
			<GitLinkedin />
			<Hero />
			<About />
			<Experience />
			<Projects />
			<ContactUs />
		</div>
	);
}

export default Home;
