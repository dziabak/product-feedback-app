// REACT
import { useNavigate, useParams, Link } from "react-router-dom";
// LIBRARIES
import { useQuery, useMutation } from "@tanstack/react-query";
// DATA
import {
	queryClient,
	fetchFeedbackItemData,
	editFeedback,
} from "../../lib/http";
// COMPONENTS
import FeedbackFormLayout from "./FeedbackFormLayout";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBlock from "../ui/ErrorBlock";

const EditFeedbackForm = () => {
	const navigate = useNavigate();
	const params = useParams();

	let content!: JSX.Element;
	let utilityContent!: JSX.Element;

	const { data, isPending, isError } = useQuery({
		queryKey: ["feedbackItem", params.feedbackId],
		queryFn: () => fetchFeedbackItemData({ id: params.feedbackId }),
	});

	const {
		mutate,
		isPending: isPendingEdit,
		isError: isErrorEdit,
	} = useMutation({
		mutationKey: ["feedbackItem"],
		mutationFn: editFeedback,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["feedbackItem"] });
			navigate("../");
		},
	});

	const editFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		mutate({ id: params.feedbackId, event: data });
	};

	if (isPending) {
		utilityContent = <LoadingSpinner />;
	}

	if (isError) {
		utilityContent = (
			<ErrorBlock
				errorHeader="There was an error"
				errorMessage="Please try again later"
			/>
		);
	}

	if (data) {
		content = (
			<div>
				<p className="py-4 mb-4 font-bold text-2xl text-c-dark-blue">
					Editing "{data[0].title}"
				</p>
				<form onSubmit={editFormHandler} className="space-y-4">
					<div className="flex flex-col space-y-2">
						<label htmlFor="title">
							<p className="text-sm font-bold text-c-dark-blue">
								Feedback Title
							</p>
							<p className="text-sm text-c-dark-gray">
								Add a short, descriptive headline
							</p>
						</label>
						<input
							type="text"
							name="title"
							id="title"
							className="p-3 rounded-md bg-c-light-gray"
							defaultValue={data[0].title}
						/>
					</div>
					<div className="flex flex-col space-y-2">
						<label htmlFor="category">
							<p className="text-sm font-bold text-c-dark-blue">Category</p>
							<p className="text-sm text-c-dark-gray">
								Choose a category for your feedback
							</p>
						</label>
						<select
							name="category"
							id="category"
							defaultValue={data[0].category}
							className="p-3 rounded-md bg-c-light-gray">
							<option value="feature">Feature</option>
							<option value="ui">UI</option>
							<option value="ux">UX</option>
							<option value="enhancement">Enhancement</option>
							<option value="bug">Bug</option>
						</select>
					</div>
					<div className="flex flex-col space-y-2">
						<label htmlFor="status">
							<p className="text-sm font-bold text-c-dark-blue">Status</p>
							<p className="text-sm text-c-dark-gray">Change feedback status</p>
						</label>
						<select
							name="status"
							id="status"
							defaultValue={data[0].status}
							className="p-3 rounded-md bg-c-light-gray">
							<option value="suggestion">Suggestion</option>
							<option value="planned">Planned</option>
							<option value="in-progress">In-progress</option>
							<option value="live">Live</option>
						</select>
					</div>
					<div className="flex flex-col space-y-2">
						<label htmlFor="description">
							<p className="text-sm font-bold text-c-dark-blue">
								Feedback Details
							</p>
							<p className="text-sm text-c-dark-gray">
								Include any specific comments on what should be improved, added,
								etc.
							</p>
						</label>
						<textarea
							name="description"
							id="description"
							className="p-3 rounded-md bg-c-light-gray"
							defaultValue={data[0].description}
						/>
					</div>
					{utilityContent}
					{isPendingEdit && <p>Submitting updated data...</p>}
					{!isPendingEdit && (
						<div className="flex justify-between pt-8 space-x-4">
							<button
								disabled
								className="flex items-center px-6 py-3 text-sm font-bold transition-colors rounded-lg bg-c-red text-white hover:bg-c-red/75 disabled:bg-c-dark-gray">
								Delete
							</button>
							<div className="flex space-x-4">
								<Link
									to=".."
									className="flex items-center px-6 py-3 text-sm font-bold transition-colors rounded-lg bg-c-dark-blue text-white hover:bg-c-dark-blue/75">
									Cancel
								</Link>
								<button className="flex items-center px-6 py-3 text-sm font-bold transition-colors rounded-lg bg-c-magenta text-white hover:bg-c-magenta/75">
									Save changes
								</button>
							</div>
						</div>
					)}
					{isErrorEdit && (
						<p>
							There was an error while updating the data. Please try again
							later.
						</p>
					)}
				</form>
			</div>
		);
	}

	return <FeedbackFormLayout>{content}</FeedbackFormLayout>;
};

export default EditFeedbackForm;
