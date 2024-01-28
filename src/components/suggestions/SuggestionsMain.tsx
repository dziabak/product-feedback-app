// INTERNAL IMPORTS
import SuggestionsGrid from "./SuggestionsGrid";
import SuggestionsMainHeader from "./SuggestionsMainHeader";

const SuggestionsMain = () => {
	return (
		<div className="col-span-3 space-y-4">
			<SuggestionsMainHeader />
			<SuggestionsGrid />
		</div>
	);
};

export default SuggestionsMain;
