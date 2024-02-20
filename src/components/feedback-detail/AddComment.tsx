// LIBRARIES
import clsx from "clsx";
// DATA
import { addNewComment } from "../../lib/http";
// HOOKS
import useAddComment from "../../hooks/useAddComment";
// HELPERS
import { generateRandomId } from "../../utils/helpers";

const AddComment = ({ id }: { id: string | undefined }) => {
	const {
		register,
		handleSubmit,
		onSubmit,
		errors,
		characterCountBaseValue,
		currentCharacterCount,
	} = useAddComment(addNewComment, { id: generateRandomId() }, { id: id });

	return (
		<div className="mt-4 pb-12">
			<form
				id="content"
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col px-8 py-4 rounded-lg bg-white">
				<p className="mb-8 text-lg font-bold text-c-dark-blue">Add Comment</p>
				<textarea
					{...register("content")}
					name="content"
					id="content"
					maxLength={characterCountBaseValue}
					placeholder="Type your comment here"
					className={clsx(
						"p-6 rounded-md bg-c-light-gray min-h-24 max-h-32 border border-c-light-gray outline-none focus:border-c-light-blue",
						errors.content &&
							"outline-none border border-c-red focus:border-transparent focus:ring focus:ring-c-red caret-c-red"
					)}
				/>
				{errors.content && (
					<p className="mt-3 text-sm text-c-red">{errors.content.message}</p>
				)}
				<div className="flex items-center justify-between py-8">
					<p className="text-c-dark-gray">
						{characterCountBaseValue - currentCharacterCount} characters left
					</p>
					<button className="px-6 py-3 text-sm font-bold transition-colors rounded-lg bg-c-magenta text-white hover:bg-c-magenta/75">
						Post Comment
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddComment;
