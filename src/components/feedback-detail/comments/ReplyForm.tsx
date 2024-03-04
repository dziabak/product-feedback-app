// LIBRARIES
import clsx from "clsx";
// DATA
import { addCommentReply } from "../../../lib/http";
// HOOKS
import useAddComment from "../../../hooks/useAddComment";
import useReplyFormAnimation from "../../../hooks/useReplyFormAnimation";
// COMPONENTS
import GenericButton from "../../ui/buttons/GenericButton";

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
		remainingCharacters,
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
				"flex flex-col items-start space-y-4 transition-all duration-300 md:flex-row md:space-y-0 md:space-x-4 md:ml-20",
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
						"min-h-24 max-h-32 w-full p-6 rounded-[10px] text-sm bg-c-light-gray outline-none border border-c-light-gray focus:border-c-light-blue md:text-base",
						!errors.content && "caret-c-light-blue",
						errors.content &&
							"outline-none border border-c-red focus:border-c-red caret-c-red"
					)}></textarea>
				{errors.content && (
					<p className="mb-4 text-sm text-c-red">{errors.content.message}</p>
				)}
				<p className="text-sm text-c-dark-gray md:text-base">
					{remainingCharacters} characters left
				</p>
			</div>
			<GenericButton text="Post Reply" color="magenta" mobile />
		</form>
	);
};

export default ReplyForm;
