// REACT
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
// LIBRARIES
import { useQuery, useMutation } from "@tanstack/react-query";
// DATA
import {
	queryClient,
	fetchFeedbackItemData,
	deleteFeedback,
} from "../../lib/http";
// COMPONENTS
import FeedbackTile from "../feeedback-tile/FeedbackTile";
import FeedbackDetailHeader from "./ui/FeedbackDetailHeader";
import CommentSection from "./comments/CommentSection";
import AddComment from "./comments/AddComment";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBlock from "../ui/ErrorBlock";
import LabelsGroup from "./labels/LabelsGroup";

const FeedbackDetailMain = () => {
	const params = useParams();
	const navigate = useNavigate();

	let content!: JSX.Element | JSX.Element[];

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
		content = data.map((feedback) => (
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
			/>
		));
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
		<section className="container py-8">
			<div className="px-6 md:px-0">
				<FeedbackDetailHeader id={params.feedbackId} />
				<button
					onClick={handleStartDelete}
					className="p-2 bg-c-red text-white rounded-lg">
					Delete
				</button>
				{isDeleting && deletingModal}
				<LabelsGroup data={data} />
				{content}
				<CommentSection data={data} id={params.feedbackId} />
				<AddComment id={params.feedbackId} />
			</div>
		</section>
	);
};

export default FeedbackDetailMain;
