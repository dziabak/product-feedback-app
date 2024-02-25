// LIBRARIES
import { useToggle } from "usehooks-ts";
// COMPONENTS
import ReplyForm from "./ReplyForm";
import CommentData from "./CommentData";

const ReplyComponent = ({
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
				<CommentData
					image={image}
					name={name}
					username={username}
					content={content}
					replyingTo={replyingTo}
					toggleIsReplying={toggleIsReplying}
				/>
			</div>
			{isReplying && (
				<ReplyForm username={username} postId={postId} commentId={commentId} />
			)}
		</div>
	);
};

export default ReplyComponent;
