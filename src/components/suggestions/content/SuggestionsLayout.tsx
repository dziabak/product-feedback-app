// REACT
import { useState } from "react";
// TYPES
import { ProductRequestsData } from "../../../types/types";
// COMPONENTS
import SuggestionsHeader from "./ui/SuggestionsHeader";
import SuggestionsGrid from "./SuggestionsGrid";

const SuggestionsLayout = ({
	filteredData,
}: {
	filteredData: ProductRequestsData | undefined;
}) => {
	const [sortedData, setSortedData] = useState<ProductRequestsData>();

	const handleSortedData = (sortedData: ProductRequestsData) => {
		setSortedData(sortedData);
	};

	return (
		<div className="col-span-3">
			<SuggestionsHeader
				onDataSorted={handleSortedData}
				filteredData={filteredData}
			/>
			<SuggestionsGrid sortedData={sortedData} />
		</div>
	);
};

export default SuggestionsLayout;
