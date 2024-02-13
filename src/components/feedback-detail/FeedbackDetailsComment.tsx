// import { useState } from "react";
import { useToggle } from "usehooks-ts";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../lib/http";
import { addCommentReply } from "../../lib/http";
import FeedbackDetailsCommentReply from "./FeedbackDetailsCommentReply";
import clsx from "clsx";
import useCurrentUserData from "../../hooks/useCurrentUserData";
import useCharacterCountLimit from "../../hooks/useCharacterCountLimit";

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

	const currentUserData = useCurrentUserData();

	const {
		textAreaRef,
		textAreaInputHandler,
		characterCount,
		characterCountBaseValue,
		setCharacterCount,
	} = useCharacterCountLimit();

	const { mutate } = useMutation({
		mutationFn: addCommentReply,
		onSuccess: () => {
			textAreaRef.current!.value = "";
			toggleIsReplying();
			setCharacterCount(characterCountBaseValue);
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
			user: currentUserData,
		};
		mutate({ postId: postId, commentId: commentId, commentReply: reply });
	};

	return (
		<div className="w-full py-8 border-b last:border-0">
			<div className="flex items-start w-full">
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
					<p className="text-c-dark-gray break-all">{content}</p>
				</div>
			</div>
			{isReplying && (
				<form
					id="content"
					onSubmit={postReplyHandler}
					className={clsx(
						"flex flex-col items-start mt-8 ml-20 space-y-4 transition-all duration-1000 md:flex-row md:space-y-0 md:space-x-4",
						!isReplying && "opacity-0",
						isReplying && "opacity-100"
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
