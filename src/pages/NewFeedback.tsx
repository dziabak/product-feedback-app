// LIBRARIES
import { useDocumentTitle } from "usehooks-ts";
// COMPONENTS
import NewFeedbackForm from "../components/feedback-form/NewFeedbackForm";

const NewFeedback = () => {
	useDocumentTitle("Create New Feedback | Feedback Nexus", {
		preserveTitleOnUnmount: false,
	});

	return <NewFeedbackForm />;
};

export default NewFeedback;
