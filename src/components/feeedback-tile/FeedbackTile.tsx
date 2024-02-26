import FeedbackTileBig from "./feedback-tile-variants/FeedbackTileBig";
import FeedbackTileSmall from "./feedback-tile-variants/FeedbackTileSmall";

import useAddUpvote from "../../hooks/useAddUpvote";

import { FeedbackTileProps } from "../../types/types";

const FeedbackTile = ({
	upvotes,
	upvotedBy,
	category,
	title,
	description,
	commentsNumber,
	status,
	id,
	comments,
	small,
}: FeedbackTileProps) => {
	let content;

	const { addUpvoteHandler, upvotesCount, isUpvotedByCurrentUser } =
		useAddUpvote(id, upvotes, upvotedBy);

	if (small) {
		content = (
			<>
				<FeedbackTileSmall
					key={id}
					id={id}
					upvotes={upvotes}
					category={category}
					title={title}
					description={description}
					commentsNumber={commentsNumber}
					status={status}
					comments={comments}
					addUpvoteHandler={addUpvoteHandler}
					upvotesCount={upvotesCount}
					isUpvotedByCurrentUser={isUpvotedByCurrentUser}
				/>
			</>
		);
	} else {
		content = (
			<>
				<div className="md:hidden">
					<FeedbackTileSmall
						key={id}
						id={id}
						upvotes={upvotes}
						category={category}
						title={title}
						description={description}
						commentsNumber={commentsNumber}
						status={status}
						comments={comments}
						addUpvoteHandler={addUpvoteHandler}
						upvotesCount={upvotesCount}
						isUpvotedByCurrentUser={isUpvotedByCurrentUser}
					/>
				</div>
				<div className="hidden md:block">
					<FeedbackTileBig
						key={id}
						id={id}
						upvotes={upvotes}
						category={category}
						title={title}
						description={description}
						commentsNumber={commentsNumber}
						status={status}
						comments={comments}
						addUpvoteHandler={addUpvoteHandler}
						upvotesCount={upvotesCount}
						isUpvotedByCurrentUser={isUpvotedByCurrentUser}
					/>
				</div>
			</>
		);
	}

	return <>{content}</>;
};

export default FeedbackTile;
