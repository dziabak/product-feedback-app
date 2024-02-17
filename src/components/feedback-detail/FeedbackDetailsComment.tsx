// LIBRARIES
import { useToggle } from "usehooks-ts";
// DATA
import { addCommentReply } from "../../lib/http";
//HOOKS
import useAddComment from "../../hooks/useAddComment";
import useCharacterCountLimit from "../../hooks/useCharacterCountLimit";
// HELPERS
import { generateRandomId } from "../../utils/helpers";
// COMPONENTS
import FeedbackDetailsCommentReply from "./FeedbackDetailsCommentReply";
import ReplyForm from "./ReplyForm";

const FeedbackDetailsComment = ({
	image,
	name,
	username,
	content,
	replyData,
	commentId,
	postId,
}: {
	image: string;
	name: string;
	username: string;
	content: string;
	replyData?:
		| {
				content: string;
				replyingTo: string;
				user: { image: string; name: string; username: string };
		  }[];
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
		<div className="w-full py-8 border-b last:border-0">
			<div className="flex items-start w-full">
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
					<p className="text-c-dark-gray text-wrap">{content}</p>
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
			<div className="ml-14">
				{replyData !== undefined &&
					replyData.map((item) => (
						<FeedbackDetailsCommentReply
							key={generateRandomId()}
							content={item.content}
							replyingTo={item.replyingTo}
							image={item.user.image}
							name={item.user.name}
							username={item.user.username}
							commentId={commentId}
							postId={postId}
						/>
					))}
			</div>
		</div>
	);
};

export default FeedbackDetailsComment;
