import { Outlet } from "react-router-dom";
import { useDocumentTitle } from "usehooks-ts";
// INTERNAL IMPORTS
import RoadmapHeader from "../components/roadmap/RoadmapHeader";
import RoadmapGrid from "../components/roadmap/RoadmapGrid";

const Roadmap = () => {
	useDocumentTitle("Roadmap | Feedback Board");

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
