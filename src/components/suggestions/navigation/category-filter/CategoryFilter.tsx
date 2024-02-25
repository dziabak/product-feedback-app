// REACT
import { useEffect, useState } from "react";
// TYPES
import { ProductRequestsData } from "../../../../types/types";
// COMPONENTS
import BackgroundFrame from "../../../ui/BackgroundFrame";

const CategoryFilter = ({
	data,
	onDataFiltered,
}: {
	data: ProductRequestsData;
	onDataFiltered: (arg0: ProductRequestsData) => void;
}) => {
	const CATEGORY_DATA = ["ui", "ux", "enhancement", "bug", "feature"];

	const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

	const filterHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
		const clickedFilter = (e.target as HTMLButtonElement).innerHTML;

		if (clickedFilter === "all") {
			// Clear all filters
			setSelectedFilters([]);
		} else {
			// Toggle the clicked filter
			setSelectedFilters((prevFilters) => {
				if (prevFilters.includes(clickedFilter)) {
					// Remove the clicked filter
					return prevFilters.filter((filter) => filter !== clickedFilter);
				} else {
					// Add the clicked filter
					return [...prevFilters, clickedFilter];
				}
			});
		}
	};

	const filteredData = data.filter((item) => {
		// Show all categories if no filters are selected
		if (selectedFilters.length === 0) {
			return true;
		}

		// Return filtered categories
		return selectedFilters.some((filter) => item.category.includes(filter));
	});

	useEffect(() => {
		onDataFiltered(filteredData);
	}, [selectedFilters, data]);

	return (
		<div className="md:w-1/2 lg:w-full">
			<BackgroundFrame>
				{["all", ...CATEGORY_DATA].map((item) => (
					<button
						onClick={filterHandler}
						key={item}
						className={`px-4 py-2 m-2 text-sm font-semibold transition-colors rounded-[10px] ${
							(selectedFilters.includes(item) && item !== "all") ||
							(selectedFilters.length === 0 && item === "all")
								? "bg-c-light-blue text-white hover:bg-c-light-blue/25 hover:text-c-light-blue"
								: "bg-c-gray text-c-light-blue hover:bg-c-light-blue/25 hover:text-c-light-blue"
						} ${item.length <= 2 ? "uppercase" : "capitalize"}`}>
						{item}
					</button>
				))}
			</BackgroundFrame>
		</div>
	);
};

export default CategoryFilter;
