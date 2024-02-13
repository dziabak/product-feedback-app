// INTERNAL IMPORTS
// import FeedbackTile from "../feeedback-tile/FeedbackTile";
import { ProductRequestsData } from "../../types/types";
import FeedbackTileRoadmap from "../feeedback-tile/FeedbackTileRoadmap";
import RoadmapGridStatusHeader from "./RoadmapGridStatusHeader";

const RoadmapGridStatus = ({
	data,
	status,
}: {
	data: ProductRequestsData;
	status: string;
}) => {
	let content: JSX.Element[];

	const filteredData = data.filter((feedback) => {
		return feedback.status.includes(status);
	});

	content = filteredData.map((feedback) => (
		<FeedbackTileRoadmap
			key={feedback.id}
			category={feedback.category}
			comments={feedback.comments?.length}
			description={feedback.description}
			title={feedback.title}
			upvotes={feedback.upvotes}
			status={status}
		/>
	));

	return (
		<div>
			<RoadmapGridStatusHeader status={status} value={filteredData.length} />
			<div className="grid gap-4">{content}</div>
		</div>
	);
};

export default RoadmapGridStatus;
