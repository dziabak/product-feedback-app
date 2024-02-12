import { Outlet } from "react-router-dom";
// INTERNAL IMPORTS
import RoadmapHeader from "../components/roadmap/RoadmapHeader";
import RoadmapGrid from "../components/roadmap/RoadmapGrid";

const Roadmap = () => {
	return (
		<>
			<Outlet />
			<section className="container">
				<RoadmapHeader />
				<RoadmapGrid />
			</section>
		</>
	);
};

export default Roadmap;
