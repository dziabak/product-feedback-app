// REACT
import { useNavigate } from "react-router-dom";
// LIBRARIES
import { useMutation } from "@tanstack/react-query";
// DATA
import { queryClient, createNewFeedback } from "../../lib/http";
// HOOKS
import useCurrentUserData from "../../hooks/useCurrentUserData";
// HELPERS
import { generateRandomId } from "../../utils/helpers";
// COMPONENTS
import FeedbackFormLayout from "./FeedbackFormLayout";
import FormHeader from "./form-components/FormHeader";
import FormTitle from "./form-components/FormTitle";
import FormCategory from "./form-components/FormCategory";
import FormDetails from "./form-components/FormDetails";
import LinkButton from "../ui/LinkButton";
import GenericButton from "../ui/GenericButton";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBlock from "../ui/ErrorBlock";

const NewFeedbackForm = () => {
	let utilityContent!: JSX.Element;

	const navigate = useNavigate();

	const currentUserData = useCurrentUserData();

	const { mutate, isPending, isError } = useMutation({
		mutationFn: createNewFeedback,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["feedback", "suggestions"] });
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
				<FormHeader text="Create New Feedback" />
				<FormTitle />
				<FormCategory />
				<FormDetails />

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
