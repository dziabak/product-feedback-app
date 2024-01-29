// EXTERNAL IMPORTS
import { useQuery } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { fetchOnlySuggestionsData } from "../../lib/http";
import FeedbackTile from "../feeedback-tile/FeedbackTile";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBlock from "../ui/ErrorBlock";

const SuggestionsGrid = () => {
	let content!: JSX.Element | JSX.Element[];

	const { data, isFetching, isError } = useQuery({
		queryKey: ["feedback"],
		queryFn: fetchOnlySuggestionsData,
	});

	if (isFetching) {
		content = <LoadingSpinner />;
	}

	if (isError) {
		content = (
			<ErrorBlock
				errorHeader="There was an error"
				errorMessage="Please try again later"
			/>
		);
	}

	if (data) {
		// console.log(data.productRequests);
		content = data.map((feedback) => (
			<FeedbackTile
				key={feedback.id}
				category={feedback.category}
				comments={feedback.comments?.length}
				description={feedback.description}
				title={feedback.title}
				upvotes={feedback.upvotes}
			/>
		));
	}

	return <div className="space-y-4">{content}</div>;
};

export default SuggestionsGrid;
