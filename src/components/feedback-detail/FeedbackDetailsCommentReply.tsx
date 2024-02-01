const FeedbackDetailsCommentReply = ({
	image,
	name,
	username,
	content,
	replyingTo,
}: {
	image: string;
	name: string;
	username: string;
	content: string;
	replyingTo: string;
}) => {
	return (
		<div className="flex items-start mt-8 ml-20">
			<img src={image} alt="User photo" className="w-12 mr-8 rounded-full" />
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<div>
						<p className="font-bold">{name}</p>
						<p className="text-sm text-c-dark-gray">{username}</p>
					</div>
					<p className="text-sm font-bold text-c-light-blue">Reply</p>
				</div>
				<p className="text-c-dark-gray">
					<span className="font-bold text-c-magenta">{replyingTo}</span>
					{content}
				</p>
			</div>
		</div>
	);
};

export default FeedbackDetailsCommentReply;
