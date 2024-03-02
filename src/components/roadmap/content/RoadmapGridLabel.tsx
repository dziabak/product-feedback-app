const RoadmapGridLabel = ({
	status,
	statusLength,
}: {
	status: string;
	statusLength: number;
}) => {
	return (
		<div className="my-6 space-y-1 md:mt-8 md:mb-8 lg:mt-12 lg:mb-8">
			<p className="text-lg font-bold capitalize tracking-tight text-c-dark-blue">
				{status} ({statusLength})
			</p>
			{status === "planned" && (
				<p className="text-c-dark-gray text-sm md:text-base">Ideas prioritized for research</p>
			)}
			{status === "in-progress" && (
				<p className="text-c-dark-gray text-sm md:text-base">Currently being developed</p>
			)}
			{status === "live" && (
				<p className="text-c-dark-gray text-sm md:text-base">Released features</p>
			)}
		</div>
	);
};

export default RoadmapGridLabel;
