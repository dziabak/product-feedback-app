const SuggestionsRoadmapViewStatusIndicator = ({
	status,
	value,
	color,
}: {
	status: string;
	value: number;
	// color: "orange" | "magenta" | "aqua";
	color: string;
}) => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center">
				{color === "orange" && (
					<div className="w-1 p-1 mr-3 rounded-full bg-c-orange"></div>
				)}
				{color === "magenta" && (
					<div className="w-1 p-1 mr-3 rounded-full bg-c-magenta"></div>
				)}
				{color === "aqua" && (
					<div className="w-1 p-1 mr-3 rounded-full bg-c-aqua"></div>
				)}
				<p className="text-c-light-blue">{status}</p>
			</div>
			<p className="font-bold text-c-light-blue">{value}</p>
		</div>
	);
};

export default SuggestionsRoadmapViewStatusIndicator;
