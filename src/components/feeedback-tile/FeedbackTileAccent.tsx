const FeedbackTileAccent = ({ status }: { status: string }) => {
	return (
		<>
			{status === "planned" && (
				<div className="w-full h-2 rounded-tl-lg rounded-tr-lg bg-c-orange"></div>
			)}
			{status === "in-progress" && (
				<div className="w-full h-2 rounded-tl-lg rounded-tr-lg bg-c-magenta"></div>
			)}
			{status === "live" && (
				<div className="w-full h-2 rounded-tl-lg rounded-tr-lg bg-c-aqua"></div>
			)}
		</>
	);
};

export default FeedbackTileAccent;
