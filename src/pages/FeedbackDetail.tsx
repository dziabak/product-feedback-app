// REACT
import { Outlet } from "react-router-dom";
// LIBRARIES
import { useDocumentTitle } from "usehooks-ts";
// COMPONENTS
import FeedbackDetailMain from "../components/feedback-detail/FeedbackDetailMain";

const FeedbackDetail = () => {
	useDocumentTitle("Feedback Details | Feedback Nexus");

	return (
		<>
			<Outlet />
			<FeedbackDetailMain />
		</>
	);
};

export default FeedbackDetail;
