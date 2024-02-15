// LIBRARIES
import { useQuery } from "@tanstack/react-query";
// DATA
import { fetchWithoutSuggestionsData } from "../../lib/http";
// COMPONENTS
import RoadmapGridMobileView from "./RoadmapGridMobileView";
import RoadmapGridDesktopView from "./RoadmapGridDesktopView";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorBlock from "../ui/ErrorBlock";

const RoadmapGrid = () => {
	let content!: JSX.Element | JSX.Element[];

	const { data, isFetching, isError } = useQuery({
		queryKey: ["feedback", "roadmap"],
		queryFn: fetchWithoutSuggestionsData,
	});

	if (isFetching) {
		content = (
			<div className="mt-64">
				<LoadingSpinner />
			</div>
		);
	}

	if (isError) {
		content = (
			<div className="mt-64">
				<ErrorBlock
					errorHeader="We couldn't fetch your data :("
					errorMessage="Please try again later"
				/>
			</div>
		);
	}

	if (data) {
		content = (
			<>
				<div className="md:hidden">
					<RoadmapGridMobileView data={data} />
				</div>
				<div className="hidden md:grid grid-cols-3 gap-4">
					<RoadmapGridDesktopView data={data} />
				</div>
			</>
		);
	}

	return <>{content}</>;
};

export default RoadmapGrid;
