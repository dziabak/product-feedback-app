// REACT
import { useState } from "react";
// TYPES
import { ProductRequestsData } from "../../../types/types";
// COMPONENTS
import SuggestionsContentHeader from "./SuggestionsContentHeader";
import SuggestionsGrid from "./SuggestionsGrid";

const SuggestionsContent = ({
	filteredData,
}: {
	filteredData: ProductRequestsData | undefined;
}) => {
	const [sortedData, setSortedData] = useState<ProductRequestsData>();

	const handleSortedData = (sortedData: ProductRequestsData) => {
		setSortedData(sortedData);
	};

	return (
		<div className="col-span-3 space-y-4">
			<SuggestionsContentHeader
				onDataSorted={handleSortedData}
				filteredData={filteredData}
			/>
			<SuggestionsGrid sortedData={sortedData} />
		</div>
	);
};

export default SuggestionsContent;
