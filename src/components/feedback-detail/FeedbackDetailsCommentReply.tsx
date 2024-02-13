import { useToggle } from "usehooks-ts";
import { addCommentReply } from "../../lib/http";
import useCharacterCountLimit from "../../hooks/useCharacterCountLimit";
import useAddComment from "../../hooks/useAddComment";

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
			<div className="flex items-start mt-8 ml-20">
				<img src={image} alt="User photo" className="w-12 mr-8 rounded-full" />
				<div className="w-full space-y-4">
					<div className="flex items-center justify-between">
						<div>
							<p className="font-bold">{name}</p>
							<p className="text-sm text-c-dark-gray">{username}</p>
						</div>
						<button
							onClick={toggleIsReplying}
							className="text-sm font-bold text-c-light-blue hover:text-c-light-blue/75">
							Reply
						</button>
					</div>
					<p className="text-c-dark-gray break-all">
						<span className="font-bold text-c-magenta">{replyingTo} </span>
						{content}
					</p>
				</div>
			</div>
			{isReplying && (
				<form
					id="content"
					onSubmit={addCommentHandler}
					className="flex flex-col items-start mt-8 ml-40 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
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
			)}
		</div>
	);
};

export default FeedbackDetailsCommentReply;
