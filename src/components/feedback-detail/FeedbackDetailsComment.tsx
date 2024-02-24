// LIBRARIES
import { useToggle } from "usehooks-ts";
// HELPERS
import { generateRandomId } from "../../utils/helpers";
// COMPONENTS
import FeedbackDetailsCommentReply from "./FeedbackDetailsCommentReply";
import ReplyForm from "./ReplyForm";
import CommentUserInfo from "./CommentUserInfo";

const FeedbackDetailsComment = ({
	image,
	name,
	username,
	content,
	replyData,
	postId,
	commentId,
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
	postId: string | undefined;
	commentId: string;
}) => {
	const [isReplying, toggleIsReplying] = useToggle();

	return (
		<div className="w-full py-8 border-b first-of-type:pt-0 last:border-0 last:pb-0">
			<div className="flex items-start w-full">
				<CommentUserInfo
					image={image}
					name={name}
					username={username}
					content={content}
					toggleIsReplying={toggleIsReplying}
				/>
			</div>
			{isReplying && (
				<ReplyForm username={username} postId={postId} commentId={commentId} />
			)}
			<div className="ml-6 md:ml-14">
				{replyData !== undefined &&
					replyData.map((item) => (
						<FeedbackDetailsCommentReply
							key={generateRandomId()}
							content={item.content}
							replyingTo={item.replyingTo}
							image={item.user.image}
							name={item.user.name}
							username={item.user.username}
							postId={postId}
							commentId={commentId}
						/>
					))}
			</div>
		</div>
	);
};

export default FeedbackDetailsComment;
