// TYPES
import { ProductRequestsData } from "../../../types/types";
// COMPONENTS
import SuggestionsAppLogo from "./SuggestionsAppLogo";
import SuggestionsCategoryFilter from "./SuggestionsCategoryFilter";
import SuggestionsRoadmapView from "./roadmap-view/SuggestionsRoadmapView";
// import SuggestionsDarkMode from "./SuggestionsDarkMode";
// import CurrentUserData from "./CurrentUserData";

const SuggestionsNavigation = ({
	data,
	onDataFiltered,
}: {
	data: ProductRequestsData;
	onDataFiltered: (arg0: ProductRequestsData) => void;
}) => {
	const handleFilteredData = (filteredData: ProductRequestsData) => {
		onDataFiltered(filteredData);
	};

	return (
		<div>
			<div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 lg:block lg:space-y-4">
				<SuggestionsAppLogo />
				{/* <CurrentUserData /> */}
				{/* <SuggestionsDarkMode /> */}
				<SuggestionsCategoryFilter
					data={data}
					onDataFiltered={handleFilteredData}
				/>
				<SuggestionsRoadmapView />
			</div>
		</div>
	);
};

export default SuggestionsNavigation;
