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
	let desktopView!: JSX.Element | JSX.Element[];
	let mobileView!: JSX.Element | JSX.Element[];
	let utilityContent!: JSX.Element | JSX.Element[];

	const { data, isFetching, isError } = useQuery({
		queryKey: ["feedback", "roadmap"],
		queryFn: fetchWithoutSuggestionsData,
	});

	if (isFetching) {
		utilityContent = (
			<div className="mt-64">
				<LoadingSpinner />
			</div>
		);
	}

	if (isError) {
		utilityContent = (
			<div className="mt-64">
				<ErrorBlock
					errorHeader="We couldn't fetch your data :("
					errorMessage="Please try again later"
				/>
			</div>
		);
	}

	if (data) {
		mobileView = <RoadmapGridMobileView data={data} />;
		desktopView = <RoadmapGridDesktopView data={data} />;
	}

	return (
		<>
			{utilityContent}
			<div className="md:hidden">{mobileView}</div>
			<div className="hidden md:grid grid-cols-3 gap-4">{desktopView}</div>
		</>
	);
};

export default RoadmapGrid;
