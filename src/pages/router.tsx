// REACT
import { createBrowserRouter } from "react-router-dom";
// COMPONENTS
import RootLayout from "./RootLayout";
import ErrorLayout from "./ErrorLayout";
import Suggestions from "./Suggestions";
import FeedbackDetail from "./FeedbackDetail";
import Roadmap from "./Roadmap";
import NewFeedback from "./NewFeedback";
import EditFeedback from "./EditFeedback";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorLayout />,
		children: [
			{
				path: "/",
				element: <Suggestions />,
				children: [{ path: "/new-feedback", element: <NewFeedback /> }],
			},
			{
				path: "/feedback/:feedbackId",
				element: <FeedbackDetail />,
				children: [
					{ path: "/feedback/:feedbackId/edit", element: <EditFeedback /> },
				],
			},
			{
				path: "/roadmap",
				element: <Roadmap />,
				children: [
					{ path: "/roadmap/new-feedback", element: <NewFeedback /> },
					{
						path: "/roadmap/:feedbackId",
						element: <FeedbackDetail />,
						children: [
							{ path: "/roadmap/:feedbackId/edit", element: <EditFeedback /> },
						],
					},
				],
			},
			// { path: "/new-feedback", element: <NewFeedback /> },
		],
	},
]);
