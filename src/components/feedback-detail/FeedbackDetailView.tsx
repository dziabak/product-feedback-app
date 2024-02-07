// BUILT-IN IMPORTS
import { useParams } from "react-router-dom";
// EXTERNAL IMPORTS
import { useQuery, useMutation } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { fetchFeedbackItemData, deleteFeedback } from "../../lib/http";
import { getTotalCommentsAndRepliesNumberFromFullDataSet } from "../../utils/helpers";
import FeedbackTile from "../feeedback-tile/FeedbackTile";
import FeedbackDetailsHeader from "./FeedbackDetailsHeader";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBlock from "../ui/ErrorBlock";
import FeedbackDetailsComment from "./FeedbackDetailsComment";
import AddComment from "./AddComment";

const FeedbackDetailView = () => {
	const params = useParams();

	let content!: JSX.Element | JSX.Element[];
	let comments!: JSX.Element | JSX.Element[];

	const { data, isFetching, isError } = useQuery({
		queryKey: ["feedbackItem", params.feedbackId],
		queryFn: () => fetchFeedbackItemData({ id: params.feedbackId }),
	});

	const { mutate } = useMutation({
		mutationFn: deleteFeedback,
	});

	const handleDeleteFeedback = () => {
		mutate({ id: params.feedbackId });
	};

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
		const totalComments = getTotalCommentsAndRepliesNumberFromFullDataSet(data);

		content = data.map((feedback) => (
			<FeedbackTile
				key={feedback.id}
				id={feedback.id}
				category={feedback.category}
				commentsNumber={feedback.comments?.length}
				replyData={feedback.comments}
				description={feedback.description}
				status={feedback.status}
				title={feedback.title}
				upvotes={feedback.upvotes}
			/>
		));

		comments = (
			<div className="mt-4">
				<div className="flex flex-col px-8 pt-4 pb-12 rounded-lg bg-white">
					<p className="mb-8 text-lg font-bold">{totalComments} Comments</p>
					{data[0].comments === undefined && (
						<p className="mb-8 text-center text-c-dark-gray">
							Be the first to comment!
						</p>
					)}
					{data[0].comments !== undefined &&
						data[0].comments.map((item) => (
							<FeedbackDetailsComment
								key={item.content}
								content={item.content}
								image={item.user.image}
								name={item.user.name}
								username={item.user.username}
								replyData={item.replies}
							/>
						))}
				</div>
			</div>
		);
	}
	return (
		<div className="container">
			<FeedbackDetailsHeader />
			<button
				onClick={handleDeleteFeedback}
				className="p-2 bg-c-red text-white rounded-lg">
				Delete
			</button>
			{content}
			{comments}
			<AddComment />
		</div>
	);
};

export default FeedbackDetailView;
