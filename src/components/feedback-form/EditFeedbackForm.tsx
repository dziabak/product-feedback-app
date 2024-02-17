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
import FormHeader from "./form-components/FormHeader";
import FormTitle from "./form-components/FormTitle";
import FormCategory from "./form-components/FormCategory";
import FormStatus from "./form-components/FormStatus";
import FormDetails from "./form-components/FormDetails";
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
			navigate("..");
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
			<form onSubmit={editFormHandler} className="space-y-4">
				<FormHeader text={`Editing "${data[0].title}"`} />
				<FormTitle defaultValue={data[0].title} />
				<FormCategory defaultValue={data[0].category} />
				<FormStatus defaultValue={data[0].status} />
				<FormDetails defaultValue={data[0].description} />

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
						There was an error while updating the data. Please try again later.
					</p>
				)}
			</form>
		);
	}

	return <FeedbackFormLayout>{content}</FeedbackFormLayout>;
};

export default EditFeedbackForm;
