// COMPONENTS
import StatusIndicator from "../../ui/components/StatusIndicator";

const FeedbackTileStatus = ({ status }: { status: string }) => {
	return (
		<div className="flex items-center px-8 py-4">
			<StatusIndicator status={status} />
			<p className="text-sm text-c-dark-gray capitalize md:text-base">{status}</p>
		</div>
	);
};

export default FeedbackTileStatus;
