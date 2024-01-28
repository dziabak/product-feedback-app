// INTERNAL IMPORTS
import FeedbackTile from "../feeedback-tile/FeedbackTile";

const SuggestionsGrid = () => {
	const FEEDBACK_DATA = [
		{
			id: 1,
			upvotes: 112,
			category: "Enhancement",
			title: "Add tags for solutions",
			description: "Easier to search for solutions based on a specific stack.",
			comments: 2,
		},
		{
			id: 2,
			upvotes: 99,
			category: "Feature",
			title: "Add a dark theme option",
			description:
				"It would help people with light sensitivities and who prefer dark mode.",
			comments: 4,
		},
		{
			id: 3,
			upvotes: 65,
			category: "Feature",
			title: "Q&A within the challenge hubs",
			description: "Challenge-specific Q&A would make for easy reference.",
			comments: 1,
		},
	];

	return (
		<div className="space-y-4">
			{FEEDBACK_DATA.map((item) => (
				<FeedbackTile
					key={item.id}
					category={item.category}
					comments={item.comments}
					description={item.description}
					title={item.title}
					upvotes={item.upvotes}
				/>
			))}
		</div>
	);
};

export default SuggestionsGrid;
