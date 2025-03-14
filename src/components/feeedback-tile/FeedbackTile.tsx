// LIBRARIES
import { useMediaQuery } from "usehooks-ts";
// TYPES
import { FeedbackTileProps } from "../../types/types";
// HOOKS
import useAddUpvote from "../../hooks/useAddUpvote";
// COMPONENTS
import FeedbackTileBig from "./feedback-tile-variants/FeedbackTileBig";
import FeedbackTileSmall from "./feedback-tile-variants/FeedbackTileSmall";

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
	cy,
}: FeedbackTileProps) => {
	let content;

	const { addUpvoteHandler, upvotesCount, isUpvotedByCurrentUser } =
		useAddUpvote(id, upvotes, upvotedBy);

	const mobile = useMediaQuery("(max-width: 768px)");

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
					cy={"feedback-tile"}
				/>
			</>
		);
	} else {
		if (mobile) {
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
						cy={"feedback-tile"}
					/>
				</>
			);
		} else {
			content = (
				<>
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
						cy={"feedback-tile"}
					/>
				</>
			);
		}
		// content = (
		// 	<>
		// 		<div className="md:hidden">
		// 			<FeedbackTileSmall
		// 				key={id}
		// 				id={id}
		// 				upvotes={upvotes}
		// 				category={category}
		// 				title={title}
		// 				description={description}
		// 				commentsNumber={commentsNumber}
		// 				status={status}
		// 				comments={comments}
		// 				addUpvoteHandler={addUpvoteHandler}
		// 				upvotesCount={upvotesCount}
		// 				isUpvotedByCurrentUser={isUpvotedByCurrentUser}
		// 			/>
		// 		</div>
		// 		<div className="hidden md:block">
		// 			<FeedbackTileBig
		// 				key={id}
		// 				id={id}
		// 				upvotes={upvotes}
		// 				category={category}
		// 				title={title}
		// 				description={description}
		// 				commentsNumber={commentsNumber}
		// 				status={status}
		// 				comments={comments}
		// 				addUpvoteHandler={addUpvoteHandler}
		// 				upvotesCount={upvotesCount}
		// 				isUpvotedByCurrentUser={isUpvotedByCurrentUser}
		// 			/>
		// 		</div>
		// 	</>
		// );
	}

	return <>{content}</>;
};

export default FeedbackTile;
