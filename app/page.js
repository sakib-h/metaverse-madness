import { Footer, Navbar } from "../components";
import {
  Hero,
	About,
	Explore,
	Feedback,
	GetStarted,
	Insights,
	WhatsNew,
	World,
} from "../sections";

const Page = () => (
	<div className="bg-primary-black overflow-hidden">
		<Navbar />
		<Hero />
		<About />
		<Explore />
		<GetStarted />
		<WhatsNew />
		<World />
		<Insights />
		<Feedback />
		<Footer />
	</div>
);

export default Page;
