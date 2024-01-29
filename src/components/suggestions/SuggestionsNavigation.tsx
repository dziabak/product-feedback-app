// INTERNAL IMPORTS
import SuggestionsHeader from "./SuggestionsHeader";
import SuggestionsCategoryFilter from "./SuggestionsCategoryFilter";
import SuggestionsRoadmapView from "./SuggestionsRoadmapView";

const SuggestionsNavigation = () => {
	return (
		<div>
			<div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:grid-rows-3 lg:grid-cols-1">
				<SuggestionsHeader />
				<SuggestionsCategoryFilter />
				<SuggestionsRoadmapView />
			</div>
		</div>
	);
};

export default SuggestionsNavigation;
