// BUILT-IN IMPORTS
import { useMutation } from "@tanstack/react-query";
import { addNewComment } from "../../lib/http";
import { queryClient } from "../../lib/http";
import { generateRandomId } from "../../utils/helpers";
// INTERNAL IMPORTS
import useCurrentUserData from "../../hooks/useCurrentUserData";
import useCharacterCountLimit from "../../hooks/useCharacterCountLimit";

const AddComment = ({ id }: { id: string | undefined }) => {
	const currentUserData = useCurrentUserData();

	const {
		textAreaRef,
		textAreaInputHandler,
		characterCount,
		characterCountBaseValue,
		setCharacterCount,
	} = useCharacterCountLimit();

	const { mutate } = useMutation({
		mutationFn: addNewComment,
		onSuccess: () => {
			textAreaRef.current!.value = "";
			setCharacterCount(characterCountBaseValue);
			queryClient.invalidateQueries();
		},
	});

	const postCommentHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		const comment = {
			...data,
			id: generateRandomId(),
			user: currentUserData,
		};
		mutate({ id: id, comment: comment });
	};

	return (
		<div className="mt-4 pb-12">
			<form
				id="content"
				onSubmit={postCommentHandler}
				className="flex flex-col px-8 py-4 rounded-lg bg-white">
				<p className="mb-8 text-lg font-bold">Add Comment</p>
				<textarea
					name="content"
					id="content"
					ref={textAreaRef}
					onChange={textAreaInputHandler}
					minLength={1}
					maxLength={characterCountBaseValue}
					placeholder="Type your comment here"
					className="p-6 rounded-md bg-c-light-gray min-h-24 max-h-32"
				/>
				<div className="flex items-center justify-between py-8">
					<p className="text-c-dark-gray">{characterCount} characters left</p>
					<button className="px-6 py-3 text-sm font-bold transition-colors rounded-lg bg-c-magenta text-white hover:bg-c-magenta/75">
						Post Comment
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddComment;
