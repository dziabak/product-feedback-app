// LIBRARIES
import { useQuery } from "@tanstack/react-query";
// DATA
import { fetchWithoutSuggestionsData } from "../../lib/http";
// COMPONENTS
import RoadmapHeader from "./ui/RoadmapHeader";
import RoadmapMobileLayout from "./layouts/RoadmapMobileLayout";
import RoadmapDesktopLayout from "./layouts/RoadmapDesktopLayout";
import ErrorBlock from "../ui/errors/ErrorBlock";

import LoadingDots from "../ui/loading/LoadingDots";

const RoadmapMain = () => {
	let content!: JSX.Element | JSX.Element[];

	const { data, isFetching, isError } = useQuery({
		queryKey: ["feedback", "roadmap"],
		queryFn: fetchWithoutSuggestionsData,
	});

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
			<div className="md:py-8">
				<RoadmapHeader />
				<section className="md:hidden">
					<RoadmapMobileLayout data={data} />
				</section>
				<section className="hidden md:grid grid-cols-3 gap-4">
					<RoadmapDesktopLayout data={data} />
				</section>
			</div>
		);
	}

	return <main className="container">{content}</main>;
};

export default RoadmapMain;
