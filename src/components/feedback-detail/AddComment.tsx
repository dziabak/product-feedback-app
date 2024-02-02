// BUILT-IN IMPORTS
import { useRef, useState } from "react";

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

	return (
		<div className="mt-4 pb-12">
			<form
				id="details"
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
					<button className="px-6 py-3 text-sm font-bold transition-colors rounded-lg bg-c-magenta text-white hover:bg-c-magenta/75">
						Post Comment
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddComment;
