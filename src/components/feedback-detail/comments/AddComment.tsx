// LIBRARIES
import clsx from "clsx";
// DATA
import { addNewComment } from "../../../lib/http";
// HOOKS
import useAddComment from "../../../hooks/useAddComment";
// HELPERS
import { generateRandomId } from "../../../utils/helpers";
// COMPONENTS
import GenericButton from "../../ui/buttons/GenericButton";

const AddComment = ({ id }: { id: string | undefined }) => {
	const {
		register,
		handleSubmit,
		onSubmit,
		errors,
		characterCountBaseValue,
		remainingCharacters,
	} = useAddComment(addNewComment, { id: generateRandomId() }, { id: id });

	return (
		<section className="mt-6 pb-12 md:mt-4">
			<form
				id="content"
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col p-8 rounded-[10px] bg-white">
				<p className="mb-8 text-lg font-bold tracking-tight text-c-dark-blue">
					Add Comment
				</p>
				<textarea
					{...register("content")}
					name="content"
					id="content"
					maxLength={characterCountBaseValue}
					placeholder="Type your comment here"
					className={clsx(
						"min-h-24 max-h-32 p-6 rounded-[10px] text-sm bg-c-light-gray outline-none border border-c-light-gray focus:border-c-light-blue md:text-base",
						!errors.content && "caret-c-light-blue",
						errors.content &&
							"outline-none border border-c-red focus:border-c-red caret-c-red"
					)}
				/>
				{errors.content && (
					<p className="mt-3 text-sm text-c-red">{errors.content.message}</p>
				)}
				<div className="flex flex-col pt-8 space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
					<p className="text-sm text-c-dark-gray md:text-base">
						{remainingCharacters} characters left
					</p>
					<GenericButton text="Post Comment" color="magenta" />
				</div>
			</form>
		</section>
	);
};

export default AddComment;
