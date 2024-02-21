const RoadmapGridLabel = ({
	status,
	statusLength,
}: {
	status: string;
	statusLength: number;
}) => {
	return (
		<div className="my-6 space-y-1 md:mt-12 md:mb-8">
			<p className="text-lg font-bold capitalize text-c-dark-blue">
				{status} ({statusLength})
			</p>
			{status === "planned" && (
				<p className="text-c-dark-gray">Ideas prioritized for research</p>
			)}
			{status === "in-progress" && (
				<p className="text-c-dark-gray">Currently being developed</p>
			)}
			{status === "live" && (
				<p className="text-c-dark-gray">Released features</p>
			)}
		</div>
	);
};

export default RoadmapGridLabel;
