// LIBRARIES
import { useDocumentTitle } from "usehooks-ts";
// COMPONENTS
import EditFeedbackForm from "../components/feedback-form/EditFeedbackForm";

const EditFeedback = () => {
	useDocumentTitle("Editing... | Feedback Nexus", {
		preserveTitleOnUnmount: false,
	});

	return <EditFeedbackForm />;
};

export default EditFeedback;
