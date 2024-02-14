import { capitalizeString } from "../../utils/helpers";

const FeedbackTileStatus = ({ status }: { status: string }) => {
	const statusCapitalized = capitalizeString(status);
	return (
		<div className="flex items-center px-8 py-4">
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
	);
};

export default FeedbackTileStatus;
