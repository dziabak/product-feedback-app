// EXTERNAL IMPORTS
import { useMutation } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { createNewFeedback } from "../../lib/http";
import { generateRandomId } from "../../utils/helpers";
import LinkButton from "../ui/LinkButton";
import GenericButton from "../ui/GenericButton";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBlock from "../ui/ErrorBlock";

const NewFeedbackForm = () => {
	let utilityContent!: JSX.Element;

	const { mutate, isPending, isError } = useMutation({
		mutationFn: createNewFeedback,
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
		};

		mutate(feedbackData);
	};

	return (
		<div className="p-8 rounded-lg bg-white w-[540px]">
			<form onSubmit={submitFormHandler} className="space-y-4">
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
						<option value="UI">UI</option>
						<option value="UX">UX</option>
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
		</div>
	);
};

export default NewFeedbackForm;
