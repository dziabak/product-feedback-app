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
import FeedbackFormModal from "./ui/FeedbackFormModal";
import FormHeader from "./ui/FormHeader";
import FormTitle from "./form-components/inputs/FormTitle";
import FormCategory from "./form-components/inputs/FormCategory";
import FormDescription from "./form-components/inputs/FormDescription";
import LoadingText from "../ui/loading/LoadingText";
import ErrorBlock from "../ui/errors/ErrorBlock";
import LinkButton from "../ui/buttons/LinkButton";
import GenericButton from "../ui/buttons/GenericButton";

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
		utilityContent = <LoadingText text="Submitting data..." />;
	}

	if (isError) {
		utilityContent = (
			<ErrorBlock
				small
				errorHeader="There was an error while submitting the data"
				errorMessage="Please try again later"
			/>
		);
	}

	const randomId = generateRandomId();

	const onSubmit = (data: TFeedbackFormSchema) => {
		const newFeedbackData = {
			...data,
			id: randomId,
			upvotes: 0,
			comments: [],
			status: "suggestion",
			author: currentUserData,
		};
		mutate(newFeedbackData);
	};

	const {
		register,
		watch,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<TFeedbackFormSchema>({
		defaultValues: { category: "feature" },
		resolver: zodResolver(feedbackFormSchema),
	});

	return (
		<FeedbackFormModal isPending={isPending}>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<FormHeader text="Create New Feedback" />
				<FormTitle register={register("title")} errors={errors} />
				<FormCategory control={control} />
				<FormDescription
					register={register("description")}
					watch={watch}
					errors={errors}
				/>

				{utilityContent}
				{!isPending && (
					<div className="flex flex-col-reverse justify-end pt-4 space-y-4 space-y-reverse md:flex-row md:space-y-0 md:space-x-4">
						<LinkButton
							cy="form-cancel-btn"
							linkTo=".."
							text="Cancel"
							color="dark-blue"
							mobile
						/>
						<GenericButton
							cy="form-send-btn"
							text="Add Feedback"
							color="magenta"
							mobile
						/>
					</div>
				)}
			</form>
		</FeedbackFormModal>
	);
};

export default NewFeedbackForm;
