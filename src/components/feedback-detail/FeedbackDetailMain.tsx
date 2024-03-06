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
import LoadingDots from "../ui/loading/LoadingDots";
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
		content = <LoadingDots />;
	}

	if (isError) {
		content = (
			<ErrorBlock
				full
				errorHeader="We couldn't fetch your data"
				errorMessage="Please try reloading the page"
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
			<div className="px-6 py-8 md:px-0">
				<FeedbackDetailHeader id={params.feedbackId} />
				<LabelsGroup data={data} />
				<>{feedbackTile}</>
				<CommentSection data={data} id={params.feedbackId} />
				<AddComment id={params.feedbackId} />
			</div>
		);
	}

	return <main className="container">{content}</main>;
};

export default FeedbackDetailMain;
