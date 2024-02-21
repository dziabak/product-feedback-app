// REACT
import { Outlet } from "react-router-dom";
// LIBRARIES
import { useDocumentTitle } from "usehooks-ts";
// COMPONENTS
import RoadmapHeader from "../components/roadmap/RoadmapHeader";
import RoadmapGrid from "../components/roadmap/RoadmapGrid";

const Roadmap = () => {
	useDocumentTitle("Roadmap | Feedback Board");

	return (
		<>
			<Outlet />
			<section className="container md:py-8">
				<RoadmapHeader />
				<RoadmapGrid />
			</section>
		</>
	);
};

export default Roadmap;
