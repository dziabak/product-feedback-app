// EXTERNAL IMPORTS
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
// INTERNAL IMPORTS
import useCurrentUserData from "../../hooks/useCurrentUserData";
import { createNewFeedback } from "../../lib/http";
import { generateRandomId } from "../../utils/helpers";
import { queryClient } from "../../lib/http";
import LinkButton from "../ui/LinkButton";
import GenericButton from "../ui/GenericButton";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBlock from "../ui/ErrorBlock";
import FeedbackFormLayout from "./FeedbackFormLayout";

const NewFeedbackForm = () => {
	let utilityContent!: JSX.Element;

	const navigate = useNavigate();

	const currentUserData = useCurrentUserData();

	const { mutate, isPending, isError } = useMutation({
		mutationFn: createNewFeedback,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["feedback"] });
			navigate("/");
		},
	});

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

	const randomId = generateRandomId();

	const submitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		const feedbackData = {
			...data,
			id: randomId,
			upvotes: 0,
			comments: [],
			status: "suggestion",
			author: currentUserData,
		};

		mutate(feedbackData);
	};

	return (
		<FeedbackFormLayout>
			<form onSubmit={submitFormHandler} className="space-y-4">
				<p className="py-4 font-bold text-2xl text-c-dark-blue">
					Create New Feedback
				</p>
				<div className="flex flex-col space-y-2">
					<label htmlFor="title">
						<p className="text-sm font-bold text-c-dark-blue">Feedback Title</p>
						<p className="text-sm text-c-dark-gray">
							Add a short, descriptive headline
						</p>
					</label>
					<input
						type="text"
						name="title"
						id="title"
						className="p-3 rounded-md bg-c-light-gray"
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
						className="p-3 rounded-md bg-c-light-gray">
						<option value="feature">Feature</option>
						<option value="ui">UI</option>
						<option value="ux">UX</option>
						<option value="enhancement">Enhancement</option>
						<option value="bug">Bug</option>
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
					/>
				</div>
				{utilityContent}
				{!isPending && (
					<div className="flex justify-end pt-8 space-x-4">
						<LinkButton linkTo=".." color="dark-blue" text="Cancel" />
						<GenericButton text="Add Feedback" color="magenta" />
					</div>
				)}
			</form>
		</FeedbackFormLayout>
	);
};

export default NewFeedbackForm;
