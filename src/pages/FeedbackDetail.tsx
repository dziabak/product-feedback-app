import { Outlet } from "react-router-dom";

// INTERNAL IMPORTS
import FeedbackDetailView from "../components/feedback-detail/FeedbackDetailView";

const FeedbackDetail = () => {
	return (
		<div>
			<Outlet />
			<FeedbackDetailView />
		</div>
	);
};

export default FeedbackDetail;
