// BUILT-IN IMPORTS
import { Link } from "react-router-dom";
// INTERNAL IMPORTS
import { capitalizeString } from "../../utils/helpers";

const FeedbackTileRoadmap = ({
	upvotes,
	category,
	title,
	description,
	comments,
	status,
}: {
	upvotes: number;
	category: string;
	title: string;
	description: string;
	comments: number;
	status: string;
}) => {
	const categoryCapitalized = capitalizeString(category);
	const statusCapitalized = capitalizeString(status);

	return (
		<Link to="/feedback-details" className="rounded-lg bg-white">
			{status === "planned" && (
				<div className="w-full h-2 rounded-tl-lg rounded-tr-lg bg-c-orange"></div>
			)}
			{status === "in-progress" && (
				<div className="w-full h-2 rounded-tl-lg rounded-tr-lg bg-c-magenta"></div>
			)}
			{status === "live" && (
				<div className="w-full h-2 rounded-tl-lg rounded-tr-lg bg-c-aqua"></div>
			)}
			<div className="px-8 py-4 space-y-4">
				<div className="flex items-center">
					{status === "planned" && (
						<div className="w-1 p-1 mr-3 rounded-full bg-c-orange"></div>
					)}
					{status === "in-progress" && (
						<div className="w-1 p-1 mr-3 rounded-full bg-c-magenta"></div>
					)}
					{status === "live" && (
						<div className="w-1 p-1 mr-3 rounded-full bg-c-aqua"></div>
					)}
					<p className="text-c-dark-gray">{statusCapitalized}</p>
				</div>

				<div className="space-y-2">
					<p className="text-lg font-bold">{title}</p>
					<p className="text-c-dark-gray">{description}</p>
					<p className="inline-block px-3 py-2 m-1 text-sm font-semibold transition-colors rounded-xl bg-c-gray text-c-light-blue">
						{categoryCapitalized}
					</p>
				</div>

				<div className="flex items-center justify-between">
					<button className="flex items-center p-2 space-x-2 text-xs font-bold rounded-lg bg-c-gray text-c-light-blue">
						<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1 6l4-4 4 4"
								stroke="#4661E6"
								strokeWidth="2"
								fill="none"
								fillRule="evenodd"
							/>
						</svg>
						<p>{upvotes}</p>
					</button>

					<div className="flex items-center space-x-2">
						<svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
								fill="#CDD2EE"
								fillRule="nonzero"
							/>
						</svg>
						{comments === undefined ? (
							<p className="font-bold text-c-dark-blue">0</p>
						) : (
							<p className="font-bold text-c-dark-blue">{comments}</p>
						)}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default FeedbackTileRoadmap;
