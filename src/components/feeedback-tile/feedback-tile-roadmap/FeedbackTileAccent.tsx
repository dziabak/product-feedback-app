// LIBRARIES
import clsx from "clsx";

const FeedbackTileAccent = ({ status }: { status: string }) => {
	return (
		<>
			<div
				className={clsx(
					"w-full h-2 rounded-tl-lg rounded-tr-lg",
					status === "planned" && "bg-c-orange",
					status === "in-progress" && "bg-c-magenta",
					status === "live" && "bg-c-aqua"
				)}></div>
		</>
	);
};

export default FeedbackTileAccent;
