// BUILT-IN IMPORTS
import { Link } from "react-router-dom";
// INTERNAL IMPORTS
import { capitalizeString, countTotalComments } from "../../utils/helpers";
import FeedbackTileAccent from "./FeedbackTileAccent";
import FeedbackTileStatus from "./FeedbackTileStatus";
import clsx from "clsx";
import useAddUpvote from "../../hooks/useAddUpvote";
import { Comment } from "../../types/types";

const FeedbackTileRoadmap = ({
	upvotes,
	category,
	title,
	description,
	commentsNumber,
	status,
	id,
	comments,
}: {
	upvotes: number;
	category: string;
	title: string;
	description: string;
	commentsNumber: number;
	status: string;
	id: string;
	comments?: Comment[];
}) => {
	const categoryCapitalized = capitalizeString(category);
	const totalComments = countTotalComments(comments);

	const { addUpvoteHandler, upvotesCount, canAddUpvote } = useAddUpvote(
		id,
		upvotes
	);

	return (
		<div className="h-72 md:h-80 xl:h-72 flex flex-col justify-between rounded-lg bg-white">
			<Link to={`/feedback/${id}`} className="group rounded-lg bg-white">
				<FeedbackTileAccent status={status} />
				<FeedbackTileStatus status={status} />
				<div className="px-8 space-y-4">
					<div className="space-y-2">
						<p className="text-lg font-bold transition-colors group-hover:text-c-light-blue dark:text-c-light-gray dark:group-hover:text-c-light-gray/75">
							{title}
						</p>
						<p className="text-c-dark-gray line-clamp-2">{description}</p>
						<p className="inline-block px-4 py-2 text-sm font-semibold transition-colors rounded-xl bg-c-gray text-c-light-blue">
							{categoryCapitalized}
						</p>
					</div>
				</div>
			</Link>
			<div className="flex items-center justify-between px-8 pt-4 pb-8">
				<button
					onClick={addUpvoteHandler}
					className={clsx(
						"group flex items-center p-3 space-x-2 text-sm font-bold rounded-lg transition-colors bg-c-gray text-c-light-blue hover:bg-c-light-blue/25 dark:text-c-dark-blue dark:hover:bg-c-gray/90",
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

				<div className="flex items-center space-x-2">
					<svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
							fill="#CDD2EE"
							fillRule="nonzero"
						/>
					</svg>
					{commentsNumber === undefined ? (
						<p className="font-bold text-c-dark-blue">0</p>
					) : (
						<p className="font-bold text-c-dark-blue">{totalComments}</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default FeedbackTileRoadmap;
