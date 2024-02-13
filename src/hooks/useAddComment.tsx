import { useMutation } from "@tanstack/react-query";
import useCurrentUserData from "./useCurrentUserData";
import { queryClient } from "../lib/http";

const useAddComment = (
	mutationFn: (variables: any) => Promise<any>,
	commentData: Record<string, any>,
	mutationObject: Record<string, any>,
	textAreaRef: React.RefObject<HTMLTextAreaElement>,
	setCharacterCount: React.Dispatch<React.SetStateAction<number>>,
	characterCountBaseValue: number,
	onSuccessAction?: () => void,
) => {
	const currentUserData = useCurrentUserData();

	const { mutate } = useMutation({
		mutationFn: mutationFn,
		onSuccess: () => {
			textAreaRef.current!.value = "";
			setCharacterCount(characterCountBaseValue);
			queryClient.invalidateQueries();
			onSuccessAction!();
		},
	});

	const addCommentHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		const comment = {
			...data,
			...commentData,
			user: currentUserData,
		};
		mutate({ ...mutationObject, comment: comment });
	};
	return { addCommentHandler };
};

export default useAddComment;
