// REACT
import { useNavigate } from "react-router-dom";
// LIBRARIES
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// TYPES
import { feedbackFormSchema, TFeedbackFormSchema } from "../../types/types";
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
import FormDescription from "./form-components/FormDescription";
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

	const onSubmit = (data: TFeedbackFormSchema) => {
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

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TFeedbackFormSchema>({
		resolver: zodResolver(feedbackFormSchema),
	});

	return (
		<FeedbackFormLayout>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<FormHeader text="Create New Feedback" />
				<FormTitle register={register("title")} errors={errors} />
				<FormCategory register={register("category")} errors={errors} />
				<FormDescription register={register("description")} errors={errors} />

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
