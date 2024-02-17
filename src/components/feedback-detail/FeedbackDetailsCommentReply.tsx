// LIBRARIES
import { useToggle } from "usehooks-ts";
// HOOKS
import useAddComment from "../../hooks/useAddComment";
import useCharacterCountLimit from "../../hooks/useCharacterCountLimit";
// HELPERS
import { addCommentReply } from "../../lib/http";
// COMPONENTS
import ReplyForm from "./ReplyForm";

const FeedbackDetailsCommentReply = ({
	image,
	name,
	username,
	content,
	replyingTo,
	commentId,
	postId,
}: {
	image: string;
	name: string;
	username: string;
	content: string;
	replyingTo: string;
	commentId: string;
	postId: string | undefined;
}) => {
	const [isReplying, toggleIsReplying] = useToggle();

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
		<div>
			<div className="flex items-start mt-8">
				<img src={image} alt="User photo" className="w-12 rounded-full" />
				<div className="w-full ml-8 space-y-4">
					<div className="flex items-center justify-between">
						<div>
							<p className="font-bold text-c-dark-blue">{name}</p>
							<p className="text-sm text-c-dark-gray">{username}</p>
						</div>
						<button
							onClick={toggleIsReplying}
							className="text-sm font-bold text-c-light-blue hover:text-c-light-blue/75">
							Reply
						</button>
					</div>
					<p className="text-c-dark-gray text-wrap">
						<span className="font-bold text-c-magenta">{replyingTo} </span>
						{content}
					</p>
				</div>
			</div>
			{isReplying && (
				<ReplyForm
					addCommentHandler={addCommentHandler}
					characterCount={characterCount}
					characterCountBaseValue={characterCountBaseValue}
					textAreaInputHandler={textAreaInputHandler}
					textAreaRef={textAreaRef}
				/>
			)}
		</div>
	);
};

export default FeedbackDetailsCommentReply;
