// COMPONENTS
import StatusIndicator from "../../ui/StatusIndicator";

const FeedbackTileStatus = ({ status }: { status: string }) => {
	return (
		<div className="flex items-center px-8 py-4">
			<StatusIndicator status={status} />
			<p className="text-c-dark-gray capitalize">{status}</p>
		</div>
	);
};

export default FeedbackTileStatus;
