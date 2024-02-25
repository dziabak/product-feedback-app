// REACT
import { useNavigate, useParams } from "react-router-dom";
// LIBRARIES
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// TYPES
import { feedbackFormSchema, TFeedbackFormSchema } from "../../types/types";
// DATA
import {
	queryClient,
	fetchFeedbackItemData,
	editFeedback,
} from "../../lib/http";
// COMPONENTS
import FeedbackFormModal from "./ui/FeedbackFormModal";
import FormHeader from "./ui/FormHeader";
import FormTitle from "./form-components/inputs/FormTitle";
import FormCategory from "./form-components/inputs/FormCategory";
import FormStatus from "./form-components/inputs/FormStatus";
import FormDescription from "./form-components/inputs/FormDescription";
import LoadingText from "../ui/LoadingText";
import ErrorBlock from "../ui/ErrorBlock";
import LinkButton from "../ui/LinkButton";
import GenericButton from "../ui/GenericButton";

const EditFeedbackForm = () => {
	const navigate = useNavigate();
	const params = useParams();

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

	const onSubmit = (data: TFeedbackFormSchema) => {
		mutate({ id: params.feedbackId, formData: data });
	};

	if (isPending) {
		utilityContent = <LoadingText text="Loading data..." />;
	}

	if (isError) {
		utilityContent = (
			<ErrorBlock
				small
				errorHeader="There was an error while loading the data"
				errorMessage="Please try again later"
			/>
		);
	}

	if (isPendingEdit) {
		utilityContent = <LoadingText text="Submitting updated data..." />;
	}

	if (isErrorEdit) {
		utilityContent = (
			<ErrorBlock
				small
				errorHeader="There was an error while editing the data"
				errorMessage="Please try again later"
			/>
		);
	}

	let defaultValues = {
		title: "",
		category: "",
		status: "",
		description: "",
	};

	let title = "";

	if (data) {
		title = data[0].title;

		defaultValues = {
			title: data[0].title,
			category: data[0].category,
			status: data[0].status,
			description: data[0].description,
		};
	}

	const {
		register,
		watch,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<TFeedbackFormSchema>({
		defaultValues: defaultValues,
		resolver: zodResolver(feedbackFormSchema),
	});

	return (
		<FeedbackFormModal isPending={isPendingEdit}>
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<FormHeader text={`Editing "${title}"`} />
				<FormTitle register={register("title")} errors={errors} />
				<FormCategory control={control} />
				<FormStatus control={control} />
				<FormDescription
					register={register("description")}
					watch={watch}
					errors={errors}
				/>
				{utilityContent}
				{!isPendingEdit && (
					<div className="flex flex-col-reverse pt-8 space-y-4 space-y-reverse md:flex-row md:justify-between md:space-y-0 md:space-x-4">
						<GenericButton disabled text="Delete" color="red" mobile />
						<div className="flex flex-col-reverse space-y-4 space-y-reverse md:flex-row md:space-y-0 md:space-x-4">
							<LinkButton linkTo=".." text="Cancel" color="dark-blue" mobile />
							<GenericButton text="Save changes" color="magenta" mobile />
						</div>
					</div>
				)}
			</form>
		</FeedbackFormModal>
	);
};

export default EditFeedbackForm;
