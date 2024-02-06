// BUILT-IN IMPORTS
import { Link } from "react-router-dom";
// INTERNAL IMPORTS
import { capitalizeString } from "../../utils/helpers";
import commentIcon from "../../assets/icons/icon-comments.svg";

const FeedbackTile = ({
	upvotes,
	category,
	title,
	description,
	commentsNumber,
	id,
}: {
	upvotes: number;
	category: string;
	title: string;
	description: string;
	commentsNumber: number;
	status: string;
	id: number;
}) => {
	const categoryCapitalized = capitalizeString(category);

	return (
		<div className="flex justify-between px-8 py-6 rounded-lg bg-white">
			<div className="w-min mr-8">
				<button className="flex flex-col items-center w-10 p-3 space-y-2 text-xs font-bold rounded-lg transition-colors bg-c-gray text-c-light-blue hover:bg-c-light-blue/25">
					<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1 6l4-4 4 4"
							stroke="#4661E6"
							stroke-width="2"
							fill="none"
							fill-rule="evenodd"
						/>
					</svg>
					<p>{upvotes}</p>
				</button>
			</div>
			<Link
				to={`/feedback/${id}`}
				className="group w-full flex items-center justify-between">
				<div className="flex items-start space-x-12">
					<div className="space-y-2">
						<p className="text-lg font-bold transition-colors group-hover:text-c-light-blue">
							{title}
						</p>
						<p className="text-c-dark-gray">{description}</p>
						<p className="inline-block px-3 py-2 text-sm font-semibold transition-colors rounded-xl bg-c-gray text-c-light-blue">
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
						<p className="font-bold text-c-dark-blue">0</p>
					) : (
						<p className="font-bold text-c-dark-blue">{commentsNumber}</p>
					)}
				</div>
			</Link>
		</div>
	);
};

export default FeedbackTile;
