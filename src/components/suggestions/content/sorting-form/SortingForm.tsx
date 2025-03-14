// REACT
import { useEffect, useState } from "react";
// TYPES
import {
	ProductRequestsData,
	SingleProductRequestsData,
} from "../../../../types/types";
// DATA
import { sortFormData } from "../../../../lib/data";
// HELPERS
import { countTotalComments } from "../../../../utils/helpers";
// COMPONENTS
import SortListbox from "./SortListbox";

const SuggestionsSortingForm = ({
	filteredData,
	onDataSorted,
	initialData,
}: {
	initialData: ProductRequestsData | undefined;
	filteredData: ProductRequestsData | undefined;
	onDataSorted: (arg0: ProductRequestsData) => void;
}) => {
	const sortData = sortFormData;

	const [sortingOption, setSortingOption] = useState(sortData[0]);
	const [sortingInitiated, setSortingInitiated] = useState(false);

	useEffect(() => {
		if (sortingInitiated) {
			let sortingFunction: (
				a: SingleProductRequestsData,
				b: SingleProductRequestsData
			) => number;

			switch (sortingOption) {
				case "most upvotes":
					sortingFunction = (a, b) => b.upvotes - a.upvotes;
					break;
				case "least upvotes":
					sortingFunction = (a, b) => a.upvotes - b.upvotes;
					break;
				case "most comments":
					sortingFunction = (a, b) => {
						const aTotalComments = countTotalComments(a.comments);
						const bTotalComments = countTotalComments(b.comments);
						return bTotalComments - aTotalComments;
					};
					break;
				case "least comments":
					sortingFunction = (a, b) => {
						const aTotalComments = countTotalComments(a.comments);
						const bTotalComments = countTotalComments(b.comments);
						return aTotalComments - bTotalComments;
					};
					break;
				default:
					sortingFunction = (_a, _b) => 0;
			}

			if (filteredData) {
				const sortedData = [...filteredData].sort(sortingFunction);
				onDataSorted(sortedData);
			}
		} else {
			onDataSorted(initialData!);
		}
	}, [sortingOption, sortingInitiated, filteredData, initialData]);

	const handleSortingChange = (selectedOption: string) => {
		setSortingOption(selectedOption);
		setSortingInitiated(true);
	};

	return (
		<form data-cy="sorting-form" className="group flex items-center space-x-2">
			<p className="text-sm text-c-gray transition-colors group-hover:text-c-gray/75">
				Sort by:
			</p>
			<SortListbox selected={sortingOption} setSelected={handleSortingChange} />
		</form>
	);
};

export default SuggestionsSortingForm;
