const CommentUserInfo = ({
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
					{replyingTo && (
						<span className="font-bold text-c-magenta">{replyingTo} </span>
					)}
					{content}
				</p>
			</div>
		</>
	);
};

export default CommentUserInfo;
