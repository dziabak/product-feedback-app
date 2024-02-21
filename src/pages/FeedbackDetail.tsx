// REACT
import { Outlet } from "react-router-dom";
// LIBRARIES
import { useDocumentTitle } from "usehooks-ts";
// COMPONENTS
import FeedbackDetailView from "../components/feedback-detail/FeedbackDetailView";

const FeedbackDetail = () => {
	useDocumentTitle("Feedback Details | Feedback Nexus");

	return (
		<div>
			<Outlet />
			<FeedbackDetailView />
		</div>
	);
};

export default FeedbackDetail;
