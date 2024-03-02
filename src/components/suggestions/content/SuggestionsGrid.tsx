// TYPES
import { ProductRequestsData } from "../../../types/types";
// COMPONENTS
import FeedbackTile from "../../feeedback-tile/FeedbackTile";
import NoFeedbackData from "./ui/NoFeedbackData";

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
				upvotedBy={feedback.upvotedBy}
				status={feedback.status}
			/>
		));

		if (sortedData.length === 0) {
			content = <NoFeedbackData />;
		}
	}

	return <div className="mt-6 mx-6 space-y-4 md:mx-0">{content}</div>;
};

export default SuggestionsGrid;
