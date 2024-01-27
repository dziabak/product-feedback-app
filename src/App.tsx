// BUILT-IN IMPORTS
import { RouterProvider } from "react-router-dom";
// EXTERNAL IMPORTS
// import { QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// INTERNAL IMPORTS
import { router } from "./pages/router";
// import { queryClient } from "./services/api/http";

function App() {
	return (
		// <QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
		// 	<ReactQueryDevtools />
		// </QueryClientProvider>
	);
}

export default App;
