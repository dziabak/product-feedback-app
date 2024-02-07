// INTERNAL IMPORTS
import SuggestionsRoadmapViewHeader from "./SuggestionsRoadmapViewHeader";
import SuggestionsRoadmapViewStatusIndicator from "./SuggestionsRoadmapViewStatusIndicator";
import BackgroundFrame from "../ui/BackgroundFrame";

const SuggestionsRoadmapView = () => {
	const STATUS_DATA = [
		{ status: "Planned", value: 2, color: "orange" },
		{ status: "In-Progress", value: 3, color: "magenta" },
		{ status: "Live", value: 1, color: "aqua" },
	];

	return (
		<BackgroundFrame>
			<div className="flex flex-col justify-between">
				<SuggestionsRoadmapViewHeader />
				<div className="space-y-1">
					{STATUS_DATA.map((item) => (
						<SuggestionsRoadmapViewStatusIndicator
							status={item.status}
							value={item.value}
							color={item.color}
							key={item.status}
						/>
					))}
				</div>
			</div>
		</BackgroundFrame>
	);
};

export default SuggestionsRoadmapView;
