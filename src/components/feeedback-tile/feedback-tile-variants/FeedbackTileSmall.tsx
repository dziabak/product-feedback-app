// REACT
import { Link, useLocation } from "react-router-dom";
// LIBRARIES
import clsx from "clsx";
// TYPES
import { FeedbackTileProps } from "../../../types/types";
// HELPERS
import { capitalizeString, countTotalComments } from "../../../utils/helpers";
// COMPONENTS
import FeedbackTileAccent from "../feedback-tile-roadmap/FeedbackTileAccent";
import FeedbackTileStatus from "../feedback-tile-roadmap/FeedbackTileStatus";
// IMAGES
import commentIcon from "../../../assets/icons/icon-comments.svg";

const FeedbackTileSmall = ({
	category,
	title,
	description,
	commentsNumber,
	status,
	id,
	comments,
	addUpvoteHandler,
	upvotesCount,
	isUpvotedByCurrentUser,
}: FeedbackTileProps) => {
	const categoryCapitalized = capitalizeString(category);
	const totalComments = countTotalComments(comments);

	const location = useLocation();
	const isRoadmapRoute = location.pathname.startsWith("/roadmap");
	const isDynamicRoadmapRoute = location.pathname.match(
		/^\/roadmap\/[a-zA-Z0-9]+$/
	);

	let link!: string;
	if (location.pathname === "/") {
		link = `/feedback/${id}`;
	} else if (location.pathname === "/roadmap") {
		link = `/roadmap/${id}`;
	}

	return (
		<div
			className={clsx(
				"flex flex-col justify-between rounded-[10px] bg-white",
				location.pathname === "/roadmap" && "h-72",
				!isRoadmapRoute && "pt-8",
				isDynamicRoadmapRoute && "pt-8",
				isRoadmapRoute && !isDynamicRoadmapRoute && "pt-0",
			)}>
			<Link
				to={link}
				className={clsx(
					"group rounded-[10px] bg-white",
					location.pathname !== "/" &&
						location.pathname !== "/roadmap" &&
						"pointer-events-none"
				)}>
				{isRoadmapRoute && !isDynamicRoadmapRoute && (
					<>
						<FeedbackTileAccent status={status} />
						<FeedbackTileStatus status={status} />
					</>
				)}
				<div className="px-8 space-y-4">
					<div className="space-y-4">
						<div className="space-y-1">
							<p
								className={clsx(
									"text-base font-bold transition-colors text-c-dark-blue tracking-tight dark:text-c-light-gray md:text-lg",
									location.pathname === "/" &&
										"break-all line-clamp-1 group-hover:text-c-light-blue dark:group-hover:text-c-light-gray/75",
										isRoadmapRoute && !isDynamicRoadmapRoute &&
										"break-all line-clamp-1 group-hover:text-c-light-blue dark:group-hover:text-c-light-gray/75"
								)}>
								{title}
							</p>
							<p
								className={clsx(
									"whitespace-pre-line text-c-dark-gray text-sm md:text-lg",
									isRoadmapRoute && !isDynamicRoadmapRoute && "line-clamp-2"
								)}>
								{description}
							</p>
						</div>
						<p className="inline-block px-4 py-2 text-sm font-semibold transition-colors rounded-[10px] bg-c-gray text-c-light-blue">
							{categoryCapitalized}
						</p>
					</div>
				</div>
			</Link>
			<div className="flex items-center justify-between px-8 pt-4 pb-8">
				<button
					onClick={addUpvoteHandler}
					className={clsx(
						"group flex items-center px-4 py-2 space-x-2 text-sm font-bold rounded-[10px] transition-colors bg-c-gray text-c-dark-blue hover:bg-c-light-blue/25 dark:text-c-dark-blue dark:hover:bg-c-gray/90",
						isUpvotedByCurrentUser &&
							"bg-c-light-blue text-white hover:text-c-dark-blue hover:bg-c-light-blue/25"
					)}>
					<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1 6l4-4 4 4"
							stroke="#4661E6"
							strokeWidth="2"
							fill="none"
							fillRule="evenodd"
							className={clsx(
								isUpvotedByCurrentUser &&
									"stroke-white group-hover:stroke-c-light-blue transition-colors"
							)}
						/>
					</svg>
					<p>{upvotesCount}</p>
				</button>

				<div className="flex items-center space-x-2">
					<img
						src={commentIcon}
						alt="Icon of speech bubble representing comments"
					/>
					{commentsNumber === undefined ? (
						<p className="font-bold text-sm text-c-dark-blue/50">0</p>
					) : (
						<p className="font-bold text-sm text-c-dark-blue">
							{totalComments}
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default FeedbackTileSmall;
