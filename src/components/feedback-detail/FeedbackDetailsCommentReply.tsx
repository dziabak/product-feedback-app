// LIBRARIES
import { useToggle } from "usehooks-ts";
// COMPONENTS
import ReplyForm from "./ReplyForm";
import CommentUserInfo from "./CommentUserInfo";

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

	return (
		<div>
			<div className="flex items-start mt-8">
			<CommentUserInfo
					image={image}
					name={name}
					username={username}
					content={content}
					replyingTo={replyingTo}
					toggleIsReplying={toggleIsReplying}
				/>
			</div>
			{isReplying && (
				<ReplyForm
					isReplying={isReplying}
					toggleIsReplying={toggleIsReplying}
					username={username}
					postId={postId}
					commentId={commentId}
				/>
			)}
		</div>
	);
};

export default FeedbackDetailsCommentReply;
