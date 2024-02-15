// LIBRARIES
import { useQuery } from "@tanstack/react-query";
// DATA
import { fetchWithoutSuggestionsData } from "../../../../lib/http";
// HELPERS
import { getStatusLength } from "../../../../utils/helpers";
// COMPONENTS
import SuggestionsRoadmapViewHeader from "./SuggestionsRoadmapViewHeader";
import SuggestionsRoadmapViewStatusIndicator from "./SuggestionsRoadmapViewStatusIndicator";
import LoadingSpinner from "../../../ui/LoadingSpinner";
import ErrorBlock from "../../../ui/ErrorBlock";
import BackgroundFrame from "../../../ui/BackgroundFrame";

const SuggestionsRoadmapView = () => {
	let content!: JSX.Element | JSX.Element[];

	const { data, isFetching, isError } = useQuery({
		queryKey: ["feedback", "roadmap"],
		queryFn: fetchWithoutSuggestionsData,
	});

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
		const plannedLength = getStatusLength(data, "planned");
		const inProgressLength = getStatusLength(data, "in-progress");
		const liveLength = getStatusLength(data, "live");

		const STATUS_DATA = [
			{ status: "Planned", value: plannedLength, color: "orange" },
			{ status: "In-Progress", value: inProgressLength, color: "magenta" },
			{ status: "Live", value: liveLength, color: "aqua" },
		];

		content = STATUS_DATA.map((item) => (
			<SuggestionsRoadmapViewStatusIndicator
				key={item.status}
				status={item.status}
				value={item.value}
				color={item.color}
			/>
		));
	}

	return (
		<BackgroundFrame>
			<div className="flex flex-col justify-between">
				<SuggestionsRoadmapViewHeader />
				<div className="space-y-1">{content}</div>
			</div>
		</BackgroundFrame>
	);
};

export default SuggestionsRoadmapView;
