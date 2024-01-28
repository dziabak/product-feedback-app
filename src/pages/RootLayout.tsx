// BUILT-IN IMPORTS
import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<main className="min-h-screen bg-c-gray font-main">
			<Outlet />
		</main>
	);
};

export default RootLayout;
