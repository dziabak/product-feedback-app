// REACT
import { Outlet } from "react-router-dom";
// LIBRARIES
import { useDocumentTitle } from "usehooks-ts";
// COMPONENTS
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
