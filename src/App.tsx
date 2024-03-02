// REACT
import { RouterProvider } from "react-router-dom";
// LIBRARIES
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// COMPONENTS
import { router } from "./pages/router";
import { queryClient } from "./lib/http";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
