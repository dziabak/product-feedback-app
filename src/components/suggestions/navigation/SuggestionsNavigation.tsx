// REACT
import { useState, useEffect } from "react";
// LIBRARIES
import clsx from "clsx";
import { useToggle, useLockedBody, useMediaQuery } from "usehooks-ts";
// TYPES
import { ProductRequestsData } from "../../../types/types";
// COMPONENTS
import SuggestionsAppLogo from "./SuggestionsAppLogo";
import SuggestionsCategoryFilter from "./SuggestionsCategoryFilter";
import SuggestionsRoadmapView from "./roadmap-view/SuggestionsRoadmapView";
// import SuggestionsDarkMode from "./SuggestionsDarkMode";
// import CurrentUserData from "./CurrentUserData";

const SuggestionsNavigation = ({
	data,
	onDataFiltered,
}: {
	data: ProductRequestsData;
	onDataFiltered: (arg0: ProductRequestsData) => void;
}) => {
	const handleFilteredData = (filteredData: ProductRequestsData) => {
		onDataFiltered(filteredData);
	};

	const [isMobileNavOpen, toggleIsMobileNavOpen] = useToggle();
	useLockedBody(isMobileNavOpen, "root");
	const md = useMediaQuery("(min-width: 768px)");

	const [isAnim, setIsAnim] = useState(true);

	useEffect(() => {
		setIsAnim(!isAnim);
	}, [isMobileNavOpen]);

	return (
		<nav className="md:flex md:space-x-4 md:mb-12 lg:flex-col lg:space-x-0 lg:space-y-4 lg:mb-0">
			<SuggestionsAppLogo
				toggleValue={isMobileNavOpen}
				toggleFunction={toggleIsMobileNavOpen}
			/>
			{/* <CurrentUserData /> */}
			{/* <SuggestionsDarkMode /> */}
			<div
				className={clsx(
					!isMobileNavOpen && "hidden md:block",
					isMobileNavOpen && "block"
				)}>
				<div
					className={clsx(
						"relative transition-opacity duration-300",
						!isAnim && "opacity-0 md:opacity-100",
						isAnim && "opacity-100"
					)}>
					<div className="absolute top-0 left-0 h-screen w-full bg-black/50 md:hidden"></div>
					<div
						className={clsx(
							"transition-transform duration-300 md:translate-x-0",
							!md && "absolute right-0 flex justify-end w-3/4 p-6 bg-c-gray",
							!isAnim && "translate-x-8",
							isAnim && "translate-x-0"
						)}>
						<div className="h-screen space-y-6 md:h-auto md:space-y-0 md:flex md:space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4">
							<SuggestionsCategoryFilter
								data={data}
								onDataFiltered={handleFilteredData}
							/>
							<SuggestionsRoadmapView />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default SuggestionsNavigation;
