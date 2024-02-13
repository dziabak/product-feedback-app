// BUILT-IN IMPORTS
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addNewComment } from "../../lib/http";
import { queryClient } from "../../lib/http";
import { generateRandomId } from "../../utils/helpers";
// INTERNAL IMPORTS
// import GenericButton from "../ui/GenericButton";
import useCurrentUserData from "../../hooks/useCurrentUserData";

const AddComment = ({ id }: { id: string | undefined }) => {
	const characterCountBaseValue = 250;
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [characterCount, setCharacterCount] = useState(characterCountBaseValue);

	const currentUserData = useCurrentUserData();

	const { mutate } = useMutation({
		mutationFn: addNewComment,
		onSuccess: () => {
			textAreaRef.current!.value = "";
			setCharacterCount(characterCountBaseValue);
			queryClient.invalidateQueries();
		},
	});

	const textAreaInputHandler = () => {
		if (characterCount > textAreaRef.current!.value.length) {
			setCharacterCount(
				characterCountBaseValue - textAreaRef.current!.value.length
			);
		} else if (textAreaRef.current!.value.length <= 0) {
			setCharacterCount(characterCountBaseValue);
		} else {
			setCharacterCount((prevState) => prevState - 1);
		}
	};

	const postCommentHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		const comment = {
			...data,
			id: generateRandomId(),
			user: currentUserData,
		};
		// console.log(comment);
		mutate({ id: id, comment: comment });
	};

	// console.log(id);

	return (
		<div className="mt-4 pb-12">
			<form
				id="content"
				onSubmit={postCommentHandler}
				className="flex flex-col px-8 py-4 rounded-lg bg-white">
				<p className="mb-8 text-lg font-bold">Add Comment</p>
				<textarea
					ref={textAreaRef}
					onChange={textAreaInputHandler}
					name="content"
					id="content"
					minLength={1}
					maxLength={characterCountBaseValue}
					className="p-6 rounded-md bg-c-light-gray max-h-32"
					placeholder="Type your comment here"
				/>
				<div className="flex items-center justify-between py-8">
					<p className="text-c-dark-gray">{characterCount} characters left</p>
					{/* <GenericButton text="Post Comment" color="magenta" /> */}
					<button className="px-6 py-3 text-sm font-bold transition-colors rounded-lg bg-c-magenta text-white hover:bg-c-magenta/75">
						Post Comment
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddComment;
