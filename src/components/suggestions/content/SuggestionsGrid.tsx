// TYPES
import { ProductRequestsData } from "../../../types/types";
// COMPONENTS
import FeedbackTile from "../../feeedback-tile/FeedbackTile";
import SuggestionsNoFeedbackData from "./SuggestionsNoFeedbackData";

const SuggestionsGrid = ({
	sortedData,
}: {
	sortedData: ProductRequestsData | undefined;
}) => {
	let content!: JSX.Element | JSX.Element[];

	if (sortedData) {
		content = sortedData.map((feedback) => (
			<FeedbackTile
				key={feedback.id}
				id={feedback.id}
				category={feedback.category}
				comments={feedback.comments}
				commentsNumber={feedback.comments?.length}
				description={feedback.description}
				title={feedback.title}
				upvotes={feedback.upvotes}
				status={feedback.status}
			/>
		));

		if (sortedData.length === 0) {
			content = <SuggestionsNoFeedbackData />;
		}
	}

	return <div className="mx-4 space-y-4 md:mx-0">{content}</div>;
};

export default SuggestionsGrid;
