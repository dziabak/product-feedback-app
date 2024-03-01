const RoadmapSectionLoading = () => {
	return (
		<div
			role="status"
			className="max-w-md p-4 space-y-4 rounded animate-pulse md:p-0">
			<div className="flex items-center justify-between">
				<div>
					<div className="w-32 h-2 bg-gray-200 rounded-full "></div>
				</div>
				<div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
			</div>
			<div className="flex items-center justify-between pt-0">
				<div>
					<div className="w-32 h-2 bg-gray-200 rounded-full "></div>
				</div>
				<div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
			</div>
			<div className="flex items-center justify-between pt-0">
				<div>
					<div className="w-32 h-2 bg-gray-200 rounded-full "></div>
				</div>
				<div className="h-2.5 bg-gray-300 rounded-full  w-12"></div>
			</div>
			<span className="sr-only">Loading...</span>
		</div>
	);
};

export default RoadmapSectionLoading;
