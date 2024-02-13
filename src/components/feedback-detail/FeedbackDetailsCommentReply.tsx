import { useToggle } from "usehooks-ts";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../lib/http";
import { addCommentReply } from "../../lib/http";
import { useRef } from "react";

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
	const replyRef = useRef<HTMLTextAreaElement>(null);
	const [isReplying, toggleIsReplying] = useToggle();

	const { mutate } = useMutation({
		mutationFn: addCommentReply,
		onSuccess: () => {
			replyRef.current!.value = "";
			toggleIsReplying();
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
					<p className="text-c-dark-gray">
						<span className="font-bold text-c-magenta">{replyingTo} </span>
						{content}
					</p>
				</div>
			</div>
			{isReplying && (
				<form
					id="content"
					onSubmit={postReplyHandler}
					className="flex flex-col items-start mt-8 ml-40 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
					<textarea
						ref={replyRef}
						name="content"
						id="content"
						className="max-h-24 w-full p-6 rounded-md bg-c-light-gray"></textarea>
					<button className="w-full px-6 py-3 text-sm font-bold whitespace-nowrap transition-colors rounded-lg bg-c-magenta text-white hover:bg-c-magenta/75 md:w-fit">
						Post Reply
					</button>
				</form>
			)}
		</div>
	);
};

export default FeedbackDetailsCommentReply;
