// TYPES
import { ProductRequestsData } from "../../../types/types";
// COMPONENTS
import FeedbackTileRoadmap from "../../feeedback-tile/feedback-tile-roadmap/FeedbackTileRoadmap";
import RoadmapGridLabel from "./RoadmapGridLabel";

const RoadmapGrid = ({
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
			id={feedback.id}
			category={feedback.category}
			comments={feedback.comments}
			commentsNumber={feedback.comments?.length}
			description={feedback.description}
			title={feedback.title}
			upvotes={feedback.upvotes}
			status={status}
		/>
	));

	return (
		<div>
			<RoadmapGridLabel status={status} statusLength={filteredData.length} />
			<div className="grid gap-4">{content}</div>
		</div>
	);
};

export default RoadmapGrid;
