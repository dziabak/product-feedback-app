import { Outlet } from "react-router-dom";
import { useDocumentTitle } from "usehooks-ts";
// INTERNAL IMPORTS
import SuggestionsMain from "../components/suggestions/SuggestionsMain";

const Suggestions = () => {
	useDocumentTitle("Suggestions | Feedback Board");
	return (
		<>
			<Outlet />
			<SuggestionsMain />
		</>
	);
};

export default Suggestions;
