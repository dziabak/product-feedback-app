// REACT
import { useParams } from "react-router-dom";
// LIBRARIES
import { useQuery } from "@tanstack/react-query";
// DATA
import { fetchFeedbackItemData } from "../../lib/http";
// COMPONENTS
import FeedbackTile from "../feeedback-tile/FeedbackTile";
import FeedbackDetailHeader from "./ui/FeedbackDetailHeader";
import CommentSection from "./comments/CommentSection";
import AddComment from "./comments/AddComment";
import LoadingSpinner from "../ui/loading/LoadingSpinner";
import ErrorBlock from "../ui/errors/ErrorBlock";
import LabelsGroup from "./labels/LabelsGroup";

const FeedbackDetailMain = () => {
	const params = useParams();

	let feedbackTile!: JSX.Element[];
	let content!: JSX.Element;

	const { data, isFetching, isError } = useQuery({
		queryKey: ["feedbackItem", params.feedbackId],
		queryFn: () => fetchFeedbackItemData({ id: params.feedbackId }),
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
		feedbackTile = data.map((feedback) => (
			<FeedbackTile
				key={feedback.id}
				id={feedback.id}
				category={feedback.category}
				commentsNumber={feedback.comments?.length}
				comments={feedback.comments}
				description={feedback.description}
				status={feedback.status}
				title={feedback.title}
				upvotes={feedback.upvotes}
				upvotedBy={feedback.upvotedBy}
			/>
		));

		content = (
			<div className="px-6 md:px-0">
				<FeedbackDetailHeader id={params.feedbackId} />
				<LabelsGroup data={data} />
				{feedbackTile}
				<CommentSection data={data} id={params.feedbackId} />
				<AddComment id={params.feedbackId} />
			</div>
		);
	}

	return <section className="container py-8">{content}</section>;
};

export default FeedbackDetailMain;
