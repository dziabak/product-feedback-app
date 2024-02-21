// REACT
import { Link } from "react-router-dom";
// LIBRARIES
import clsx from "clsx";
// TYPES
import { Comment } from "../../types/types";
// HOOKS
import useAddUpvote from "../../hooks/useAddUpvote";
// HELPERS
import { capitalizeString, countTotalComments } from "../../utils/helpers";
//IMAGES
import commentIcon from "../../assets/icons/icon-comments.svg";

type FeedbackTile = {
	upvotes: number;
	category: string;
	title: string;
	description: string;
	commentsNumber: number;
	status: string;
	id: string;
	comments?: Comment[];
};

const FeedbackTile = ({
	upvotes,
	category,
	title,
	description,
	commentsNumber,
	id,
	comments,
}: FeedbackTile) => {
	const categoryCapitalized = capitalizeString(category);
	const totalComments = countTotalComments(comments);

	const { addUpvoteHandler, upvotesCount, canAddUpvote } = useAddUpvote(
		id,
		upvotes
	);

	return (
		<div className="flex justify-between px-8 py-6 rounded-lg bg-white dark:bg-c-dark-frame">
			<div className="w-min mr-8">
				<button
					onClick={addUpvoteHandler}
					className={clsx(
						"group flex flex-col items-center w-10 p-3 space-y-2 text-xs font-bold rounded-lg transition-colors bg-c-gray text-c-light-blue hover:bg-c-light-blue/25 dark:text-c-dark-blue dark:hover:bg-c-gray/90",
						!canAddUpvote &&
							"bg-c-light-blue text-white hover:text-c-light-blue hover:bg-c-light-blue/25"
					)}>
					<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1 6l4-4 4 4"
							stroke="#4661E6"
							strokeWidth="2"
							fill="none"
							fillRule="evenodd"
							className={clsx(
								!canAddUpvote &&
									"stroke-white group-hover:stroke-c-light-blue transition-colors"
							)}
						/>
					</svg>
					<p>{upvotesCount}</p>
				</button>
			</div>
			<Link
				to={`/feedback/${id}`}
				className="group w-full flex items-center justify-between space-x-4">
				<div className="flex items-start space-x-12 ">
					<div className="space-y-2">
						<p className="line-clamp-1 text-lg font-bold transition-colors text-c-dark-blue group-hover:text-c-light-blue dark:text-c-light-gray dark:group-hover:text-c-light-gray/75">
							{title}
						</p>
						<p className="text-c-dark-gray dark:text-c-light-gray">
							{description}
						</p>
						<p className="inline-block px-4 py-2 text-sm font-semibold transition-colors rounded-xl bg-c-gray text-c-light-blue dark:text-c-dark-blue">
							{categoryCapitalized}
						</p>
					</div>
				</div>
				<div className="flex items-center space-x-4">
					<img
						src={commentIcon}
						alt="Icon of speech bubble representing comments"
					/>
					{commentsNumber === undefined ? (
						<p className="font-bold text-c-dark-blue/50 dark:text-c-light-gray">
							0
						</p>
					) : (
						<p className="font-bold text-c-dark-blue dark:text-c-light-gray">
							{totalComments}
						</p>
					)}
				</div>
			</Link>
		</div>
	);
};

export default FeedbackTile;
