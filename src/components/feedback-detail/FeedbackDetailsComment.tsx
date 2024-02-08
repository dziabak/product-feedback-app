// import { useState } from "react";
import { useToggle } from "usehooks-ts";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../lib/http";
import { addCommentReply } from "../../lib/http";
import FeedbackDetailsCommentReply from "./FeedbackDetailsCommentReply";

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
	postId: string;
}) => {
	// console.log(replyData);
	// const [isReplying, setIsReplying] = useState(false);
	const [isReplying, toggleIsReplying] = useToggle();

	const { mutate } = useMutation({
		mutationFn: addCommentReply,
		onSuccess: () => {
			// textAreaRef.current!.value = "";
			// setCharacterCount(characterCountBaseValue);
			queryClient.invalidateQueries();
		},
	});

	const postReplyHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData);
		const reply = {
			...data,
			replyingTo: username,
			user: {
				image: "../assets/user-images/image-zena.jpg",
				name: "Zena Kelley",
				username: "velvetround",
			},
		};
		// console.log(reply);
		mutate({ postId: postId, commentId: commentId, commentReply: reply });
	};

	return (
		<div className="w-full py-8 border-b last:border-0">
			<div className="flex items-start">
				<img src={image} alt="User photo" className="w-12 mr-8 rounded-full" />
				<div className="space-y-4">
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
					<p className="text-c-dark-gray">{content}</p>
				</div>
			</div>
			{isReplying && (
				<form id="content" onSubmit={postReplyHandler}>
					<textarea
						name="content"
						id="content"
						className="p-6 rounded-md bg-c-light-gray max-h-32"></textarea>
					<button className="px-6 py-3 text-sm font-bold transition-colors rounded-lg bg-c-magenta text-white hover:bg-c-magenta/75">
						Post Reply
					</button>
				</form>
			)}
			{replyData !== undefined &&
				replyData.map((item) => (
					<FeedbackDetailsCommentReply
						key={item.content}
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
	);
};

export default FeedbackDetailsComment;
