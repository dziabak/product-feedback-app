// INTERNAL IMPORTS
import SuggestionsAppLogo from "./SuggestionsAppLogo";
import SuggestionsCategoryFilter from "./SuggestionsCategoryFilter";
import SuggestionsRoadmapView from "./roadmap-view/SuggestionsRoadmapView";
// import SuggestionsDarkMode from "./SuggestionsDarkMode";
// import CurrentUserData from "./CurrentUserData";

const SuggestionsNavigation = () => {
	return (
		<div>
			<div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:block lg:space-y-4">
				<SuggestionsAppLogo />
				{/* <CurrentUserData /> */}
				{/* <SuggestionsDarkMode /> */}
				<SuggestionsCategoryFilter />
				<SuggestionsRoadmapView />
			</div>
		</div>
	);
};

export default SuggestionsNavigation;
