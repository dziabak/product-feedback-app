// BUILT-IN IMPORTS
import { useRef, useState } from "react";
// INTERNAL IMPORTS
import GenericButton from "../ui/GenericButton";

const AddComment = () => {
	const characterCountBaseValue = 250;
	const textAreaRef = useRef<HTMLTextAreaElement>(null);
	const [characterCount, setCharacterCount] = useState(characterCountBaseValue);

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
	};

	return (
		<div className="mt-4 pb-12">
			<form
				id="details"
				onSubmit={postCommentHandler}
				className="flex flex-col px-8 py-4 rounded-lg bg-white">
				<p className="mb-8 text-lg font-bold">Add Comment</p>
				<textarea
					ref={textAreaRef}
					onChange={textAreaInputHandler}
					name="details"
					id="details"
					minLength={50}
					maxLength={characterCountBaseValue}
					className="p-6 rounded-md bg-c-light-gray max-h-32"
					placeholder="Type your comment here"
				/>
				<div className="flex items-center justify-between py-8">
					<p className="text-c-dark-gray">{characterCount} characters left</p>
					<GenericButton text="Post Comment" color="magenta" />
				</div>
			</form>
		</div>
	);
};

export default AddComment;
