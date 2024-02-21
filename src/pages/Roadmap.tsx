// REACT
import { Outlet } from "react-router-dom";
// LIBRARIES
import { useDocumentTitle } from "usehooks-ts";
// COMPONENTS
import RoadmapMain from "../components/roadmap/RoadmapMain";

const Roadmap = () => {
	useDocumentTitle("Roadmap | Feedback Nexus");

	return (
		<>
			<Outlet />
			<RoadmapMain />
		</>
	);
};

export default Roadmap;
