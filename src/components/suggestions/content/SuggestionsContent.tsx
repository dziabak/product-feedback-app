// INTERNAL IMPORTS
import SuggestionsGrid from "./SuggestionsGrid";
import SuggestionsContentHeader from "./SuggestionsContentHeader";

const SuggestionsContent = () => {
	return (
		<div className="col-span-3 space-y-4">
			<SuggestionsContentHeader />
			<SuggestionsGrid />
		</div>
	);
};

export default SuggestionsContent;
