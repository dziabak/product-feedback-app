// TYPES
import { ProductRequestsData } from "../../types/types";
// COMPONENTS
import RoadmapGridStatus from "./RoadmapGridStatus";

const RoadmapGridDesktopView = ({ data }: { data: ProductRequestsData }) => {
	return (
		<>
			<RoadmapGridStatus data={data} status="planned" />
			<RoadmapGridStatus data={data} status="in-progress" />
			<RoadmapGridStatus data={data} status="live" />
		</>
	);
};

export default RoadmapGridDesktopView;
