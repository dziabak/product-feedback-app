// INTERNAL IMPORTS
import { capitalizeString } from "../../utils/helpers";

const RoadmapGridStatusHeader = ({
	status,
	value,
}: {
	status: string;
	value: number;
}) => {
	const statusCapitalized = capitalizeString(status);

	return (
		<div>
			<p className="text-lg font-bold text-c-dark-blue">
				{statusCapitalized} ({value})
			</p>
			{status === "planned" && <p className="text-c-dark-gray">Ideas prioritized for research</p>}
			{status === "in-progress" && <p className="text-c-dark-gray">Currently being developed</p>}
			{status === "live" && <p className="text-c-dark-gray">Released features</p>}
		</div>
	);
};

export default RoadmapGridStatusHeader;