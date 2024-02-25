// REACT
import { useState } from "react";
// LIBRARIES
import { useQuery } from "@tanstack/react-query";
// TYPES
import { ProductRequestsData } from "../../types/types";
// DATA
import { fetchOnlySuggestionsData } from "../../lib/http";
// COMPONENTS
import SuggestionsNavigation from "../../components/suggestions/navigation/SuggestionsNavigation";
import SuggestionsLayout from "./content/SuggestionsLayout";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBlock from "../ui/ErrorBlock";

const SuggestionsMain = () => {
	let content;

	const { data, isFetching, isError } = useQuery({
		queryKey: ["feedback", "suggestions"],
		queryFn: fetchOnlySuggestionsData,
	});

	const [filteredData, setFilteredData] = useState<ProductRequestsData>();

	const handleFilteredData = (filteredData: ProductRequestsData) => {
		setFilteredData(filteredData);
	};

	if (isFetching) {
		content = <LoadingSpinner />;
	}

	if (isError) {
		content = (
			<ErrorBlock
				errorHeader="We couldn't fetch your data :("
				errorMessage="Please try again later"
			/>
		);
	}

	if (data) {
		content = (
			<section className="container md:py-8 lg:grid lg:grid-cols-4 lg:gap-4">
				<SuggestionsNavigation
					data={data}
					onDataFiltered={handleFilteredData}
				/>
				<SuggestionsLayout filteredData={filteredData} />
			</section>
		);
	}

	return <>{content}</>;
};

export default SuggestionsMain;
