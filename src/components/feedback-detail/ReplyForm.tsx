// LIBRARIES
import clsx from "clsx";
// DATA
import { addCommentReply } from "../../lib/http";
// HOOKS
import useCharacterCountLimit from "../../hooks/useCharacterCountLimit";
import useAddComment from "../../hooks/useAddComment";
import useReplyFormAnimation from "../../hooks/useReplyFormAnimation";

const ReplyForm = ({
	isReplying,
	toggleIsReplying,
	username,
	postId,
	commentId,
}: {
	isReplying: boolean,
	toggleIsReplying: () => void,
	username: string,
	postId: string | undefined,
	commentId: string,
}) => {
	const { isFormOpen, isOpacityApplied } = useReplyFormAnimation();

	const {
		textAreaRef,
		textAreaInputHandler,
		characterCount,
		characterCountBaseValue,
		setCharacterCount,
	} = useCharacterCountLimit(isReplying);

	const { addCommentHandler } = useAddComment(
		addCommentReply,
		{ replyingTo: username },
		{ postId: postId, commentId: commentId },
		textAreaRef,
		setCharacterCount,
		characterCountBaseValue,
		toggleIsReplying
	);

	return (
		<form
			id="content"
			onSubmit={addCommentHandler}
			className={clsx(
				"flex flex-col items-start ml-20 space-y-4 transition-all duration-300 md:flex-row md:space-y-0 md:space-x-4",
				!isFormOpen && "opacity-0 -mt-48 md:-mt-32",
				isFormOpen && "opacity-0 mt-8",
				isOpacityApplied && "opacity-100"
			)}>
			<div className="w-full">
				<textarea
					name="content"
					id="content"
					ref={textAreaRef}
					onChange={textAreaInputHandler}
					minLength={1}
					maxLength={characterCountBaseValue}
					placeholder="Type your comment here"
					className="min-h-24 max-h-32 w-full p-6 rounded-md bg-c-light-gray"></textarea>
				<p className="text-c-dark-gray">{characterCount} characters left</p>
			</div>
			<button className="w-full px-6 py-3 text-sm font-bold whitespace-nowrap transition-colors rounded-lg bg-c-magenta text-white hover:bg-c-magenta/75 md:w-fit">
				Post Reply
			</button>
		</form>
	);
};

export default ReplyForm;
