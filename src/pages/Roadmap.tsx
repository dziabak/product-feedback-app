// REACT
import { Outlet, useLocation } from "react-router-dom";
// LIBRARIES
import { useDocumentTitle } from "usehooks-ts";
// COMPONENTS
import RoadmapMain from "../components/roadmap/RoadmapMain";

const Roadmap = () => {
	useDocumentTitle("Roadmap | Feedback Nexus");

	const location = useLocation();

	return (
		<>
			<Outlet />
			{/* <RoadmapMain /> */}
			{location.pathname === "/roadmap" && <RoadmapMain />}
			{location.pathname === "/roadmap/new-feedback" && <RoadmapMain />}
		</>
	);
};

export default Roadmap;
