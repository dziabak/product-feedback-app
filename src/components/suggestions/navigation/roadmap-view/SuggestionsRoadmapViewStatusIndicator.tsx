const SuggestionsRoadmapViewStatusIndicator = ({
	status,
	value,
	color,
}: {
	status: string;
	value: number;
	color: string;
}) => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center">
				<div className={`w-1 p-1 mr-3 rounded-full bg-c-${color}`}></div>
				<p className="text-c-light-blue dark:text-c-light-gray">{status}</p>
			</div>
			<p className="font-bold text-c-light-blue dark:text-c-light-gray">
				{value}
			</p>
		</div>
	);
};

export default SuggestionsRoadmapViewStatusIndicator;
