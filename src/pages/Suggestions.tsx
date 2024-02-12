import { Outlet } from "react-router-dom";
// INTERNAL IMPORTS
import SuggestionsNavigation from "../components/suggestions/SuggestionsNavigation";
import SuggestionsMain from "../components/suggestions/SuggestionsMain";

const Suggestions = () => {
	return (
		<>
			<Outlet />
			<section className="container lg:grid lg:grid-cols-4 lg:gap-4">
				<SuggestionsNavigation />
				<SuggestionsMain />
			</section>
		</>
	);
};

export default Suggestions;
