// TYPES
import { ProductRequestsData } from "../../types/types";
// COMPONENTS
import StatusIndicator from "../ui/StatusIndicator";

const StatusLabel = ({ data }: { data: ProductRequestsData | undefined }) => {
	let content!: JSX.Element;

	if (data) {
		content = (
			<div className="flex items-center">
				<StatusIndicator status={data[0].status} />
				<p className="text-sm font-bold capitalize text-c-dark-blue">{data[0].status}</p>
			</div>
		);
	}

	return <>{content}</>;
};

export default StatusLabel;
