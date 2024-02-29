// LIBRARIES
import { useQuery } from "@tanstack/react-query";
// DATA
import { fetchWithoutSuggestionsData } from "../../../../lib/http";
// HELPERS
import { getStatusLength } from "../../../../utils/helpers";
// COMPONENTS
import RoadmapSectionHeader from "./RoadmapSectionHeader";
import RoadmapSectionStatus from "./RoadmapSectionStatus";
import LoadingSpinner from "../../../ui/loading/LoadingSpinner";
import ErrorBlock from "../../../ui/errors/ErrorBlock";
import BackgroundFrame from "../../../ui/components/BackgroundFrame";

const RoadmapSection = () => {
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
			{ status: "planned", value: plannedLength },
			{ status: "in-progress", value: inProgressLength },
			{ status: "live", value: liveLength },
		];

		content = STATUS_DATA.map((item) => (
			<RoadmapSectionStatus
				key={item.status}
				status={item.status}
				value={item.value}
			/>
		));
	}

	return (
		<div className="md:w-1/2 lg:w-full">
			<BackgroundFrame>
				<div className="flex flex-col justify-between p-2">
					<RoadmapSectionHeader />
					<div className="space-y-1">{content}</div>
				</div>
			</BackgroundFrame>
		</div>
	);
};

export default RoadmapSection;
