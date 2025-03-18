// REACT
import { forwardRef, ForwardedRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
// LIBRARIES
import { useMutation } from "@tanstack/react-query";
// DATA
import { queryClient, deleteFeedback } from "../../lib/http";
// COMPONENTS
import GenericButton from "../ui/buttons/GenericButton";

const DeleteFeedbackModal = forwardRef(
	(_, ref: ForwardedRef<HTMLDialogElement>) => {
		const navigate = useNavigate();
		const params = useParams();

		const {
			mutate: mutateDeleting,
			isPending: isPendingDeleting,
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

		const handleStopDelete: React.MouseEventHandler<HTMLButtonElement> = (
			e
		) => {
			e.preventDefault();
			(ref as React.RefObject<HTMLDialogElement>).current?.close();
		};

		const handleDeleteFeedback: React.MouseEventHandler<HTMLButtonElement> = (
			e
		) => {
			e.preventDefault();
			mutateDeleting({ id: params.feedbackId });
		};

		return (
			<dialog
				ref={ref}
				className=" fixed p-8 space-y-2 bg-c-light-gray rounded-[10px] backdrop:bg-c-dark-blue/50 backdrop:backdrop-blur">
				<div className="mb-4">
					<p className="text-center font-bold text-lg text-c-dark-blue">
						Do you want to delete this feedback?
					</p>
					<p className="text-center text-base text-c-dark-blue">
						This action cannot be reverted!
					</p>
				</div>
				{isPendingDeleting && <p>Deleting. Please wait...</p>}
				{!isPendingDeleting && (
					<div className="flex flex-col space-y-4 md:flex-row md:justify-evenly md:space-y-0">
						<GenericButton
							onClick={handleStopDelete}
							color="dark-blue"
							text="Cancel"
							mobile
						/>
						<GenericButton
						cy="delete-action-btn"
							onClick={handleDeleteFeedback}
							color="red"
							text="Delete"
							mobile
						/>
					</div>
				)}
				{isErrorDeleting && <p>There was an error. Please try again later.</p>}
			</dialog>
		);
	}
);

export default DeleteFeedbackModal;
