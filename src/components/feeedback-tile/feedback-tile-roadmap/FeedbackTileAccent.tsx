// LIBRARIES
import clsx from "clsx";

const FeedbackTileAccent = ({ status }: { status: string }) => {
	return (
		<>
			<div
				className={clsx(
					"w-full h-2 rounded-tl-[10px] rounded-tr-[10px]",
					status === "planned" && "bg-c-orange",
					status === "in-progress" && "bg-c-magenta",
					status === "live" && "bg-c-aqua"
				)}></div>
		</>
	);
};

export default FeedbackTileAccent;
