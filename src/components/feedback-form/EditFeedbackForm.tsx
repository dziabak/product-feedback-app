// REACT
import { useState, useEffect, useRef } from "react";
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
// HOOKS
import useCurrentUserData from "../../hooks/useCurrentUserData";
// COMPONENTS
import FeedbackFormModal from "./ui/FeedbackFormModal";
import FormHeader from "./ui/FormHeader";
import FormTitle from "./form-components/inputs/FormTitle";
import FormCategory from "./form-components/inputs/FormCategory";
import FormStatus from "./form-components/inputs/FormStatus";
import FormDescription from "./form-components/inputs/FormDescription";
import LoadingText from "../ui/loading/LoadingText";
import ErrorBlock from "../ui/errors/ErrorBlock";
import LinkButton from "../ui/buttons/LinkButton";
import GenericButton from "../ui/buttons/GenericButton";
import DeleteFeedbackModal from "./DeleteFeedbackModal";

const EditFeedbackForm = () => {
	let utilityContent!: JSX.Element;

	const navigate = useNavigate();
	const params = useParams();

	const currentUserData = useCurrentUserData();

	const [canDelete, setCanDelete] = useState(false);

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
			queryClient.invalidateQueries({
				// queryKey: ["feedbackItem"],
				refetchType: "all",
			});
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

	let title = "";

	if (data) {
		title = data[0].title;
	}

	useEffect(() => {
		if (data && currentUserData) {
			const authorUsername = data[0].author.username;
			const currentUserUsername = currentUserData.username;

			setCanDelete(authorUsername === currentUserUsername);
		}
	}, [data, currentUserData]);

	const {
		register,
		watch,
		control,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<TFeedbackFormSchema>({
		// defaultValues: defaultValues,
		resolver: zodResolver(feedbackFormSchema),
	});

	useEffect(() => {
		if (data) {
			setValue("title", data[0].title);
			setValue("category", data[0].category);
			setValue("status", data[0].status);
			setValue("description", data[0].description);
		}
	}, [data, setValue]);

	const dialogRef = useRef<HTMLDialogElement>(null);

	const handleStartDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		dialogRef.current?.showModal();
	};

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
					<div className="flex flex-col-reverse pt-4 space-y-4 space-y-reverse md:flex-row md:justify-between md:space-y-0 md:space-x-4 md:pt-8">
						{canDelete ? (
							<GenericButton
							cy="delete-feedback-btn"
								onClick={handleStartDelete}
								text="Delete"
								color="red"
								mobile
							/>
						) : (
							<GenericButton disabled text="Delete" color="red" mobile />
						)}
						<div className="flex flex-col-reverse space-y-4 space-y-reverse md:flex-row md:space-y-0 md:space-x-4">
							<LinkButton linkTo=".." text="Cancel" color="dark-blue" mobile />
							<GenericButton
								cy="edit-action-btn"
								text="Save changes"
								color="magenta"
								mobile
							/>
						</div>
					</div>
				)}
				<DeleteFeedbackModal ref={dialogRef} />
				{!canDelete && (
					<p className="text-sm text-c-dark-blue">
						Only author can delete feedback
					</p>
				)}
			</form>
		</FeedbackFormModal>
	);
};

export default EditFeedbackForm;
