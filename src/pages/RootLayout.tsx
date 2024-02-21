// REACT
import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<main className="min-h-screen bg-c-gray font-main dark:bg-c-dark-background">
			<Outlet />
		</main>
	);
};

export default RootLayout;
