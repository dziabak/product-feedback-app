// COMPONENTS
import StatusIndicator from "../../../ui/StatusIndicator";

const SuggestionsRoadmapViewStatus = ({
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
				<p className="capitalize text-c-light-blue dark:text-c-light-gray">
					{status}
				</p>
			</div>
			<p className="font-bold text-c-light-blue dark:text-c-light-gray">
				{value}
			</p>
		</div>
	);
};

export default SuggestionsRoadmapViewStatus;
