import { useMutation } from "@tanstack/react-query";
import useCurrentUserData from "./useCurrentUserData";
import { queryClient } from "../lib/http";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const useAddComment = (
	mutationFn: (variables: any) => Promise<any>,
	commentData: Record<string, any>,
	mutationObject: Record<string, any>,
	onSuccessAction?: () => void
) => {
	const currentUserData = useCurrentUserData();

	const characterCountBaseValue = 250;
	let currentCharacterCount!: number;

	const commentSchema = z.object({
		content: z.string().min(1, "This can't be empty!").max(250),
	});

	type TCommentSchema = z.infer<typeof commentSchema>;

	const { mutate } = useMutation({
		mutationFn: mutationFn,
		onSuccess: () => {
			reset();
			queryClient.invalidateQueries();
			onSuccessAction!();
		},
	});

	const onSubmit = (data: TCommentSchema) => {
		const comment = {
			...data,
			...commentData,
			user: currentUserData,
		};
		mutate({ ...mutationObject, comment: comment });
	};

	const {
		register,
		reset,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm<TCommentSchema>({ resolver: zodResolver(commentSchema) });

	if (watch("content") !== undefined) {
		currentCharacterCount = watch("content").length;
	}

	return {
		register,
		handleSubmit,
		onSubmit,
		errors,
		characterCountBaseValue,
		currentCharacterCount,
	};
};

export default useAddComment;
