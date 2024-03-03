const CommentData = ({
	image,
	name,
	username,
	toggleIsReplying,
	replyingTo,
	content,
}: {
	image: string;
	name: string;
	username: string;
	content: string;
	toggleIsReplying: () => void;
	replyingTo?: string;
}) => {
	return (
		<>
			<img src={image} alt="User photo" className="w-12 rounded-full" />
			<div className="w-full ml-3 space-y-6 md:ml-8 md:space-y-4">
				<div className="flex items-center justify-between">
					<div>
						<p className="font-bold tracking-tight text-sm text-c-dark-blue md:text-base">
							{name}
						</p>
						<p className="text-sm text-c-dark-gray">@{username}</p>
					</div>
					<button
						onClick={toggleIsReplying}
						className="group relative text-sm font-bold text-c-light-blue">
						Reply
						<span className="absolute -bottom-[0.1rem] left-0 h-[0.1rem] bg-c-light-blue w-0 group-hover:w-full transition-all duration-300"></span>
					</button>
				</div>
				<p
					className="-ml-[60px] text-c-dark-gray text-sm md:text-base md:ml-0"
					style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
					{replyingTo && (
						<span className="font-bold text-c-magenta">@{replyingTo} </span>
					)}
					{content}
				</p>
			</div>
		</>
	);
};

export default CommentData;
