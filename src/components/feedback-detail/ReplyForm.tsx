// LIBRARIES
import clsx from "clsx";
// DATA
import { addCommentReply } from "../../lib/http";
// HOOKS
import useAddComment from "../../hooks/useAddComment";
import useReplyFormAnimation from "../../hooks/useReplyFormAnimation";

const ReplyForm = ({
	username,
	postId,
	commentId,
}: {
	username: string;
	postId: string | undefined;
	commentId: string;
}) => {
	const { isFormOpen, isOpacityApplied } = useReplyFormAnimation();

	const {
		register,
		handleSubmit,
		onSubmit,
		errors,
		characterCountBaseValue,
		currentCharacterCount,
	} = useAddComment(
		addCommentReply,
		{ replyingTo: username },
		{ postId: postId, commentId: commentId }
	);

	return (
		<form
			id="content"
			onSubmit={handleSubmit(onSubmit)}
			className={clsx(
				"flex flex-col items-start ml-20 space-y-4 transition-all duration-300 md:flex-row md:space-y-0 md:space-x-4",
				!isFormOpen && "opacity-0 -mt-48 md:-mt-32",
				isFormOpen && "opacity-0 mt-8",
				isOpacityApplied && "opacity-100"
			)}>
			<div className="w-full">
				<textarea
					{...register("content")}
					name="content"
					id="content"
					maxLength={characterCountBaseValue}
					placeholder="Type your comment here"
					className={clsx(
						"min-h-24 max-h-32 w-full p-6 rounded-md bg-c-light-gray border border-c-light-gray outline-none focus:border-c-light-blue",
						errors.content &&
							"outline-none border border-c-red focus:border-transparent focus:ring focus:ring-c-red caret-c-red"
					)}></textarea>
				{errors.content && (
					<p className="mb-4 text-sm text-c-red">{errors.content.message}</p>
				)}
				<p className="text-c-dark-gray">
					{characterCountBaseValue - currentCharacterCount} characters left
				</p>
			</div>
			<button className="w-full px-6 py-3 text-sm font-bold whitespace-nowrap transition-colors rounded-lg bg-c-magenta text-white hover:bg-c-magenta/75 md:w-fit">
				Post Reply
			</button>
		</form>
	);
};

export default ReplyForm;
