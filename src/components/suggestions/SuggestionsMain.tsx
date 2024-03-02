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
import LoadingDots from "../ui/loading/LoadingDots";
import ErrorBlock from "../ui/errors/ErrorBlock";

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
		content = <LoadingDots />;
	}

	if (isError) {
		content = (
			<ErrorBlock
				full
				errorHeader="We couldn't fetch your data"
				errorMessage="Please try reloading the page"
			/>
		);
	}

	if (data) {
		content = (
			<section className="container md:py-8 lg:grid lg:grid-cols-4 lg:gap-6">
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
