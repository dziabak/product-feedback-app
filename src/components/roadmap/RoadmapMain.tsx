// LIBRARIES
import { useQuery } from "@tanstack/react-query";
// DATA
import { fetchWithoutSuggestionsData } from "../../lib/http";
// COMPONENTS
import RoadmapHeader from "./ui/RoadmapHeader";
import RoadmapMobileLayout from "./layouts/RoadmapMobileLayout";
import RoadmapDesktopLayout from "./layouts/RoadmapDesktopLayout";
import LoadingSpinner from "../ui/loading/LoadingSpinner";
import ErrorBlock from "../ui/errors/ErrorBlock";

const RoadmapMain = () => {
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
					<RoadmapMobileLayout data={data} />
				</div>
				<div className="hidden md:grid grid-cols-3 gap-4">
					<RoadmapDesktopLayout data={data} />
				</div>
			</>
		);
	}

	return (
		<section className="container md:py-8">
			<RoadmapHeader />
			{content}
		</section>
	);
};

export default RoadmapMain;
