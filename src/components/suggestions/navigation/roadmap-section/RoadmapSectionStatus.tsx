// COMPONENTS
import StatusIndicator from "../../../ui/components/StatusIndicator";

const RoadmapSectionStatus = ({
	status,
	value,
}: {
	status: string;
	value: number;
}) => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center">
				<StatusIndicator status={status} />
				<p className="capitalize text-c-dark-blue/75 dark:text-c-light-gray">
					{status}
				</p>
			</div>
			<p className="font-bold text-c-dark-blue/75 dark:text-c-light-gray">
				{value}
			</p>
		</div>
	);
};

export default RoadmapSectionStatus;
