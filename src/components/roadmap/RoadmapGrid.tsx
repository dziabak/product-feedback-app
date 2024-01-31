// EXTERNAL IMPORTS
import { useQuery } from "@tanstack/react-query";
// INTERNAL IMPORTS
import { fetchWithoutSuggestionsData } from "../../lib/http";
import RoadmapGridStatus from "./RoadmapGridStatus";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBlock from "../ui/ErrorBlock";

const RoadmapGrid = () => {
	let content!: JSX.Element | JSX.Element[];

	const { data, isFetching, isError } = useQuery({
		queryKey: ["feedback"],
		queryFn: fetchWithoutSuggestionsData,
	});

	if (isFetching) {
		content = <LoadingSpinner />;
	}

	if (isError) {
		content = (
			<ErrorBlock
				errorHeader="There was an error"
				errorMessage="Please try again later"
			/>
		);
	}

	if (data) {
		content = (
			<>
				<RoadmapGridStatus data={data} status="planned" />
				<RoadmapGridStatus data={data} status="in-progress" />
				<RoadmapGridStatus data={data} status="live" />
			</>
		);
	}

	return <div className="grid grid-cols-3 gap-4">{content}</div>;
};

export default RoadmapGrid;
