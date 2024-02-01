// BUILT-IN IMPORTS
import { useParams } from "react-router-dom";
// EXTERNAL IMPORTS
import { useQuery } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { fetchFeedbackItemData } from "../../lib/http";
import { ProductRequestsData } from "../../types/types";
import FeedbackTile from "../feeedback-tile/FeedbackTile";
import FeedbackDetailsHeader from "./FeedbackDetailsHeader";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBlock from "../ui/ErrorBlock";
import FeedbackDetailsComment from "./FeedbackDetailsComment";

const FeedbackDetailView = () => {
	const params = useParams();

	let content!: JSX.Element | JSX.Element[];
	let comments!: JSX.Element | JSX.Element[];

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

	// function getCommentsAndRepliesLength(data: ProductRequestsData) {
	// 	return data.map((product) => ({
	// 		commentsLength: product.comments.length,
	// 		repliesLength: product.comments.reduce(
	// 			(total, comment) =>
	// 				total + (comment.replies ? comment.replies.length : 0),
	// 			0
	// 		),
	// 	}));
	// }

	function getCommentsAndRepliesLength(data: ProductRequestsData) {
		return data.map((product) => {
			const commentsLength = product.comments ? product.comments.length : 0;
			const repliesLength = product.comments
				? product.comments.reduce(
						(total, comment) =>
							total + (comment.replies ? comment.replies.length : 0),
						0
				  )
				: 0;

			return {
				commentsLength,
				repliesLength,
			};
		});
	}

	if (data) {
		const lengths = getCommentsAndRepliesLength(data);

		content = data.map((feedback) => (
			<FeedbackTile
				key={feedback.id}
				id={feedback.id}
				category={feedback.category}
				commentsNumber={feedback.comments?.length}
				description={feedback.description}
				status={feedback.status}
				title={feedback.title}
				upvotes={feedback.upvotes}
			/>
		));

		comments = (
			<div className="mt-4">
				<div className="flex flex-col px-8 pt-4 pb-12 rounded-lg bg-white">
					<p className="mb-8 text-lg font-bold">
						{lengths[0].commentsLength} Comments and {lengths[0].repliesLength}{" "}
						Replies
					</p>
                    { data[0].comments === undefined && <p className="mb-8 text-lg font-bold">Be the first to comment!</p>}
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

	let newComments = (
		<div className="mt-4 pb-12">
			<div className="flex flex-col px-8 py-4 rounded-lg bg-white">
				<p className="mb-8 text-lg font-bold">Add Comment</p>
				<textarea
					name="details"
					id="details"
					className="p-6 rounded-md bg-c-light-gray"
					placeholder="Type your comment here"
				/>
				<div className="flex items-center justify-between py-8">
					<p className="text-c-dark-gray">250 characters left</p>
					<button className="px-6 py-3 text-sm font-bold transition-colors rounded-lg bg-c-magenta text-white hover:bg-c-magenta/75">
						Post Comment
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<div className="container">
			<FeedbackDetailsHeader />
			{content}
			{comments}
			{newComments}
		</div>
	);
};

export default FeedbackDetailView;
