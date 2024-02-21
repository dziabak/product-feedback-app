// TYPES
import { ProductRequestsData } from "../../../types/types";
// COMPONENTS
import RoadmapGrid from "../content/RoadmapGrid";

const RoadmapDesktopLayout = ({ data }: { data: ProductRequestsData }) => {
	return (
		<>
			<RoadmapGrid data={data} status="planned" />
			<RoadmapGrid data={data} status="in-progress" />
			<RoadmapGrid data={data} status="live" />
		</>
	);
};

export default RoadmapDesktopLayout;
