import About from "./About";
import ContactUs from "./ContactUs";

import Experience from "./Experience";
import GitLinkedin from "./GitLinkedin";
import Hero from "./Hero"; // Assuming Hero component is located in the same directory
import Projects from "./Projects";
import { BackgroundBeamsWithCollision } from "../components/ui/background-beams-with-collision";

function Home() {
	return (
		<div className=" relative">
			<GitLinkedin />
			<BackgroundBeamsWithCollision>
				<Hero />
			</BackgroundBeamsWithCollision>

			<About />
			<Experience />
			<Projects />
			<ContactUs />
		</div>
	);
}

export default Home;
