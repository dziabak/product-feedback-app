import SuggestionsNavigation from "../../components/suggestions/navigation/SuggestionsNavigation";
import SuggestionsContent from "../../components/suggestions/content/SuggestionsContent";

const SuggestionsMain = () => {
	return (
		<section className="container lg:grid lg:grid-cols-4 lg:gap-4">
			<SuggestionsNavigation />
			<SuggestionsContent />
		</section>
	);
};

export default SuggestionsMain;
