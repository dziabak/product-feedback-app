import FeedbackDetailsCommentReply from "./FeedbackDetailsCommentReply";

const FeedbackDetailsComment = ({
	image,
	name,
	username,
	content,
	replyData,
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
}) => {
	// console.log(replyData);
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
						<p className="text-sm font-bold text-c-light-blue">Reply</p>
					</div>
					<p className="text-c-dark-gray">{content}</p>
				</div>
			</div>
			{replyData !== undefined &&
				replyData.map((item) => (
					<FeedbackDetailsCommentReply
                    key={item.content}
						content={item.content}
						replyingTo={item.replyingTo}
						image={item.user.image}
						name={item.user.name}
						username={item.user.username}
					/>
				))}
		</div>
	);
};

export default FeedbackDetailsComment;
