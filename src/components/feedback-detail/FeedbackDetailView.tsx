// BUILT-IN IMPORTS
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// EXTERNAL IMPORTS
import { useQuery, useMutation } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { fetchFeedbackItemData, deleteFeedback } from "../../lib/http";
import { getTotalCommentsAndRepliesNumberFromFullDataSet } from "../../utils/helpers";
import { queryClient } from "../../lib/http";
import FeedbackTile from "../feeedback-tile/FeedbackTile";
import FeedbackDetailsHeader from "./FeedbackDetailsHeader";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBlock from "../ui/ErrorBlock";
import FeedbackDetailsComment from "./FeedbackDetailsComment";
import AddComment from "./AddComment";

const FeedbackDetailView = () => {
	const params = useParams();
	const navigate = useNavigate();

	let content!: JSX.Element | JSX.Element[];
	let comments!: JSX.Element | JSX.Element[];
	let author!: JSX.Element | JSX.Element[];

	const [isDeleting, setIsDeleting] = useState(false);

	const { data, isFetching, isError } = useQuery({
		queryKey: ["feedbackItem", params.feedbackId],
		queryFn: () => fetchFeedbackItemData({ id: params.feedbackId }),
	});

	const {
		mutate,
		isPending,
		isError: isErrorDeleting,
	} = useMutation({
		mutationFn: deleteFeedback,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["feedback"],
				refetchType: "none",
			});
			navigate("/");
		},
	});

	const handleStartDelete = () => {
		setIsDeleting(true);
	};

	const handleStopDelete = () => {
		setIsDeleting(false);
	};

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
								key={item.id}
								content={item.content}
								image={item.user.image}
								name={item.user.name}
								username={item.user.username}
								replyData={item.replies}
								commentId={item.id}
								postId={params.feedbackId}
							/>
						))}
				</div>
			</div>
		);

		author = (
			<div className="px-8 py-4 mb-4 rounded-lg bg-white">
				<div className="flex items-start">
					<img
						src={data[0].author.image}
						alt="User photo"
						className="w-12 mr-8 rounded-full"
					/>
					<div className="space-y-4">
						<div className="flex items-center justify-between">
							<div>
								<p className="text-sm text-c-dark-gray">
									by{" "}
									<span className="font-bold text-base text-black">
										{data[0].author.name}
									</span>
								</p>
								<p className="text-sm text-c-dark-gray">
									{data[0].author.username}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	const deletingModal = (
		<div className="p-4 space-y-2">
			<p>Do you want to delete this feedback</p>
			{isPending && <p>Deleting. Please wait...</p>}
			{!isPending && (
				<div className="space-x-2">
					<button
						onClick={handleStopDelete}
						className="p-2 bg-c-light-blue text-white rounded-lg">
						Cancel
					</button>
					<button
						onClick={handleDeleteFeedback}
						className="p-2 bg-c-red text-white rounded-lg">
						Delete
					</button>
				</div>
			)}
			{isErrorDeleting && <p>There was an error. Please try again later.</p>}
		</div>
	);
	return (
		<div className="container">
			<FeedbackDetailsHeader />
			<button
				onClick={handleStartDelete}
				className="p-2 bg-c-red text-white rounded-lg">
				Delete
			</button>
			<Link
				to={`/feedback/${params.feedbackId}/edit`}
				className="p-2 bg-c-light-blue text-white rounded-lg">
				Edit
			</Link>
			{isDeleting && deletingModal}
			{author}
			{content}
			{comments}
			<AddComment id={params.feedbackId} />
		</div>
	);
};

export default FeedbackDetailView;
