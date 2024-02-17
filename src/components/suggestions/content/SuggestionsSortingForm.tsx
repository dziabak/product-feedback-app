// REACT
import { useEffect, useState } from "react";
// TYPES
import {
	ProductRequestsData,
	SingleProductRequestsData,
} from "../../../types/types";
// HELPERS
import { countTotalComments } from "../../../utils/helpers";

const SuggestionsSortingForm = ({
	filteredData,
	onDataSorted,
}: {
	filteredData: ProductRequestsData | undefined;
	onDataSorted: (arg0: ProductRequestsData) => void;
}) => {
	const [sortingOption, setSortingOption] = useState("");

	useEffect(() => {
		let sortingFunction: (
			a: SingleProductRequestsData,
			b: SingleProductRequestsData
		) => number;

		switch (sortingOption) {
			case "most-upvotes":
				sortingFunction = (a, b) => b.upvotes - a.upvotes;
				break;
			case "least-upvotes":
				sortingFunction = (a, b) => a.upvotes - b.upvotes;
				break;
			case "most-comments":
				sortingFunction = (a, b) => {
					const aTotalComments = countTotalComments(a.comments);
					const bTotalComments = countTotalComments(b.comments);
					return bTotalComments - aTotalComments;
				};
				break;
			case "least-comments":
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
	}, [sortingOption, filteredData]);

	const handleSortingForm: React.FormEventHandler<HTMLFormElement> = (e) => {
		const selectedSortingOption = (e.target as HTMLSelectElement).value;
		setSortingOption(selectedSortingOption);
	};

	return (
		<form onChange={handleSortingForm} className="flex items-center space-x-2">
			<label htmlFor="category">
				<p className="text-sm text-white">Sort by:</p>
			</label>
			<select
				name="category"
				id="category"
				className="p-3 rounded-md font-bold text-white bg-c-dark-blue">
				<option value="">...</option>
				<option value="most-upvotes">Most Upvotes</option>
				<option value="least-upvotes">Least Upvotes</option>
				<option value="most-comments">Most Comments</option>
				<option value="least-comments">Least Comments</option>
			</select>
		</form>
	);
};

export default SuggestionsSortingForm;
