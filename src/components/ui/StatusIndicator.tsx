// LIBRARIES
import clsx from "clsx";

const StatusIndicator = ({ status }: { status: string }) => {
	return (
		<div
			className={clsx(
				"w-1 p-1 mr-3 rounded-full",
				status === "planned" && "bg-c-orange",
				status === "in-progress" && "bg-c-magenta",
				status === "live" && "bg-c-aqua"
			)}></div>
	);
};

export default StatusIndicator;
