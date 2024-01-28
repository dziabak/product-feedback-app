// BUILT-IN IMPORTS
import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<main className="min-h-screen p-4 bg-c-gray font-main">
			<Outlet />
		</main>
	);
};

export default RootLayout;
