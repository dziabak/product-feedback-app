// BUILT-IN IMPORTS
import { createBrowserRouter } from "react-router-dom";
// INTERNAL IMPORTS
import RootLayout from "./RootLayout";
import Suggestions from "./Suggestions";
import FeedbackDetail from "./FeedbackDetail";
import Roadmap from "./Roadmap";
import NewFeedback from "./NewFeedback";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <Suggestions /> },
			{ path: "/feedback/:feedbackId", element: <FeedbackDetail /> },
			{ path: "/feedback/:feedbackId/edit", element: <NewFeedback /> },
			{ path: "/roadmap", element: <Roadmap /> },
			{ path: "/new-feedback", element: <NewFeedback /> },
		],
	},
]);
