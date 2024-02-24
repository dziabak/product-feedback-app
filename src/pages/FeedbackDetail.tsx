// REACT
import { Outlet } from "react-router-dom";
// LIBRARIES
import { useDocumentTitle } from "usehooks-ts";
// COMPONENTS
import FeedbackDetailView from "../components/feedback-detail/FeedbackDetailView";

const FeedbackDetail = () => {
	useDocumentTitle("Feedback Details | Feedback Nexus");

	return (
		<>
			<Outlet />
			<FeedbackDetailView />
		</>
	);
};

export default FeedbackDetail;
