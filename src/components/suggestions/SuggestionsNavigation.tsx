// INTERNAL IMPORTS
import SuggestionsHeader from "./SuggestionsHeader";
import SuggestionsCategoryFilter from "./SuggestionsCategoryFilter";
import SuggestionsRoadmapView from "./SuggestionsRoadmapView";
import SuggestionsDarkMode from "./SuggestionsDarkMode";

const SuggestionsNavigation = () => {
	return (
		<div>
			<div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:block lg:space-y-4">
				<SuggestionsHeader />
				<SuggestionsDarkMode />
				<SuggestionsCategoryFilter />
				<SuggestionsRoadmapView />
			</div>
		</div>
	);
};

export default SuggestionsNavigation;
