// BUILT-IN IMPORTS
import { createBrowserRouter } from "react-router-dom";
// INTERNAL IMPORTS
import RootLayout from "./RootLayout";
import Home from "./Home";
import FeedbackDetail from "./FeedbackDetail";
import Roadmap from "./Roadmap";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/:feedbackId", element: <FeedbackDetail /> },
			{ path: "/roadmap", element: <Roadmap /> },
		],
	},
]);
